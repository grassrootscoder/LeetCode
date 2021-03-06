/**
 * 给定一个非负整数num。 对于范围0≤i≤num中的每个数字i，计算它们的二进制表示中的1的数目，并将它们作为数组返回。
 * @param {number} num
 * @return {number[]}
 * example
 * countBits(2)
 * // -> [0,1,1]
 */
/**
	  * var countBits = function(num) {
		    var tmp = 0
		 	var count = 0
		 	var result = []
			for(var i=0; i<=num; i++){
				count = 0
				tmp = Number(i.toString(2))
				for(; tmp>0; tmp = parseInt(tmp/10)){
					if(tmp%10 == 1){
						count++
					}
				}
				result.push(count)
			}
			return result
		};
	  */
/**
 * 原本以为 TLE
 * Wrong Answer:压力测试 65536 时候开始出错。原因不明。。
 */
/**
 * 2^n ~ 2^n+1 中 1 的个数是 0 ~ 2^n-1 的个数 + 1
 */
var countBits = function (num) {
	var result = [0]
	var flagStart = 1,
		flagEnd = 2
	for (var i = 1; i <= num; i++) {
		if (i == flagEnd) {
			flagStart *= 2
			flagEnd *= 2
		}
		result[i] = result[i - flagStart] + 1
	}
	return result
};