function evenAndOdd(arr)
{
    let oddArr=[];
    let evenArr=[];
    let newArr=[];
    let evenCount=0;
    let oddCount=0;

    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2===0)//even numbers
        {
            evenArr[evenCount]=arr[i];
            evenCount++;
        } 
        else//odd numbers
        {
            oddArr[oddCount]=arr[i]
            oddCount++;
        }       
    }
    newArr.push(evenArr);
    newArr.push(oddArr);
    //console.log(newArr);
    //console.log(oddArr);
    return newArr; 
}

console.log(evenAndOdd([1, 2, 3, 4, 5, 6]));