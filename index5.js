// loosely typed language
// string, number, boolean, undefined, object
// everything is a value
// two categories of values: truthy, falsy
// state, behavior
// props, methods
// less code 

function getSum(a) {
    return a.reduce((acc, e) => acc + e);
}

function add(a, b) {
    if (typeof a === 'function') a = a();
    if (typeof b === 'function') b = b();

    if (Array.isArray(a)) a = getSum(a);
    if (Array.isArray(b)) b = getSum(b);

    console.log(a + b);
}

add(10, 20);
add("abc", "def");
add([1, 2, 3], [4, 5, 6])
add(true, false);

function f1() {
    return 100;
}
function f2() {
    return 200;
}
add(f1, f2);
add(100, f1);
add(true, f2);
add([1, 2, 3], 100);
// var x = 10;

// const f3 = function () {
//     console.log('f3');
// }

// false, null, undefined, NaN, 0, ""

var age = [];

var x = '100';

var n = +x;
console.log(n, typeof n);