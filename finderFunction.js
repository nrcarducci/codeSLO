let numbers = [1, 3, 5, 64, 7, 12];
let odds = [9, 13, 15, 17];

function isEven(num) 
{
  return !(num % 2);
}

function finderFunction(arr,fnInput)
{
    for(let i =0;i<arr.length;i++)
    {
        if(fnInput(arr[i])===true)
        {
            return i;
        }
    }
    return -1;
}


//console.log(isEven(2));
console.log(finderFunction(numbers, isEven)) // 3
console.log(finderFunction(odds, isEven)) // -1

/*
finderFunction
    is a function
    returns a number
    returns the index of the first element that causes the callback to return true
    returns -1 if the callback never returns true
*/