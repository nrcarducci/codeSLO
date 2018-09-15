function myUnshift(arr,input)
{
    let newArr=[];
    newArr[0]=input
    for(let i=0;i<arr.length;i++)
        newArr[i+1]=arr[i];

    return newArr;
}

console.log(myUnshift([1, 2, 3], 0)); // => [0, 1, 2, 3];