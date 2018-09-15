function palindrome(str) {
    let newStr = "";
    
    for(i=str.length-1;i>=0;i--)
    {
        newStr+=str[i].toLowerCase();
    }
    console.log(newStr);
    if(newStr===str)
        return true;
    else if(newStr!==str)
        return false;

}

console.log(palindrome("aCaraManaMaraca"));