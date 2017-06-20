'use strict'

function task3 (trianglesList) {
    try {
        if (!trianglesList) {
            throw 'please, enter the argument';
        }

        if (!Array.isArray(trianglesList)) {
            throw 'argument is not an array';
        }

        for (let i = 0; i < trianglesList.length; i++) {
            if (!trianglesList[i].vertices) {
                throw 'please, enter all the vertices of all the triangles';
            }

            if (!trianglesList[i].a || !trianglesList[i].b || !trianglesList[i].c) {
                throw 'please, enter all the sides of all the triangles';
            }

            if (typeof trianglesList[i].a !== 'number' || typeof trianglesList[i].b !== 'number' || typeof trianglesList[i].c !== 'number') {
                throw 'one or more of the sides contain not a number value';
            }
        }
        
        sortTriangles(trianglesList);
    }

    catch (err) {
        console.log({status: 'failed', reason: err});
    }
}

function sortTriangles (trianglesList) {
    let namesList = [];

    for (let i = 0; i < trianglesList.length; i++) {
        findSquareTriangle(trianglesList[i]);
    }

    trianglesList.sort(function(a, b) {
        return b.square - a.square;
    });

    trianglesList.forEach(function(triangle) {
        namesList.push(triangle.vertices);
    });

    console.log(namesList);
    return namesList;
}

function findSquareTriangle (triangle) {
    let p, s;
    p = (triangle.a + triangle.b + triangle.c) / 2;
    s = Math.sqrt(p * (p - triangle.a) * (p - triangle.b) * (p - triangle.c));
    triangle.square = s;
    return s;
}