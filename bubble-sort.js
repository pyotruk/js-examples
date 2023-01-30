const assert = require('node:assert/strict');

const sortedArray = [0, 1, 2, 3, 5, 8, 13, 21, 34];
const givenArray = [21, 13, 0, 2, 1, 8, 34, 5, 3];

function sort(array) {
    const result = [];
    while (array.length > 0) {
        let min = Infinity;
        let minIdx = -1;
        for (let i = 0; i < array.length; ++i) {
            if (array[i] < min) {
                min = array[i];
                minIdx = i;
            }
        }
        result.push(min);
        array.splice(minIdx, 1);
    }
    return result;
}

assert.deepEqual(sort(givenArray), sortedArray);

console.log("Tests passed.");