const findTheOldest = function (people) {
    let age = 0;
    let oldest = 0;
    let oldestPerson = [];
    people.forEach(calcAge);
    return oldestPerson;

    function calcAge(person) {
        if (!("yearOfDeath" in person)) {
            yearTo = new Date().getFullYear()
        }
        else {
            yearTo = person.yearOfDeath;
        }

        age = yearTo - person.yearOfBirth;
        if (oldest < age) {
            oldest = age;
            oldestPerson = person;
        }
    };
};

// Do not edit below this line
module.exports = findTheOldest;
