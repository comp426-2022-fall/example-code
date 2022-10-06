const express = require('express')
const app = express()

const port = 5000

app.get('/', (req, res, next) => {
	res.send('Hello, world!')
})

app.listen(port, () => {
	console.log("Server listening on port" + port)
})

const fib = (n) => {
  if (n == 1) {
    return 1; }
  if (n == 2) { return 1; }
  return fib(n-1) + fib(n-2);
}

app.get('/fib', (req, res, next) => {
       res.send('Fib implementation to be completed')
})
