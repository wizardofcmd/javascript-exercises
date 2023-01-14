const fibonacci = function(numberPos) {
    if (parseInt(numberPos) < 0) {
        console.log(numberPos);
        return "OOPS";
    }
    else if (parseInt(numberPos) === 1) {
        return 1;
    }

    let sum = 0;
    let numOne = 1;
    let numTwo = 1;
    for (let i = 2; i <= parseInt(numberPos); i++) {
        if (numberPos === 1 || parseInt(numberPos) === 2) {
            return 1;
        }
        if (i > 2) {
            sum = numOne + numTwo;
            numOne = numTwo;
            numTwo = sum;
        }
    }
    return sum;
};
// Do not edit below this line
module.exports = fibonacci;
