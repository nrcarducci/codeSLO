let str1 = "The quick brown fox jumps over the lazy dog"
let str2 = "The*quick*brown*fox*jumps*over*the*lazy*dog";

let newStr1 = str1.split(" ");
let newStr2 = str2.split("*").reverse();//just for laughs

console.log(newStr1);
console.log(newStr2);