
let testArr = [8,1,3,1,4,5,6,3,2];

function countDuplicates(arr) 
{   
    let sortArr = arr.slice().sort();
    let results = [];
    for (var i = 0; i < sortArr.length - 1; i++) 
    {
        if (sortArr[i + 1] === sortArr[i]) 
        {
            results.push(sortArr[i]);
        }
    }
    console.log(results);
    return results.length;
}

console.log(countDuplicates(testArr));