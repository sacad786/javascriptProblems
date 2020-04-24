function evaluate(word) {
  let middle = Math.floor(word.length / 2);;
  let middle2;

  if (word.length % 2 == 0) {
    middle2 = Math.floor(word.length / 2);
  } else {
    middle2 = Math.floor(word.length / 2) + 1;
  }

  let leftPartOfString = word.substr(0, middle);
  let rightPartOfString = word.substr(middle2);

  let leftTotal = 0
  let rightTotal = 0

  for (i = 0; i < leftPartOfString.length; i++) {
    leftTotal += getNumberOfCharacter(leftPartOfString[i]);
  }

  for (i = 0; i < rightPartOfString.length; i++) {
    rightTotal += getNumberOfCharacter(rightPartOfString[i]);
  }

  return leftTotal === rightTotal
}


function balanced(word) {
  return (word.length < 1) ? "word should be more than 1 characters" : evaluate(word)
}


function getNumberOfCharacter(character) {
  let aa = {
    a: 1, b: 2, c: 3, d: 4, e: 5,
    f: 6, g: 7, h: 8, i: 9, j: 10,
    k: 11,l:12, m: 13,n: 14,o: 15,
    p: 16,q: 17,r: 18,s: 19,t: 20,
    u: 21,v: 22,w: 23,x: 24,y: 25,
    z: 26,
  }
  return aa[character]
}


console.log(balanced("brake"));
console.log(balanced("zips"));
console.log(balanced("aztaz"));

