let a = true;
let b = false;
let c = true;

function lieDetector(phrase)
{
    if(phrase)//same as if(phrase === true)
        console.log("The phrase is true");
    else if(!phrase)//same as if(phrase !== true)
        console.log("The phrase is false");
}

lieDetector(a);
lieDetector(b);
lieDetector(c);