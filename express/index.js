const express = require('express')
const app = express()
const fib = require('./lib/fib_daqichen')

const port = 8080

app.get('/', (req, res, next) => {
	res.send('Hello, world!')
})

app.listen(port, () => {
	console.log("Server listening on port" + port)
})

app.get('/fib', (req, res, next) => {
  const num = req.query.n;
  res.send(`Fib number for ${num} is ${fib(num)}`)
}) 
