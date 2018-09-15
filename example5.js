/*5. Write a function everyWhichWay that accepts three number arguments. everyWhichWay should:
return 'sum' if the sum of the first two numbers equals the third
return 'difference' if the first number minus the second equals the third
return 'product' if the product of the first two numbers equals the third
return 'fraction' if the first number divided by the second equals the third
return null if none of the above are true

*/

function everyWhichWay(a,b,c)
{
    if(a+b===c)
        return "sum";
    else if(a-b===c)
        return "difference";
    else if(a*b===c)
        return "product";
    else if(a/b===c)
        return "fraction";
    else    
        return null;
}

everyWhichWay(10, 20, 30); // => sum

everyWhichWay(50, 20, 30); // => difference

everyWhichWay(4, 4, 16); // => product

everyWhichWay(100, 10, 10); // => fraction

everyWhichWay(1, 1000, 50); // => null

console.log(everyWhichWay(3,3,6));//add
console.log(everyWhichWay(100,4,96));//sub
console.log(everyWhichWay(3,3,9));//mult
console.log(everyWhichWay(4,2,2));//div
console.log(everyWhichWay(100,3,2));//null