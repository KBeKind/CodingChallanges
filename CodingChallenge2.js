function FirstReverse(str) {
  // code goes here

  newStr = str.split("").reverse().join("");

  return newStr;
}

// keep this function call here
console.log(FirstReverse(readline()));
