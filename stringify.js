function returnsANumber() 
{
    return 100;
}
  
  let newFunction = stringify(returnsANumber);
  newFunction(); // => '100'


 function stringify(myCallback)
 {
     function newMyCallback()
     {
        let newStr = myCallback;
        return newStr.toString();
     }
     return newMyCallback;
 } 
/*
stringify
    is a function
    returns a function
    returns a function that, when invoked, always returns a string

*/