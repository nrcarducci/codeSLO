function sumNums(val, sum = 0)
{
    if(val<1)
        return sum;
    else
    {
        sum+=val
        return sumNums(val-1,sum);
    }
}

console.log(sumNums(3)); // => 6 (3 + 2 + 1)