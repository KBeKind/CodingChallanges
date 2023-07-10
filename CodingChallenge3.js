function LongestWord(sen) {
  // code goes here
  let senArray = sen.split(" ");
  let checkWordArray = [];

  for (let i = 0; i < senArray.length; i++) {
    let splitWord = senArray[i].split("");
    let checkedWord = [];
    for (let character of splitWord) {
      if (/[a-zA-Z]/.test(character)) {
        checkedWord.push(character);
      }
    }
    checkWordArray.push(checkedWord);
  }

  let currentLongestWord = "";
  for (let wordArray of checkWordArray) {
    if (wordArray.length > currentLongestWord.length) {
      currentLongestWord = wordArray.join("");
    }
  }
  return currentLongestWord;
}

// keep this function call here
console.log(LongestWord(readline()));
