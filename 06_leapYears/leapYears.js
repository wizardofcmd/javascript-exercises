const leapYears = function(year) {
    centuryYear = ((year % 100) == 0) && ((year % 400) == 0);
    notCenturyYear = ((year % 100) == 0) && ((year % 400) != 0)

    if (centuryYear && (year % 4) == 0) {
        return true;
    }
    else if (notCenturyYear) {
        return false;
    }
    else if ((year % 4) == 0) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
