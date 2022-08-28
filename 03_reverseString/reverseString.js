const reverseString = function(str) {
    let reversedStr = '';

    for (let i = 1; i < str.length + 1; i++){
        reversedStr += str[str.length - i];
    }
    return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
