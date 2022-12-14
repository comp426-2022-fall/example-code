const express = require('express')
const app = express()

const port = 5000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
	res.send('Hello, world!')
})

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
