function veryOdd(arrInput)
{
    newArr=[];
    for(let i =0;i<arrInput.length;i++)
    {   
        if(arrInput[i]%2===1)
            newArr.push(arrInput[i]);
    }
    return newArr;
}

let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
let oddNums = veryOdd(allTheNums);

console.log('oddNums:', oddNums); // [1, 3, 5, 7];
console.log('allTheNums:', allTheNums); // [1, 2, 3, 4, 5, 6, 7, 8]


//Write a function, veryOdd. The function accepts an array of numbers. It should return a new array that contains only the odd numbers from the given array. veryOdd must not mutate the given array.