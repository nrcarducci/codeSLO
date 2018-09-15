function getPairs(inputObj)
{
    let outputPairs=[];
    let newStr="";
    for(let key in inputObj)
    {
        newStr=key+":"+inputObj[key];
        outputPairs.push(newStr);
    }
    return outputPairs;
}

let myObj = 
{   "fruit":"apple",
    "vegetable":"spinach",
    "dairy":"cheese"
};// => ["fruit:apple","vegetable:spinach","dairy:cheese"]

console.log(getPairs(myObj));
let returnedValue = getPairs({book01:"Wildseed",book02:"The Name of the Wind",book03:"The Way of Kings",book04:"Gardens of the Moon",book05:"The Fifth Season"});
console.log(returnedValue);
//getPairs(myObj);