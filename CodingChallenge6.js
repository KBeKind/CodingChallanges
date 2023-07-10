function charCount(character, string) {
  totalCount = 0;
  stringArray = string.split("");

  for (let element of stringArray) {
    if (character === element) {
      totalCount++;
    }
  }

  return totalCount;
}

console.log(charCount("a", "edabit"));

console.log(charCount("c", "Chamber of secrets"));

console.log(charCount("b", "big fat bubble"));
