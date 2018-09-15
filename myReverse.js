function myReverse(input)//LOOPS WILL REVERSE STRING
{
    let output=[];
    for(let i=input.length-1;i>=0;i--) 
        output.push(input[i]);
    return output;
}

console.log(myReverse([1,2,3,4,5]));