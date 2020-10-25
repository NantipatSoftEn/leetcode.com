const binarySearch = (array, target, start = 0, end = array.length - 1) => {
  let midPoint = ~~(start + (end - start) / 2);

  switch (true) {
    case array[start] === target:
      return array[start];
    case array[midPoint] === target:
      return array[midPoint];
    case array[end] === target:
      return array[end];
    case end - start === 0:
      return -1;
    case array[midPoint] > target:
      return binarySearch(array, target, start + 1, midPoint - 1);
    case array[midPoint] < target:
      return binarySearch(array, target, midPoint + 1, end - 1);
  }
  return -1;
};

var twoSum = function (nums, target) {
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    let siblingIndex = binarySearch(nums, complement);
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

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
