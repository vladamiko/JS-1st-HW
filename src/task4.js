'use strict'

function task4 (value) {
    try {
        if (!value) {
            throw 'please, enter the argument';
        }

        if (typeof value !== 'number') {
            throw 'incorrect type of the value (must be number)';
        }

        findPalindrome(value);
    }

    catch (err) {
        console.log({status: 'failed', reason: err});
    }
    
};

function findPalindrome (value) {
    let result = 0,
        palindromesList = [],
        parsedString = String(value);

    for (let i = 0; i < parsedString.length - 1; i++) {
        let evenPalindrome = extendPalindrome(i, i + 1, parsedString),
            oddPalindrome = extendPalindrome(i, i, parsedString);

        if (oddPalindrome.length > 1) {
            palindromesList.push(oddPalindrome);
        }
        
        if (evenPalindrome.length > 1) {
            palindromesList.push(evenPalindrome);
        }
    }

    if (palindromesList.length > 0) {
        result = palindromesList.reduce(function(a, b) {
            return Math.max(a, b);
        });
    }

    console.log(result);
    return result;
}

function extendPalindrome (left, right, string) {
    while (left >= 0 && right < string.length && string[left] === string[right]) {
        left--;
        right++;
    }
    return string.slice(left + 1, right);
};