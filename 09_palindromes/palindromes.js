const palindromes = function (phrase) {
    filteredPhrase = phrase.replace(/[^\w ]/g, '').toLowerCase();
    filteredPhrase = filteredPhrase.replace(/\s/g, "");
    let phraseBackwards = "";
    for (let i = filteredPhrase.length - 1; i >= 0; i--) {
        phraseBackwards += filteredPhrase[i];
    }
    console.log(`${phraseBackwards}\n${filteredPhrase}`);
    return phraseBackwards === filteredPhrase ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
