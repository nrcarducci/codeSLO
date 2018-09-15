function makeGrid(x,y)
{
    let xArr=[];
    let yArr=[];

    for(let j=0;j<y;j++)
    {
        for(let i=0;i<x;i++)
        {
            xArr[i]=i+1;
        }
        yArr.push(xArr);
    }
    return yArr;
}

console.log(makeGrid(3,4));
/* => [[1, 2, 3],
       [1, 2, 3],
       [1, 2, 3],
       [1, 2, 3]]
*/