//3. Define a function lastCharacter that accepts two strings as arguments. lastCharacter should return true if both strings end with the same character. Otherwise, lastCharacter should return false.

function lastCharacter(input1,input2)
{
    let lastChar1=input1[input1.length-1];
    let lastChar2=input2[input2.length-1];

    if(lastChar1===lastChar2)
        return true;
    else    
        return false;
}

console.log(lastCharacter("Hat Trick","Patrick"));
console.log(lastCharacter("Neil","Patrick"));