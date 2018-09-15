function getAllPairs(objInput)
{
    outputArr=[];
    newStr="";

    for(let key in objInput)
    {
        for(let key2 in objInput[key])
        {
            newStr=key2+":"+objInput[key][key2];
            outputArr.push(newStr);
        }
    }
    return outputArr;
}



let myArr = [{"fruit":"apple"},{"vegetable":"spinach"},{"dairy":"cheese"}];

console.log(getAllPairs(myArr)); // => ["fruit:apple","vegetable:spinach","dairy:cheese"]