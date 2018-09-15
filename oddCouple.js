function oddCouple(arr)
{
    let newArr=[];
    let checker=0;
    
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2===1)
        {
            newArr[checker]=arr[i];
            checker++;
            if(checker>1)
                return newArr; 
        } 
    }
    return newArr
}

console.log(oddCouple([1,2,3,4,5]));