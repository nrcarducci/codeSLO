function searchArray(arr,input)
{
    //console.log(arr.indexOf(input));
    if(arr.indexOf(input)>=0)
        return true;
    else
        return false;
}

console.log(searchArray([1,2,3,4,5],2));
console.log(searchArray([1,2,3,4,5],6));