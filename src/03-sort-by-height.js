/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // const without = -1;
  // const sort = arr.sort();
  function sortNumbers(a, b) {
    if (a > b) {
      return 1;
    }
    if (b > a) {
      return -1;
    }
    return 0;
  }
  const possition = [];
  let possitionHelper = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(-1) === -1) break;
    possition.push(arr.indexOf(-1) + possitionHelper);
    arr.splice(arr.indexOf(-1), 1);
    possitionHelper++;
    i--;
  }
  arr.sort(sortNumbers);
  for (let i = 0; i < possition.length; i++) {
    arr.splice(possition[i], 0, -1);
  }
  return arr;
}

module.exports = sortByHeight;
