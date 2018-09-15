function arrayFlattener(arr)
{
    var newArr = [].concat.apply([], arr);
    return newArr;
}

console.log(arrayFlattener([1, 2, [3]]));