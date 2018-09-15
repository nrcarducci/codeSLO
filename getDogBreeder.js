let puppyFarm = getDogBreeder('Snoopy', 0);
let rescueShelter = getDogBreeder('Odie', 3);

console.log(puppyFarm('Olaf', 3)); // => {name: 'Olaf', age: 3};
console.log(puppyFarm(2)); // => {name: 'Snoopy', age: 2}

console.log(rescueShelter()); // => {'Odie', 3} CHECK

function getDogBreeder(dName,dAge)
{
    function dogBreeder(input1,input2)
    {
        let obj={};
        let dogName = dName;
        let dogAge = dAge;

        if(input1===undefined)
        {
            return Object.assign(obj, {'name':dogName,'age':dogAge});
        }
        
        else if(isNaN(input1)===true && isNaN(input2)===false)
        {
            dogName=input1;
            dogAge=input2;
        }

        else if(isNaN(input1)===false)//returns a number, should return default name to steve
            dogAge = input1;

        else if(isNaN(input1)===true)//returns a string
            dogName = input1;
            
        Object.assign(obj, {'name':dogName,'age':dogAge});
        return obj;
    }
    return dogBreeder;
}


/*
getDogBreeder
    is a function CHECK
    returns a dogBreeder function CHECK

dogBreeder
    is a function CHECK
    returns an object CHECK
    returns an object with the given name and age
    returns an object with the default age defined when getDogBreeder was called
    returns an object with the default name and age defined when getDogBreeder was called
    returns an object with the default name defined when getDogBreeder was called if only the age is defined
*/