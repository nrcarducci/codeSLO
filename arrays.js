let numArray= [0,1,2,3,4];
let stringArray=["This","is","a","String","array"];
let fubarArray=[1,"wooo",10,"bc4l","poo",1337,"LeelooDallasMultiPass"];

let arrLenth1 = numArray.length;
let arrLenth2 = stringArray.length;
let arrLenth3 = fubarArray.length;

let lastIndex1 = numArray.length-1;
let lastIndex2 = stringArray.length-1;
let lastIndex3 = fubarArray.length-1;

let firstElement=numArray[0];
let secondElement=stringArray[3];
let thirdElement=fubarArray[3];
let fourthElement=fubarArray[5];
let fifthElement=fubarArray[6];

console.log(numArray);
console.log(stringArray);
console.log(fubarArray);



console.log(firstElement);
console.log(secondElement);
console.log(thirdElement);
console.log(fourthElement);
console.log(fifthElement);


console.log(arrLenth1);
console.log(arrLenth2);
console.log(arrLenth3);

console.log(numArray[lastIndex1]);
console.log(stringArray[lastIndex2]);
console.log(fubarArray[lastIndex3]);

let myArrayReverse = numArray;
myArrayReverse=myArrayReverse.reverse();
console.log(myArrayReverse);

let myArraySort= stringArray;
myArraySort = myArraySort.sort();
console.log(myArraySort);