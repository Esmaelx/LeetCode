/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //Using two pointers
    if (nums.length === 0) return 0; // Base case

    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j]; // copys and replace if not duplicated
        }
    }

    return i + 1;
};