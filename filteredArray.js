function filteredArray(arr, elem) 
{
    let newArr = [];
    // change code below this line
    for(let i=0; i<arr.length;i++)
        if(arr[i].indexOf(elem)===-1)
            newArr.push(arr[i]);   
    // change code above this line
    return newArr;
  }
  
  // change code here to test different cases:
  console.log(filteredArray([ ["trumpets", 2], ["flutes", 4], ["saxophones", 2] ], 2));

  //filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18) should return [ [10, 8, 3], [14, 6, 23] ]