/*
addToArray
returns an array
is a function
Returns an array that contains the second parameter passed during the function call
*/

function addToArray(arr,input)
{
    arr.push(input);
    return arr;
}
console.log(addToArray([1,2,3,4,5],7));
