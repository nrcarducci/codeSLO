function myJoin(arr,input)
{
    return arr.slice("").join(input);
}

console.log(myJoin(['let\'s', 'make', 'a', 'list'], ' ')); // => "let's make  a list")