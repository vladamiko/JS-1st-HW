'use strict'

function task4 (value) {
    let errorMessage = preValidateTask4(value),
        result;

    if (errorMessage === '') {
        result = findPalindrome(value);
    } else {
        result = {status: 'failed', reason: errorMessage};
    }
    
    return result;
};

function preValidateTask4 (value) {
    let errorMessage = '';

    if (!value) {
        errorMessage = 'please, enter the argument';
    } else if (typeof value !== 'number') {
        errorMessage = 'incorrect type of the value (must be number)';
    }

    return errorMessage;
}

function findPalindrome (value) {
    let result = 0,
        palindromesList = [],
        parsedString = String(value);

    for (let i = 0; i < parsedString.length - 1; i++) {
        let evenPalindrome = extendPalindrome(i, i + 1, parsedString),
            oddPalindrome = extendPalindrome(i, i, parsedString);

        if (oddPalindrome.length > 1) {
            palindromesList.push(Number(oddPalindrome));
        }
        
        if (evenPalindrome.length > 1) {
            palindromesList.push(Number(evenPalindrome));
        }
    }

    if (palindromesList.length > 0) {
        result = Math.max(...palindromesList);
    }

    return result;
}

function extendPalindrome (left, right, string) {
    while (left >= 0 && right < string.length && string[left] === string[right]) {
        left--;
        right++;
    }

    return string.slice(left + 1, right);
};