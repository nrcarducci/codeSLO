function dogBreeder(input1,input2)
{
    let obj={};
    let defaultName = "Steve";
    let defaultAge = 0;
    let dogName = defaultName;
    let dogAge = defaultAge;

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

console.log(dogBreeder('Sam', 12));    // => {name: 'Sam', age: 12}

console.log(dogBreeder(15));    // => {name:'Steve', age: 15}

console.log(dogBreeder('Snoopy', 3));
console.log(dogBreeder('Snoopy'));
console.log(dogBreeder());

//dogBreeder should return an object that represents a new dog! 
//If the user doesn't define a name, assume the dog's name is Steve. 
//If the user doesn't define the dog's age, assume the dog's age is 0.

/*
dogBreeder is a function check
returns an object//check
returns an object with the given name and age//check
returns an object with the default age //check
returns an object with the default name and age//check
returns an object with the defaul name if only the age is defined//check
*/