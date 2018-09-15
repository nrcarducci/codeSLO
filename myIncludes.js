function myIncludes(arr,searchInput)
{
    let result=false; 
    for(let i=0;i<3;i++)//not good programming, should be arr.length, but requirements said otherwise...
    {
        if(arr[i]===searchInput)
            result = true
    }
    return result;
}

console.log(myIncludes([10, 20, 30], 20)); // => true
console.log(myIncludes(['apples', 'bananas', 'citrus'], 'pears')); // => false