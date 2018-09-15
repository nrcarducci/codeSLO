//1. Define a function greeting that accepts an optional string argument called name. greeting should return a personalized string if the name is present. Ex. "Hello Sarah!" or "Hello!"

function greeting(name)
{
    if(name!=undefined&&name!=null) 
        return "Hello "+ name+"!";
    else
        return "Hello!"

}

console.log(greeting());
console.log(greeting("Neil"));