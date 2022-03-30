const array = [1, 2, 3, 4];

function double(i) {
    return i * 2;
}

Array.prototype.mymap = function (doublefn) {
    const mapArray = [];
    for (let i = 0; i < array.length; i++) {
        const result = doublefn(array[i]);
        mapArray.push(result);
    }
    return mapArray;
};

const doubleArray = array.map(double);
const doubleArrayMymap = array.mymap(double);

console.log(doubleArray);
console.log(doubleArrayMymap);
