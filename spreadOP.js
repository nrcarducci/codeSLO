function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence= [...sentence, [...fragment]];; // change this line
    return sentence;
  }
  
  // do not change code below this line
  console.log(spreadOut());