let newFunction1 = callCount();
let newFunction2 = callCount();

newFunction1(); // => 1
newFunction1(); // => 2

newFunction2(); // => 1
newFunction2(); // => 2

function callCount()
{
    let counter=0;
    function call()
    {
        return counter+=1;
    }
    return call;
}

/*
callCount
    is a function
    returns a function
    returns a function that, when invoked, returns the number of times it has been called
*/