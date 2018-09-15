let ninesTable = timesTable(9);
//ninesTable(8)    // => 72

let twelvesTable = timesTable(12);
//twelvesTable(100)    // => 1200

function timesTable(myNum)
{
    function timesInput(myOtherNum)
    {
        return myNum*myOtherNum;
    }
    return timesInput;
}

/*
timesTable
    is a function
    returns a function
    returns a function that correctly calculates the product of any number with the original number
*/