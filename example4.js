//4. Write a function maxOfThree that accepts three number arguments. maxOfThree should return largest number of the three.


function maxOfThree(a,b,c)
{
    if(a>=b && a>=c)
        return a;
    else if(b>=a && b>=c)
        return b;
    else if(c>=a && c>=b)
        return c;
}

console.log(maxOfThree(2,100,2));