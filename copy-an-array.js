function copyMachine(arr, num) {
    let newArr = []
    for (let thing of arr) {
      let innerArr = []
      for (let i = 0; i < num; i++) {
        innerArr.push(thing)
      }
      newArr.push(innerArr)
    }
    return newArr;
  }
  
  // change code here to test different cases:
  console.log(copyMachine([true, false, true], 2));