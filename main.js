'use strict'

/* Task 1 */
console.log('task 1');

task1(6, 7, '*');

/* Task 2 */
console.log('task 2');

let envelope1 = new Envelope(5.95, 3.97, 1),
    envelope2 = new Envelope(5.9, 3.9, 2);

task2(envelope1, envelope2);

/* Task 3 */
console.log('task 3');

let trianglesList = [ 
        { vertices: 'ABC', a: 10, b: 20, c: 22.36 }, //99.9999997112
        { vertices: 'XYZ', a: 252, b: 557, c: 736 }, //56237.97578982995
        { vertices: 'DEF', a: 27, b: 35, c: 42.2 } //470.51272660789954
    ];

task3(trianglesList);

/* Task 4 */
console.log('task 4');

task4(5891221112211985);

/* Task 5 */
console.log('task 5');

let context1 = { min : '010000', max : '020099' };

task5(context1);

/* Task 6 */
console.log('task 6');

task6 (12, 44);

/* Task 7 */
console.log('task 7');

let context2 = { min : 20, max : 3000 };

task7 (context2);