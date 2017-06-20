'use strict'

function task1 (height, width, symbol) {
    try { 
        if (!height || !width || !symbol) {
            throw "please, enter all the arguments";
        }            

        if (typeof height !== 'number' || typeof width !== 'number') {
            throw "height and/or width are not a number";
        }

        if (typeof symbol !== 'string') {
            throw "symbol is not a string";
        }

        drawChessBoard(height, width, symbol);
    }

    catch(err) {
        console.log({status: 'failed', reason: err});
    }    
}

function drawChessBoard (height, width, symbol) {
    let result = '';

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width * 2 - 1; j++) {
            if (i % 2 === j % 2) {
                result += symbol;
            } else {
                result += ' ';
            }
        }
        result += '\n';
    }

    console.log(result);
    return result;
}