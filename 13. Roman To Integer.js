/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum = 0;
    const charMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    const chars = Array.from(s);
    for (let i = chars.length - 1; i >=0; i--){
        if (charMap[chars[i + 1]] == undefined){
            sum += charMap[chars[i]];
            continue;
        }
        if (charMap[chars[i]] >= charMap[chars[i + 1]]){
            sum += charMap[chars[i]];
        }else {
            sum -= charMap[chars[i]];
        }
    }
    return sum;
};