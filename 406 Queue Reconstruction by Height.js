/**
 * 假设有一队人随机站成一个圈。每个人通过一对整数(h, k)描述，其中h是其身高，k是站在他前面并且身高不低于他的人数。编写算法重构队列。
 * @param {number[][]} people
 * @return {number[][]}
 * reconstructQueue([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]])
 * // -> [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
 */
var reconstructQueue = function (people) {
	debugger
	var tmp = []
	var result = []
	people.sort((function (a, b) {
		return b[0] - a[0];
	}))
	for ()
		return people
	// for(var i=0; i<people.length-1; i++){
	// 	if(people[i][0]<people[i+1][0]){
	// 		tmp = people[i]
	// 		people[i] = people[i+1]
	// 		people[i+1] = tmp
	// 		i=-1
	// 	}
	// }
	for (var i = 0; i < people.length - 1; i++) {
		if (people[i][0] == people[i + 1][0] && people[i][1] > people[i + 1][1]) {
			tmp = people[i]
			people[i] = people[i + 1]
			people[i + 1] = tmp
			i = -1
		}
	}
	for (var i = 0; i < people.length; i++) {
		result.splice(people[i][1], 0, people[i])
	}
	return result
};