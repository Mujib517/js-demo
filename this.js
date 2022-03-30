'use strict';

/*
    1. object.method this refers to object in sloppy mode
    2. object.method this refers to object in strict mode
    3. extracted function of this refers to global object sloppy mode
    4. extracted function of this refers to undefined object strict mode
    5. inner function this refers to global object in sloppy mode
    6. inner functions this refers to undefined in strict mode
    7. inner arrow function this refers to object itself
    8.  inner arrow function this refers to object itself in strict mode
*/
// const m1 = {
//     width: 5,
//     height: 10,
//     name: 'Mobile',
//     call: function () {
//         const inner = () => {
//             console.log(this);
//         }
//         inner();
//     }
// };

// m1.call();


const m1 = {
    width: 5,
    height: 10,
    name: 'Mobile',
    method: function (a, b) {
        console.log('calling....', a, b);
        console.log(this.name);
    }
};

const c1 = {
    name: 'Car',
};

const a1 = {
    name: 'Animal',
};


var args = [10, 20, 30];

// m1.method.call(c1, 10, 20); // invoke
// m1.method.apply(c1, [10, 20]); // invoke

const f = m1.method.bind(c1); // context Car, fixed context
const f2 = m1.mmethod.bind(a1); 
 
f.call(a1, 10, 20); // context Mobile
