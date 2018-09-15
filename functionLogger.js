function squareNum(x) {
    return x * x;
  }
  
  let squareOfFour = functionLogger(squareNum, 4);
  
  console.log("Function starting");
  function functionLogger(fnInput,numInput)
  {
      return fnInput(numInput);
  }
  console.log("Function complete");
  
  console.log(squareOfFour)    // 16