let me = {

"firstname":"Neil",
"lastName":"Carducci",
"dob":"3/2/1989",
"hobbies":["Hockey","Video Games","Fatherhood","Sleep"]
}
/*
console.log(me["firstname"]);
console.log(me["lastName"]);
console.log(me.dob);
console.log(me.hobbies);

console.log(me.hasOwnProperty("firstname"));
console.log(me.hasOwnProperty("job"));//lol
*/
for(let key in me)//"for...in loop"
{
        console.log(key);//only outputs keys
        console.log(me[key])//outputs key values
        console.log(me + ": "+me[key]);//outputs entire object
    
}