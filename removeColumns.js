function removeColumns(arr,input)
{
    let newArr=[];
    for(var i=0;i<arr.length;i++)
    {
        newArr[i]=arr[i].splice(0,arr[i].length-input);
    }
    return newArr
}

console.log(removeColumns([
    [1, 2, 3, 4,5],
    [1, 2, 3, 4,5],
    [1, 2, 3],
    [1, 2, 3, 4,5],
    [1, 2, 3, 4,5]], 3));
/* => [
[1],
[1],
[1],
[1]]
*/