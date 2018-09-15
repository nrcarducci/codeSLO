let arr = ['classical','rock','hiphop','country','reggae'];

function favMusicSplice(startingIndex,removeNumIndex)
{
    
    return arr.splice(startingIndex,removeNumIndex);
}

console.log("Spliced: "+ favMusicSplice(3,2));//starts at index 3, removes 2 elements
console.log("Spliced: "+ favMusicSplice(0,1));//starts at index 0, removes 1 element
console.log(arr);