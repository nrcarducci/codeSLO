function summer (a, b) {
    return a + b
  };
  
  let sumFive = partial(summer, 5);
  sumFive(10) // => 15;

  function partial(myCallback, myInput)
  {
      function sumNumber(myOtherInput)
      {
            return myCallback(myInput,myOtherInput);  
      }
      return sumNumber;
  }



/*
partial
    is a function CHECK
    returns a function 
    returns a function that calls the given function, passing in the value as an argument

*/