/**
 * 给出 Excel 表格中的标题，求出列号
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  return s.split('').reduceRight(function (memo, curr, i, arr) {
    curr = table(curr)
    return memo += curr * Math.pow(26, (arr.length - 1) - i)
  }, 0)

  function table(str) {
    switch (str) {
      case 'A':
        return 01
      case 'B':
        return 02
      case 'C':
        return 03
      case 'D':
        return 04
      case 'E':
        return 05
      case 'F':
        return 06
      case 'G':
        return 07
      case 'H':
        return 08
      case 'I':
        return 09
      case 'J':
        return 10
      case 'K':
        return 11
      case 'L':
        return 12
      case 'M':
        return 13
      case 'N':
        return 14
      case 'O':
        return 15
      case 'P':
        return 16
      case 'Q':
        return 17
      case 'R':
        return 18
      case 'S':
        return 19
      case 'T':
        return 20
      case 'U':
        return 21
      case 'V':
        return 22
      case 'W':
        return 23
      case 'X':
        return 24
      case 'Y':
        return 25
      case 'Z':
        return 26
    }
  }
};