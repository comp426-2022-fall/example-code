const fib = (n) => {
  var a = 0, b = 1, f = 1;
  for(var i = 2; i <= n; i++) {
      f = a + b;
      a = b;
      b = f;
  }
  return f;
}

// CODE for new endpoint for index.js

// app.get('/fib', (req, res, next) => {
//   const num = req.query.n;
//   res.send(`Fib number for ${num} is ${fib(num)}`)
// }) 

module.exports = fib;