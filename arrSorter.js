let arr = [1,2,2423,4234234,23423,45,345435,234];
let lastindex=0;
let sortedArr =arr.sort();

for(let i =0;i<sortedArr.length;i++)
    lastindex = i;

console.log("the largest number in the arr is " + sortedArr[lastindex]);