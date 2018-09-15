let specialPets = [{
    name: 'Mr. Binns',
    species: 'cat'
  }, {
    name: 'Pusheen',
    species: 'cat'
  }
];

function whosASpecial(objInput)
{
    let newStr="";
    for(let key in objInput)
    {
        for(let key2 in objInput[key])
        {
            if(key2==="name")
                newStr+= objInput[key][key2]+" the ";
            
            if(key2==="species")
                newStr+= objInput[key][key2]+" is very special! ";
        }
    }
    return newStr;
}

console.log(whosASpecial(specialPets));
// => Sadie the cat is very special! Layla the cat is very special! Bogie the dog is very special!
// =>'Mr. Binns the cat is very special! Pusheen the cat is very special!'

/*
whosASpecial
    is a function
    returns a string
    returns a happy string confirming that all pets are special
*/