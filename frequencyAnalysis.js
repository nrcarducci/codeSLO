
function frequencyAnalysis(str)
{
    let obj=[]//initializes object

    for(let i=0;i<str.length;i++)//traverses string
    {
        let char= str.charAt(i);//character is a specific character in the string

        if(obj[char])//character in the string is found
            obj[char]=obj[char]+1;//count up by one
        else
            obj[char]=1;//if not, then 1
    }
    return obj;//return object
}



function frequencyAnalysis2(str)
{
    let result={};
    let arr= str.split('');
    for(let i=0; i<arr.length;i++)
    {
        if(result.hasOwnProperty(arr[i]))
            result[arr[i]]++;
        else
        {
            result[arr[i]]=1;
        }
    }
    return result ; 
}


console.log(frequencyAnalysis('abca'));
console.log(frequencyAnalysis2('abca'));

//frequencyAnalysis is a function
//returns an object
//returns the correct number of i's
//returns the correct number of l's
//returns the correct number of k's