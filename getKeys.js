/*
Create a function getKeys that is a correctly formatted JavaScript function.

getKeys must accept an object literal as a parameter.

getKeys should return an array containing the keys from the parameter object
*/

function getKeys(inputObj)
{
    let outputKeys=[];

    for(let key in inputObj)
    {
        outputKeys.push(key);
    }
    return outputKeys;
}