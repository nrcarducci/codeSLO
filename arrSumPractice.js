function arraySum(myArr)
{
    let sum = 0;
    for(let i =0;i<myArr.length;i++)
    {
        if(typeof myArr[i]==="number")
        {
            sum+=myArr[i];
        }
        else if( typeof myArr[i]==="object")
        {
            sum+=arraySum(myArr[i]);
        }
    }
    return sum;
}

let arr = [1, [2, 3, [4]]];
console.log(arraySum(arr))