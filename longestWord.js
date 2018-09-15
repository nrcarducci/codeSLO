function longestWord(str)
{
    let longWord = str[0];

    for(let i = 0;i<str.length;i++)
    {
        if(str[i].length<str[i+1].length)
        {
            longestWord=str[i+1];
        }
    }

    return longestWord;

}


console.log("This is a sentence");
/*
Input:"fun&!! time"

Output:"time"


Input:"I love dogs"

Output:"love"
*/