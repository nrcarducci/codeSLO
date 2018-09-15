/*
makeGosling
    Returns an object with the correct property keys and values
    is a function

firstName = "Ryan"
lastName = "Gosling"
occupation = "Actor"
catchPhrase = "Hey girl, I'll store your key/value pairs."
    */
function makeGosling()
{
    let actor=
    {
        firstName: "Ryan",
        lastName: "Gosling",
        occupation: "Actor",
        catchPhrase: "Hey girl, I'll store your key/value pairs."
    }
   
    return actor;
}

console.log(makeGosling());