
function oddsOnly()
{
    let result=[];
    let j=0;

    //logs only odds
    for(let i=0;i<=1000;i++)
    {
        if(i%2===1)
        {
            result[j]=i;
            console.log(result[j]);
            j++;
        }
    }
    //length of result array
    console.log("result length: "+ result.length);

    //logs elements between 30 and 70
    for(let i=0;i<=result.length;i++)
    {
        if(result[i]>=30 && result[i]<=70)
        {
            console.log(result[i]);
        }
    }
    //last ten items in array
    for(let i=result.length;i>=result.length-10;i--)
    {
        
        console.log(result[i]);
    }

}

oddsOnly();


