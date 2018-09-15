let str = "JavaScript is awesome"

function reverseStr(str)
{
    return str.split("").reverse("").join("");
}

console.log(reverseStr(str));