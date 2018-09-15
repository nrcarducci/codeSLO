let myVar = 10;

function myFunc()
{
    let myVar = 20;
    return myVar;
}
console.log(myVar);//calls global variable
console.log(myFunc());//calls function