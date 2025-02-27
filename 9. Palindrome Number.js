/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    if (x < 0) {
        return false;
    }

    let original = x;
    let reversed = 0;

    // Reverse the integer
    while (x > 0) {
        reversed = reversed * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    // Compare the original number with the reversed number
    return original === reversed;
};