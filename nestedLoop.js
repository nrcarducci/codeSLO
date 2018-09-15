let sample2D = [['a','b','c'],['d','e','f']];

for(let i=0; i < sample2D.length; i++)
{
    for(let j=0; j < sample2D[i].length; j++)
    {
        console.log(sample2D[i][j]);
    }
}
////

let mixed2D = ['a',['b','c','d'],'e',['f']];

for(let i=0; i < mixed2D.length; i++)
{
    if(Array.isArray(mixed2D[i]))
    {   
        for(let j=0; j < mixed2D[i].length; j++)
        {
            console.log(mixed2D[i][j]);
        }
    }
    else 
    {
        console.log(mixed2D[i]);
    }
}
    