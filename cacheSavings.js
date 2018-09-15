function adds10(num) 
{
    let start = Date.now();
    let end = Date.now();
  
    // pause for 3 seconds, to make the function expensive!
    while (end - start < 3000) {
      end = Date.now();
    }
  
    return num + 10;
}
  
function cacheSavings(myCallback)
{
    let cache = [];
    let inputArr =[];
    function newFunction(myInput)
    {
        let result =0;

        if(inputArr.includes(myInput)===false)
        {
            result=myCallback(myInput);
            inputArr.push(myInput);
            cache.push(result);
            return result; 
        }
        if(inputArr.includes(myInput)===true)
        {
            return cache[0];
        }
    }
    return newFunction;
}

  let cachedAdds10 = cacheSavings(adds10);
  
  console.log(cachedAdds10(20)); // => returns 30, takes 3 seconds!
  console.log(cachedAdds10(0)); // returns 10, takes 3 seconds!
  
  console.log(cachedAdds10(20)); // => returns 30, takes no time at all!



  /*
cacheSavings
    is a function CHECK
    returns a function CHECK

the returned function
    calls the callback passed into cacheSavings the first time the returned function is called CHECK
    does not call the callback a second time if the returned function is called twice with same argument
    calls the callback once for every unique argument received
    returns the result from the callback, whether or not the callback is actually called CHECK
  */