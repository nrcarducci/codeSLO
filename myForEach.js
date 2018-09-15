let sum = 0;

function addToSum(num) {
    sum += num;
}

let nums = [1, 2, 3];

function myForEach(myArray,callback)
{
    myArray.forEach(function(element,index)
    {
        callback(element,index);
    });
}

myForEach(nums, addToSum);

console.log(sum); // 6

/*
myForEach
    is a function CHECK 
    returns undefined CHECK
    calls the callback once for every element in the passed-in array CHECK
    passes each element of the array as the first argument into the callback CHECK
    passes the index of each element of the array as the second argument into the callback
*/