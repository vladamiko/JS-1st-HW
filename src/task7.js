'use strict'

function task7 (context) {
    try {
        if (!context) {
            throw 'please, enter the argument';
        }

        if (!context.min || !context.max) {
            throw 'context doesn\'t contain min and/or max';
        }

        if (typeof context.min !== 'number' || typeof context.max !== 'number') {
            throw 'context.min and/or context.max are not a number';
        }

        if (context.min >= context.max) {
            throw 'context.min must be less than the context.max';
        }

        findFibonacci(context);
    }

    catch (err) {
        console.log({status: 'failed', reason: err});
    }
}

function findFibonacci (context) {
    let fibList = [],
        a = 1,
        b = 1,
        c;

    while (b < context.max ) {
        if (b > context.min) {
            fibList.push(b);
        }
        c = a + b;
        a = b;
        b = c;
    }

    console.log(fibList);
    return fibList;
}