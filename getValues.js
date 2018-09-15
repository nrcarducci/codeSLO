function getValues(inputObj)
{
    let outputValues=[];

    for(let key in inputObj)
    {
        outputValues.push(inputObj[key]);
    }
    return outputValues;
}

let object ={

    1:"one",
    2:"two",
    3:"three"
};

console.log(getValues(object));