var twoSum = function (nums, target) {
//   nums.sort();
  let lhs = 0,
    rhs = nums.length - 1;
  while (lhs < rhs) {
    let sum = nums[lhs] + nums[rhs];
    if (sum == target) return true;
    else if (sum < target) lhs++;
    else rhs--;
  }
  return false;
};
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
