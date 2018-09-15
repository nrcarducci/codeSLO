function sumDigits(num,sum=0,index=0)
{
    let str = num +'';
    if(index > str.length-1)
    {
        return sum;
    }
    else
    {
        sum += parseInt(str[index]);//parse str to int
        return sumDigits(num,sum,index+1);
    }
}