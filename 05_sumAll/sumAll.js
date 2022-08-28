const sumAll = function(numOne, numTwo) {
    let start = 0;
    let end = 0;
    let sum = 0;

    if ((numOne < 0 || numTwo < 0) || ((isNaN(numOne) || isNaN(numTwo)) )
    || (typeof(numOne) != "number") || typeof(numTwo) != "number"){
        return "ERROR";
    }
    else {
        if (numTwo > numOne) {
            start = numOne;
            end = numTwo;
        }
        else {
            start = numTwo;
            end = numOne;
        }
        
        for (let i = start; i <= end; i++) {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
