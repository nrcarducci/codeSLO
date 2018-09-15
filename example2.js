//2. Define a function doYouPlayTheTheremin that accepts a string as an argument. doYouPlayTheTheremin should return true if the inputted string starts with the letters s or S. Otherwise, doYouPlayTheTheremin should return false.

function doYouPlayTheTheremin(input)
{
    if(input[0] ==='s'|| input[0]==='S')
        return true;
    else   
        return false;

}

console.log(doYouPlayTheTheremin('s'));
console.log(doYouPlayTheTheremin('S'));
console.log(doYouPlayTheTheremin('p'));