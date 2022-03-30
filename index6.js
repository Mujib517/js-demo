'use strict';
// object initializers
// constructor function
// object.create
// class
// const m1 = {
//     width: 5,
//     height: 10,
//     color: "Black",
//     "some-prop": "some value"
// };


function Mobile(color) {
    this.width = 5; // 4 bytes
    this.height = 10; // 4 bytes
    this.color = color; // 4 bytes
}

Mobile.prototype.call = function () {
    console.log("Calling...", this.color);
}

var m2 = new Mobile("Black"); // 12 bytes
var m3 = new Mobile("Red"); // 12 bytes


var abstractMobile = {
    call: function () {
        console.log('calling...');
    }
};

var m4 = Object.create(abstractMobile, {
    width: { value: 4, enumerable: true, writable: false, configurable: true },
    PI: { value: 3.14, enumerable: false, writable: false, configurable: false },
    height: { value: 10, enumerable: true },
    color: { value: 'Black', enumerable: true },
    call: { value: function () { console.log('vid call..'); } }
});

// m4.width = 1000;

console.log(m4);

