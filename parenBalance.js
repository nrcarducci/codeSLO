function balancedParen(myStr)
{
    let openCount=0,closeCount=0;
    console.log(myStr+": ");
    for(let i=0;i<myStr.length;i++)
    {
        if(openCount===closeCount&&myStr[i]===")")
            return false;
        
        if(myStr[i]==="(")
            openCount++;
        else if(myStr[i]===")")
            closeCount++;
    }
    if(openCount===closeCount)
        return true;
    else
        return false;
}

console.log(balancedParen("()"));
console.log(balancedParen("(())"));
console.log(balancedParen(")("));
console.log(balancedParen((1+2)+(3-2)));
console.log(balancedParen("()()()()())("))
