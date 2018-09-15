let arr=[1,2,3,4,5];

function myArrIncludes(myArr,myInput)
{
    let result="";
    
    if(myArr.includes(myInput)===true)
    {
        result ="element: "+myInput+ " is in index: "+ myArr.indexOf(myInput) +" of array " +myArr;
        return result;
    }

    else
    {
        result = "There is no such element " +myInput +" in array " + myArr;
        return result;
    }
}

console.log(myArrIncludes(arr,3));
console.log(myArrIncludes(arr,7));