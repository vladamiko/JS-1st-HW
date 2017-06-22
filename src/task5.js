'use strict'

function task5 (context) {
    let errorMessage = preValidateTask5(context),
        result;

    if (errorMessage === '') {
        result = findHappyTicket(context);
    } else {
        result = {status: 'failed', reason: errorMessage};
    }

    return result;
}

function preValidateTask5 (context) {
    let errorMessage = '';

    if (!context) {
        errorMessage = 'please, enter the argument';
    } else if (!context.min || !context.max) {
        errorMessage = 'please, enter all the properties of the context';
    } else if (typeof context.min !== 'string' || typeof context.max !== 'string') {
        errorMessage = 'context.min and/or context.max contain not a string value';
    } else if (context.min.length !== 6 || context.max.length !== 6) {
        errorMessage = 'context.min and/or context.max contains not a 6 symbols';
    } else if (context.min >= context.max) {
        errorMessage = 'context.min must be less than context.max';
    }

    return errorMessage;
}

function findHappyTicket (context) {
    let happyTickets1 = 0,
        happyTickets2 = 0,
        winnerInfo,
        winner;

    while (Number(context.min) <= Number(context.max)) {
        let ticketDigits = String(context.min).split('');
            
        happyTickets1 += methodStandart(ticketDigits);
        happyTickets2 += methodEvenOdd(ticketDigits);
        context.min++;
    }

    if (happyTickets1 > happyTickets2) {
        winner = 'methodStandart';
    } else if (happyTickets1 === 0 && happyTickets2 === 0) {
        winner = 'I am a looser :(';
    } else if (happyTickets1 === happyTickets2) {
        winner = 'I am a winner!';
    } else {
        winner = 'methodEvenOdd';
    }

    winnerInfo = { 
        methodStandart : happyTickets1, 
        methodEvenOdd : happyTickets2, 
        winner : winner 
    };

    return winnerInfo;
}

function methodStandart (ticketDigits) {
    let sum1 = 0, sum2 = 0;

    for (let i = 0; i < 3; i++) {
        sum1 += Number(ticketDigits[i]);
    }

    for (let i = 3; i < ticketDigits.length; i++) {
        sum2 += Number(ticketDigits[i]);
    }

    return (sum1 === sum2) ? 1 : 0;
}

function methodEvenOdd (ticketDigits) {
    let even = 0, odd = 0;
    
    for (let i = 0; i < ticketDigits.length; i++) {
        if (ticketDigits[i] % 2 === 0) {
            even += Number(ticketDigits[i]);
        } else {
            odd += Number(ticketDigits[i]);
        }
    }

    return (even === odd) ? 1 : 0;
}