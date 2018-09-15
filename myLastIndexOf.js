function myLastIndexOf(arr,searchValue,startIdx)
{

    if(arr.indexOf(searchValue)===-1)//if the index is undefined
    {
        return -1;
    }
   
    //else if(arr.includes(searchValue)) //another way to use this, but the else is easier to type
    else
    {
        if(startIdx)//if the startIdx is found
        {
            for(let i=startIdx;i>0;i--)//from the end of the array
            {
             if(arr[i]===searchValue)
                  newIndex=i;
            }
            return newIndex;
        }
        
        else//do not need it, but put it here for consistency
        {
            for(let i=0;i<arr.length-1;i++)
            {
                if(arr[i]===searchValue)
                    newIndex=i;
            }
            return newIndex;
        }
    }   
     
}

console.log(myLastIndexOf(['gee', 'gee', 'gee', 'gee', 'baby', 'baby'], 'gee')); // => 3
console.log(myLastIndexOf(['Tiffany', 'Sunny', 'Yoona'], 'Jessica')); // => -1
console.log(myLastIndexOf(['the', 'girls', 'bring', 'the', 'boys', 'out'], 'the', 2)); // => 0
