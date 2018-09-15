function compareObjects(obj1,obj2)
{
   let bool = false;
   let keys1 = Object.keys(obj1);
   let keys2 = Object.keys(obj2);
    
   
    if(keys1.length===keys2.length)
    {
        for(let i = 0; i<keys1.length;i++)
        {
            if(keys1[i]===keys2[i])
                bool = true;
            
            if(keys1[i]!==keys2[i])
                return false;
            
            if(obj1[keys1[i]]!==obj2[keys2[i]])
                return false;  
        }
    }

    else
    {
        return false
    }
    return bool;
 
}

/*
returns a boolean
returns true if both objects have identical key/value pairs  CHECK
returns false if the objects have different keys    CHECK
returns false if the objects have different values 
returns false if the first object has an extra key/value pair
returns false if the second object has an extra key/value pair
*/

//console.log(compareObjects({ name: 'nick' }, { name: 'nick' })); // -> true

//console.log(compareObjects({ name: 'zeke' }, { name: 'zeke', age: 12 })); // -> false

console.log(compareObjects({a: 1, b: 2}, {a: 1, b: 3}));