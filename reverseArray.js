function reverseArray(arr)
{
    let newArr=[];
    let counter=0;
    for(let i = arr.length-1; i>=0;i--)  
    {
        newArr[counter]=arr[i];
        counter++;
        arr.pop();
    }
    
    for(let i =0; i<newArr.length;i++)
    {
        arr.push(newArr[i]);
    }
    return newArr;
}

let myArray =[1, 2, 3, 4];
let myarr2= ['here', 'we', 'go']
reverse(myArray);
reverse(myarr2);
console.log(myArray); // [4, 3, 2, 1]
console.log(myarr2);

