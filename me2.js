let me2={
    name:'Tarana',
    getGreeting:function()
    {
        return 'Hi '+ friend.name +", my name is "+ this.name+".";
    }

}
let friend={
    name:'Jeff',
}


console.log(me2.name); // 'Tarana'
console.log(friend.name); // 'Alyssa'
console.log(me2.getGreeting(friend)); // => 'Hi Alyssa, my name is Tarana.'

/*
me2
    is an object
name
    is a property in me2
    is a string
getGreeting
    is a method in me2
    is a function
    returns the correct greeting
*/