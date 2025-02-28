/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const charMap = {
        '(': ')',
        '{': '}',
        '[': ']',
    }
    const chars = Array.from(s);
    let sta = []; // A stack to store the opening parentheses
    for (let i = 0; i < chars.length; i++){
        if (charMap[chars[i]] != null){
            sta.push(chars[i]); //push is opening parenthesis
        }else {
            if (charMap[sta[sta.length - 1]] == chars[i]){
                sta.pop(); // pop if the opening matches the closing parentheses 
            }else{
                return false; // if not return false
            }
        }
    }
    if (sta.length == 0){
        return true; // the stack should be empty 
    }else {
        return false;
    }
};