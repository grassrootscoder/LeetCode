/**
 * 求两个数的和，不能用+、-、*、/
 * 异或运算符可以计算二进制无进位加法
 * 再配合&运算符计算每一次二进制进位
 * 此时需要中间变量tmp来存储上一次未进制完全的sum
 */
var getSum = function (a, b) {
  // 位操作符
  var sum = a
  var tmp = b
  for (var i = b; i !== 0; i = (i & tmp) << 1) {
    tmp = sum
    sum = i ^ tmp
  }
  return sum
};