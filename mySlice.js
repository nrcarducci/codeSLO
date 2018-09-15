function mySlice(arr,startIdx,endIdx)
{
    let newArr=[];

    if(startIdx===undefined && endIdx===undefined)
        return arr;

    if(startIdx<0)
        startIdx=arr.length+startIdx;
    
    if(endIdx<0)
        endIdx=arr.length+endIdx;

    if(endIdx===undefined)
        endIdx=arr.length;

    for(let i=startIdx;i<endIdx;++i)
    {
        newArr.push(arr[i]);
    }
    return newArr;
}

//mySlice should return a copy of the original array. The copy should include all of the elements from the orignal array, starting at and including the startIdx, up through and excluding the endIdx.
console.log(mySlice([1, 2, 3], 1, 2)); // => [2] push everything included in index 1 but not index 2

//If the endIdx is undefined, include all the indices starting at and including the startIdx through the end of the original array.
console.log(mySlice([1, 2, 3], 1)); // => [2, 3] push everything that is inex 1 and above

//If the startIdx is undefined, return a copy of the original array.
console.log(mySlice([1, 2, 3])); // => [1, 2, 3] don't change a thing

//startIdx and endIdx can be negative numbers, in which case they count indices from the back of the array.
console.log(mySlice([1, 2, 3],-1)); // => [3] push everything at index above index 1


console.log(mySlice([1, 2, 3],0,-2));