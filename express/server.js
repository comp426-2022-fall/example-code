const fs = require('fs')
const express = require('express')
const app = express()

const morgan = require('morgan')

//const bcrypt = require('bcrypt')

const db = require('./database.js')

const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/app/', (req, res, next) => {
	res.send('Hello, world!')
})

// Create user endpoint
app.post('/app/user/new/', (req, res, next) => {
	let userdata = {
		username: req.body.username,
		email: req.body.email,
		mobile: req.body.mobile,
		password: req.body.password
	}
	const stmt = db.prepare('INSERT INTO userinfo (username, email, mobile, password) VALUES (?, ?, ?, ?)');
	const info = stmt.run(userdata.username,userdata.email,userdata.mobile,userdata.password);
	res.status(200).json({"message":"user "+ userdata.username +" created"})
	console.log(userdata)
	console.log(info)
})

// Read user info endpoint
app.get('/app/user/info/:username/', (req, res, next) => {
	//let username = req.params.username
	const stmt = db.prepare('SELECT * FROM userinfo WHERE username = ?')
	const info = stmt.get(req.params.username)
	res.status(200).json(info)
	console.log(info)
})
//
// Modify user info endpoint
app.patch('/app/user/info/update/:username/', (req, res, next) => {
	let userdata = {
		username: req.params.username,
		email: req.body.email,
		mobile: req.body.mobile,
		password: req.body.password //? bcrypt(req.body.password) : NULL
	}
	const stmt = db.prepare('UPDATE userinfo SET username = COALESCE(?,usernmame), email = COALESCE(?,email), mobile = COALESCE(?,mobile), password = COALESCE(?,password) ;')
	 
	const info = stmt.run(userdata.username,userdata.email,userdata.mobile,userdata.password);
	res.status(202).json({"message":info.changes+" record updated: ID "+info.lastInsertRowid+" for username userdata.username"})
	console.log(userdata)
	console.log(info)
})

// Delete user info endpoint
app.delete('/app/user/bye/', (req, res, next) => { 
//	let userdata = {
//		username = req.body.username
//	}
})


// Some send data endpoint
app.post('/senddata/:username/', (req, res, next) => {
	console.log(req.params.username + " logged in with this password: " + req.body.password)
	res.status(200).json(
		{ 
			username: req.params.username, 
			password: req.body.password
		}
	).end()
})

app.listen(port, () => {
	console.log("Server listening on port " + port + ".")
})
