'use strict'

function task5 (context) {
    try {
        if (!context) {
            throw 'please, enter the argument';
        }

        if (!context.min || !context.max) {
            throw 'please, enter all the properties of the context';
        }

        if (typeof context.min !== 'string' || typeof context.max !== 'string') {
            throw 'context.min and/or context.max contain not a string value';
        }

        if (context.min.length !== 6 || context.max.length !== 6) {
            throw 'context.min and/or context.max contains not a 6 symbols';
        }

        if (context.min >= context.max) {
            throw 'context.min must be less than context.max';
        }

        findHappyTicket(context);
    }

    catch (err) {
        console.log({status: 'failed', reason: err});
    }
}

function findHappyTicket (context) {
    let happyTicket1 = 0,
        happyTicket2 = 0,
        winnerInfo,
        winner;

    while (Number(context.min) <= Number(context.max)) {
        let ticketDigits = String(context.min).split('');
            
        happyTicket1 += methodStandart(ticketDigits);
        happyTicket2 += methodEvenOdd(ticketDigits);
        context.min++;
    }

    if (happyTicket1 > happyTicket2) {
        winner = 'methodStandart';
    } else if (happyTicket1 === 0 && happyTicket2 === 0) {
        winner = 'I am a looser :(';
    } else if (happyTicket1 === happyTicket2) {
        winner = 'I am a winner!';
    } else {
        winner = 'methodEvenOdd';
    }

    winnerInfo = { methodStandart : happyTicket1, methodEvenOdd : happyTicket2, winner : winner };

    console.log(winnerInfo);
    return winnerInfo;
}

function methodStandart (ticketDigits) {
    let sum1 = 0, sum2 = 0, result = 0;

    for (let i = 0; i < 3; i++) {
        sum1 += Number(ticketDigits[i]);
    }

    for (let i = 3; i < ticketDigits.length; i++) {
        sum2 += Number(ticketDigits[i]);
    }

    if (sum1 === sum2) {
        result = 1;
    }

    return result;
}

function methodEvenOdd (ticketDigits) {
    let even = 0, odd = 0, result = 0;
    
    for (let i = 0; i < ticketDigits.length; i++) {
        if (ticketDigits[i] % 2 === 0) {
            even += Number(ticketDigits[i]);
        } else {
            odd += Number(ticketDigits[i]);
        }
    }

    if (even === odd) {
        result = 1;
    }

    return result;
}