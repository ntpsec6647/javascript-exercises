const palindromes = function (str) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const cleanString = str
        .toLowerCase()
        .split('')
        .filter((character) => alpha.includes(character))
        .join('');

    const revStr = cleanString.split('').reverse().join('');

    return revStr === cleanString;
};

// Do not edit below this line
module.exports = palindromes;
