var twoSum = function (nums, target) {
  let result = [];
  let m = new Map();
  nums.map((n, i) => m.set(n, i));
  //console.log(m);
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    //console.log(m.has(diff),`m.get(${diff})=`, m.get(diff));
    if (m.has(diff) && m.get(diff) != i) {
      result.push(i);
      return [m.get(diff), i];
    }
  }
  m.set(nums[i], i);
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
