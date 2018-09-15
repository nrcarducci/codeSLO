function clone(src)
{
    let tar={};

    for(let prop in src)
    {
        if(src.hasOwnProperty(prop))
        {
            tar[prop]=src[prop];
        }
    }
    return tar;
}

let source = {a:1,b:2,c:3};

let target=clone(source);
console.log(target);