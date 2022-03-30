// function fn() {
//     // arr.slice(0,2)
//     console.log(arguments);

//     const result = [].slice.call(arguments, 0, 2);
//     console.log(result);
// }


// fn(10, 20, 30, 40);

// create your own slice function
const obj = {
    '0': 10,
    '1': 20,
    '2': 30,
    '3': 40,
    length: 4
};

const res = [].slice.apply(obj, [0, obj.length]);
console.log(res);


class Mobile {

    constructor() {
        // this.method = this.method.bind(this);
    }

    method = () => {
        console.log(this);
    }
}


var m1 = new Mobile();
const f = m1.method;

f();

<button onClick={this.method} />


// functions