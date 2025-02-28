/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // nums.sort();
    // for (let i = 0; i < nums.length; i += 2){
    //     if (nums[i] == nums[i + 1]){
    //         continue;
    //     }else {
    //         return nums[i];
    //     }
    // }
    // Reducing the time complexity to O(n) and space complexity to O(1)
    let result = 0;
    for (let i = 0; i < nums.length; i++){
        result ^= nums[i]; // XORing the elements in the array
    }
    return result;
};