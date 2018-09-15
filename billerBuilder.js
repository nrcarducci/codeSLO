let newYorkBiller = billerBuilder('NY');
//newYorkBiller(100) // => 107.12 (100 * 1.03 * 1.04)

let newJersBiller = billerBuilder('NJ');
//newJersBiller(100) // => 111.95625 (100 * 1.05 * 1.06625)


function billerBuilder(myState)
{ 
    let shipping = 0;   
    let salesTax = 0;

    function rate(input)
    {
        if(myState==='NJ')
        {
            shipping=1.05;
            salesTax=1.06625;
        }
        if(myState==='NY')
        {
            shipping=1.03;
            salesTax=1.04;
        }
        return input*shipping*salesTax;
    }
    return rate;
}

console.log(newYorkBiller(100));
console.log(newJersBiller(100));



/*
if NY, charge 3% for shipping and 4% for sales tax
if NJ, charge 5% for shipping and 6.625% for sales tax


billerBuilder
    is a function check
    returns a function check
    returns a function that correctly calculates the final price in NY
    returns a function that correctly calculates the final price in NJ
*/