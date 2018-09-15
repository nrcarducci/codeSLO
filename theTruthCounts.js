function theTruthCounts(arr,count = [])
{
    arr.forEach(element => {
        if(Array.isArray(element))
            theTruthCounts(element,count);
        
        else
        {
            if(element)
                count.push(element);
        }
        
    });
    return count.length;
}

console.log(theTruthCounts([0, [true, ['yes']]])); // => 2