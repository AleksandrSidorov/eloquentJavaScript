/*

Here’s another way to define whether a positive whole number is even or odd:

- Zero is even.
- One is odd.
- For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description.
The function should accept a number parameter and return a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why?
Can you think of a way to fix this?

*/
function isEven (num) {
  if (num < 0) num = -num;
  if (num == 0) return true;
  else if (num == 1) return false;
  else return isEven(num - 2);
}

 console.log(isEven(50));
 console.log(isEven(75));
 console.log(esEevn(-1));
