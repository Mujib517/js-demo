const m1 = {
    width: 5,
    height: 10,
    color: 'black',
    dimensions: {
        xyz:{}
    }
};

const m3 = {};
// reflection
// shallow cloning
// deep cloning, recursion
// 
for (let key in m1) {
    m3[key] = m1[key];
}

console.log(m3.dimensions === m1.dimensions);

// // space RAM
// const m3 = {
//     width: m1.width,
//     height: m1.height,
//     color: m1.color
// };

// console.log(m1 === m2); // reference equality

// console.log(m1 === m3);