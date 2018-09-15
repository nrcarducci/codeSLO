function reverseString1(input)
{
    return input.split("").reverse("").join("");//S""r""j" SPLIT REVERSE JOIN WILL REVERSE A STRING
}

function reverseString2(input)//LOOPS WILL REVERSE STRING
{
    let output="";
    for(let i=input.length-1;i>=0;i--) 
        output+=input[i];
    return output;
}

console.log("Function 1: "+ reverseString1("THE QUICK BROWN FOX JUMPS OVER THE FENCE."));
console.log("Function 2: "+ reverseString2("Hello"));