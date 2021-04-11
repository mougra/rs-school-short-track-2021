/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = 0;
  const numDigits = [];
  const arr = n.toString().split('');
  for (let i = arr.length - 1; i >= 0; i--) {
    numDigits.push(parseInt(arr[i], 10));
  }
  for (let index = 0; index < numDigits.length; index++) {
    let num = 0;
    for (let i = numDigits.length - 1; i >= 0; i--) {
      if (i !== index) {
        num = num * 10 + numDigits[i];
      }
    }
    result = Math.max(num, result);
  }
  return result;
}

module.exports = deleteDigit;
