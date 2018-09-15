let myArr=[1,2,3,34,343[3,343,2,[3423,34567]],452];



function arraySum(arr,flat = []){
    // iterate through array
    for(let i = 0; i<arr.length; i++)
    {
        // if element is an array, recurse.
        if(Array.isArray(arr[i])){
        arraySum(arr[i],flat);
        }
        else
        {
            // if element is a number, push to flat array
            flat.push(arr[i]);
        }
    }
    return flat.reduce((a,e) => a + e);
    }

console.log(arraySum(myArr,myArr));