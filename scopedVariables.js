let globalVar1 = "This is a global variable";
let globalVar2 = 1337;

function thisIsAFn()
{
    let localVar1= "This is a local Variable";
    let localVar2=2;
    let localVar3= 3.14159;

    console.log("LOCAL");
    console.log("From the local scope: "  + globalVar1); //THIS WILL WORK
    console.log("From the local scope: "  + globalVar2);
    console.log("From the local scope: "  + localVar1);
    console.log("From the local scope: "  + localVar2);
    console.log("From the local scope: "  + localVar3);

}
console.log("GLOBAL");
console.log("From the local scope: " + globalVar1);
console.log("From the local scope: " + globalVar2);

/*console.log("From the local scope: "  + localVar1);
console.log("From the local scope: "  + localVar2);
console.log("From the local scope: "  + localVar3);*/ //THIS WONT 


thisIsAFn();