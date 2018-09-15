function intFinder(myArr,a,b)
{
    let newArr=[]

    for(let i =0;i<myArr.length;i++)
    {
        if(myArr[i]===a)
        {
            for(let j = i;j<myArr.length;j++)
            {
                newArr.push(myArr[j])
                if(myArr[j]===b)
                {
                    return newArr;
                }
            }
        }
    }
    return newArr;
}

function arrSum(myArr)
{
    let sum = 0;
    for(let i =0;i<myArr.length;i++)
    {
        if(typeof myArr[i]==="number")
            sum+=myArr[i];
        else if(typeof myArr[i]==="object")
            sum+=arrSum(myArr);
    }
    return sum;
}

let arr = [1,2,3,4,5,6,7,8,9];
let diffArr = [10,2,34,4,35,6,27,48,9];
console.log(intFinder(arr,3,7));
console.log(intFinder(diffArr,34,48));

console.log(arrSum(intFinder(arr,3,7)));
console.log(arrSum(intFinder(diffArr,34,48)));