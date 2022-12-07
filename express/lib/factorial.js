// Combinations function
// From https://www.freecodecamp.org/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/

function factorial(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorial(num - 1));
  }
}
