// var twoSum = function (nums, target) {};

// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));

const binarySearch = (array, value) => {
  var guess,
    min = 0,
    max = array.length - 1;

  while (min <= max) {
    guess = Math.floor((min + max) / 2);
    if (array[guess] === value) return guess;
    else if (array[guess] < value) min = guess + 1;
    else max = guess - 1;
  }

  return -1;
};

var twoSum = function (nums, target) {
  let result = [];
  nums.sort();

  for (let i = 0; i < nums.length; i++) {
    let siblingIndex = binarySearch(nums, target - number[i]);
    console.log(siblingIndex);
    if (siblingIndex >= 0) {
      if (
        siblingIndex != i ||
        (i > 0 && nums[i - 1] == nums[i]) ||
        (i < nums.length - 1 && nums[i + 1] == nums[i])
      ) {
        return true;
      }
    }
  }
  return false;
};
console.log(binarySearch([2, 7, 11, 15], 11));
