function inBox(box) {
  let regex = /^#.*#$/;
  let regexStartEnd = /[*]/;
  let regexSymbol = /\*/;
  let response = [];
  for (let i = 0; i < box.length; i++) {
    const item = box[i];
    const validate = regex.test(item);
    if (i === 0 || i === box.length - 1 || !validate) {
      const validateStartEnd = regexStartEnd.test(item);
      if (validateStartEnd) return false;
    }else{
      const validateMedium = regexSymbol.test(item);
      response.push(validateMedium);
    }
  }
  return response.some((item)=>item);

}

const response = inBox([
    "#####",
    "#   #",
    "#   #",
    "#   #*",
    "#####"
  ]); // ➞ false
console.log(response);
/*
  inBox([
    "###",
    "#* #",
    "#  #",
    "###"
  ]) // ➞ true
  
  inBox([
    "#####",
    "#   #",
    "#  #*",
    "#####"
  ]) // ➞ false
  
  inBox([
    "#####",
    "#   #",
    "#   #",
    "#   #",
    "#####"
  ]) // ➞ false
  // 
  */
