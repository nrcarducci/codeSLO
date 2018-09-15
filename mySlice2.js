function mySplice(arr,start,del,newValue)
{
    let newArr1stHalf=[];
    let newArr2ndHalf=[];
    let deleteArr=[];
    let newTempArr=[];
    let totalDeleted=start+del;

    for(let i =0;i<arr.length;i++)
    {
        if(i<start)
            newArr1stHalf.push(arr[i]);
        else if(i<totalDeleted)
            deleteArr.push(arr[i]);
        else if(i === totalDeleted && i<arr.length)
            newArr2ndHalf.push(arr[i]);
    }
    if(newValue!==undefined)
        newArr1stHalf[start]=newValue;

    newTempArr= newArr1stHalf.concat(newArr2ndHalf);
           
    for(let i=arr.length;i>0;i--)
        arr.pop();
    for(let i=0;i<newTempArr.length;i++)
        arr.push(newTempArr[i]);
    
    return deleteArr;
}

let myArr=[1,2,3,4,5];
let myArr2=[1,2,3,4,5];
let myArr3=[1,2,3,4,5];


console.log(mySplice(myArr,1,3));
console.log(myArr);

console.log(mySplice(myArr2,1,1,"hello"));
console.log(myArr2);

console.log(mySplice(myArr3,3,0,"hello again"));
console.log(myArr3);