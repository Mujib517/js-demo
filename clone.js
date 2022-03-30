const m1 = {
    widht: 5,
    height: 10,
    color: "Black",
    arr: [1, 2, 3, 4],
    info: {
        brand: 'Apple',
        model: 'IPhone 12',
        moreInfo: {
            country: "US",
            zip: "4056868"
        }
    }
};

function clone(obj) {
    const result = {};

    // reflection
    for (let key in m1) {
        if (typeof obj[key] === 'object') result[key] = clone(obj[key]);
        else result[key] = m1[key];
    }

    return result;
}

const res = clone(m1);
console.log(res, res.info.arr === m1.info.arr);