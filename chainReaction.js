function addTen(num) 
{
    return num + 10;
}
  
function subtractFive(num) 
{
    return num - 5;
}
  
function multiplyFive(num) 
{
    return num * 5;
}

function chainReaction(val,arr)
{
    for(let key in arr)
        val=arr[key](val);
    return val;
}

console.log(chainReaction(0, [addTen, subtractFive, multiplyFive])); // => 25
console.log(chainReaction(0, [subtractFive, multiplyFive, addTen])); // => -15




/*
chainReaction
    is a function
    returns the chained result from one function
    returns the chained result from two functions
    returns the chained result from three functions
*/