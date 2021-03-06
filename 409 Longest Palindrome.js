/**
 * 求出字符串可排列出的最大回文数的长度
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  var temp = s.split('').reduce(function (memo, curr, i, arr) {
    if (arr.indexOf(curr, i + 1) === -1) {
      return memo
    } else {
      memo += 2
      arr.splice(arr.indexOf(curr, i + 1), 1)
      return memo
    }
  }, 0)
  return temp === s.length ? temp : temp + 1
};