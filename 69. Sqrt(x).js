/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x == 0 || x == 1) return x;
    // using binary search
    let left = 1;
    let right = x;
    let result = 0;
    while (left <= right){
        let mid = parseInt((left + right) / 2);
        let midSquared = mid * mid;
        if (midSquared == x){
            return mid;
        }else if (midSquared < x){
            left = mid + 1;
            result = mid;
        }else {
            right = mid - 1;
        }
    } 
    return result;
};