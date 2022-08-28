const repeatString = function(str, num) {
    let newString = '';

    if (num < 0 || isNaN(num)) {
        return "ERROR";
    }

    for (let i = 0; i < num; i++) {
        newString += str;
    }
    return newString;
}

// Do not edit below this line
module.exports = repeatString;
