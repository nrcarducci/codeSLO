function arraySum(myInput) 
{
    var sum=0; //initilize the sum var
    for(var i=0;i<myInput.length;i++)
    { 
        if(typeof myInput[i]==="number")//if element is a number add input into sum
        {
            sum+=myInput[i];
        }
        else if(typeof myInput[i] === "object")//if element is an array/object, recursivly add the function to the sum
        {
            sum+=arraySum(myInput[i]);//recursion
        }
    }
    return sum;//returns the sum
}


console.log(arraySum([1,2,[19,4],3,4,[5,6,[7,8]]]));
console.log(arraySum([1,2,3,4,5,6,7,8]));