let addNums = {

    addTen: function(num) {
      return num + 10;
    },
  
    addTwenty: function(num) {
      return num + 20;
    },
  
    someProperty: 'value'
};

function callThemAll(objInput,valueInput)
{
    let newArr=[];
    let method;
   
    for(let propKey in objInput)//any property that is a function/method
    {   
        method=objInput[propKey];
        if(typeof method==="function")  
        {   
            console.log(objInput[propKey]);
            newArr.push(method(valueInput));//add the value input somehow then add to the newArr    
        }
    }
    return newArr;
}


console.log(callThemAll(addNums, 100)); // => [110, 120]
