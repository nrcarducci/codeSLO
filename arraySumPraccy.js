function arraySum(myArr)
{
    let sum = 0;
    myArr.forEach(element => {
        if(typeof element==="number")
            sum+=element;
        else if(typeof element==="object")
            sum+=arraySum(element);
    });
    return sum;
}

let simpleArr= [1,2,3];
let nestedArray=[1,2,3,[4,5,[6,7],9],10,11,[12,100],1];

console.log(arraySum(simpleArr));
console.log(arraySum(nestedArray));

