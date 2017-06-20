'use strict'

/* Task 2 */

function task2 (envelope1, envelope2) {
    try {
        if (!envelope1 || !envelope2) {
            throw 'please, enter all the arguments';
        }

        if ((!envelope1.height || !envelope1.width || !envelope1.number) ||
            (!envelope2.height || !envelope2.width || !envelope2.number)) {
            
            throw 'envelope1 and/or envelope2 doesn\'t contain all the properties';
        }

        if ((typeof envelope1.height !== 'number' || typeof envelope1.width !== 'number') ||
            (typeof envelope2.height !== 'number' || typeof envelope2.width !== 'number') ||
            (typeof envelope1.number !== 'number' || typeof envelope2.number !== 'number')) {
            
            throw 'envelope1 and/or envelope2 contain wrong properties - not a number';
        }

        analyseEnvelops(envelope1, envelope2);
    }

    catch (err) {
        console.log({status: 'failed', reason: err});
    }
}

function analyseEnvelops (envelope1, envelope2) {
    let result = 0;

    if (envelope1.height < envelope2.height && envelope1.width < envelope2.width) {
        result = envelope1.number;
    } else if (envelope1.height > envelope2.height && envelope1.width > envelope2.width) {
        result = envelope2.number;
    }

    console.log(result);
    return result;
}

function Envelope (height, width, number) {
    this.height = height;
    this.width = width;
    this.number = number;
}