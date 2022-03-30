const m1 = {
    width: 5,
    height: 10,
    color: 'black',
    dimension: {}
};

const m2 = { ...m1 };
// parseInt
// '100'

console.log(m2.dimensions === m1.dimensions);