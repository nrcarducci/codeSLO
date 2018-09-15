function rotateArray(arr,rotateNum)
{
    let newArr=[];
    ;
    if(rotateNum>0)
    {
        return arr.slice(arr.length - rotateNum).concat(arr.slice(0, arr.length - rotateNum));
    }

    else if(rotateNum<0)
    {
        
        for(let i=0;i<arr.length+rotateNum;i++)
        {
            newArr[i]=arr[i+(-rotateNum)];
            
        }
        for(let i = 0;i<(-rotateNum);i++)
            newArr.push(arr[i]);
        return newArr;
        
    }

    else
    {
        return arr;
    }
}


//If the rotateNum is positive, rotate should return a copy of the original array rotated to the right by the rotateNum of indices.
console.log(rotateArray([1, 2, 3, 4, 5], 1)); // => [5, 1, 2, 3, 4]
//If the rotateNum is negative, rotate should return a copy of the original array rotated to the left by the rotateNum of indices.
console.log(rotateArray([1, 2, 3, 4, 5], -1)); // => [2, 3, 4, 5, 1]
//If the rotateNum is 0, rotate should return a copy of the original array without rotating it.
console.log(rotateArray([1, 2, 3, 4, 5], 0)); // => [1, 2, 3, 4, 5]