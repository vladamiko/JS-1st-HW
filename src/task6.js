'use strict'

function task6 (n, m) {
    try {
        if (!n || !m) {
            throw 'please, enter all the arguments';
        }

        if (typeof n !== 'number' || typeof m !== 'number') {
            throw 'n and/or m are not a numbers';
        }

        findNaturalNumbers(n, m);
    }

    catch (err) {
        console.log({status: 'failed', reason: err});
    }
}

function findNaturalNumbers (n, m) {
    let naturalNumbers = [],
        result;
    for (let i = 1; i <= n; i++) {
        let square = Math.pow(i, 2);
        if (square > m) {
            naturalNumbers.push(i);
        }
    }
    result = naturalNumbers.join(', ');
    console.log(result);
    return result;
}