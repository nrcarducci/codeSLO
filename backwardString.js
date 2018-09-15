function backwardString(str)
{

    if(str.length === 1)
    {
        console.log(str[0]);
    }
    else
    {
        console.log(str[str.length-1])
        backwardString(str.slice(0,str.length-1));
    }
}

console.log(backwardString('happy'));
// y
// p
// p
// a
// h