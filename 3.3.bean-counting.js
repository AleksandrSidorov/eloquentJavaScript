/*
Write a function countBs that takes a string as its only argument and returns
a number that indicates how many uppercase “B” characters are in the string.

Next, write a function called countChar that behaves like countBs, except it
takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters). Rewrite countBs to make
use of this new function.
*/

function countBs(str) {
  var bs = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "B") bs++;
  }
  return bs;
}

function countChar(str, chr) {
  var bs = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === chr) bs++;
  }
  return bs;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
