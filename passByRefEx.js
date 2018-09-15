function test(x)
{
    let newCount=0;
    x.push(4);
    x.push(5);
    console.log(x);
    newCount=x.length;
    for(let i =x.length;i>=0;i--)
    {
        x.pop();
    }
    for(let i =0;i<newCount;i++)
    {
        x.push(i)
    }
    return;

}

let a=[1,2,3];
test(a);
console.log(a);

