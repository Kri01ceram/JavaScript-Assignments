/*
  Write a function `reve` which takes a string as input and returns the reversed version of the string.

  What is reversing a string?
  - Reversing a string means rearranging its characters in the opposite order.

  Example:
  - Input: "Sumana"
  - Output: "anamuS"

  - Input: "hello"
  - Output: "olleh"

  - Input: ""
  - Output: ""

  Once you've implemented the logic, test your code by running
  - `npm run test-reverseString`
*/

function reverseString(str) {
  str = str.split('').reverse().join('');
  return str;
}

module.exports = reverseString;
//string doesnt have a revrse iun  it but revers edoes so cant uyse it directly on it .split() chnages it toi array to performthe operation.
