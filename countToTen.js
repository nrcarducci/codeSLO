function countToTen(val)
{
    console.log(val);
    if(val<10)
        countToTen(val=val+1);
    
}

console.log(countToTen(1));
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

/*
countToTen        
    is a function
    returns undefined
    logs every number between the number passed to it and 10, including 10
*/