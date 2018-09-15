let myString = "Happy Birthday";
let someChar = myString[1]; // what letter is this? 'a'
let anotherChar = myString[5]; // how about this one? ' '

console.log(someChar);
console.log(anotherChar);


let myString2 = "hello world";
console.log(myString2);
let myArray = myString2.split(); // myArray is now [‘hello world’]
console.log(myArray);
myArray = myString2.split(''); // myArray is now [‘hello world’]
console.log(myArray);

let myString3 = "There is nothing better than being a slacker!";
myArray = myString3.split(' '); // notice the space returns [‘there’,’is’,’nothing’,’better’...] with each word now its own string.
console.log(myArray);