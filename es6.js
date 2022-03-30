// hoisting

// function fn() {
//     try {
//         var err = "adfkd";
//         //
//         throw new Error('failed');
//     }
//     catch (e) {
//         console.log(err, 'catch block');
//     }
// }


// fn();

// i = 1    wait(100) => execute(100)
// i = 2
//...
// i = 100 wait(100)


// function f1() {
//     for (let i = 1; i < 100; i++) {
//         setTimeout(() => console.log(i), 100);
//     }
// }

// f1();

// let, var, const
// string interpolation
// destructuring objects
// array destructuring

const person = {
    name: "John",
    age: 20,
    info: {
        x: 10
    }
};

// // var output = person.name + " is " + person.age + " years old";
// var output = `${person.name} is ${person.age} years old`;
// console.log(output);


// const x = person.name;
// const age = person.age;
// const { name, info: { x } } = person;

// console.log(x);

// var arr = [1, 2, 3, 4];
// const first = arr[0];
// const second = arr[1];

// const [first, second] = arr;

// console.log(first, second);