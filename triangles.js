function rightTriangle(rows) {
    let str="";
    for(let i =rows;i>0;i--)
    {
        for(let j = i;j>0;j--)
            str += "*";
        str+="\n";
    }
    return str;
} 

console.log(rightTriangle(5));