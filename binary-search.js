const assert = require('node:assert/strict');

const sortedArray = [0, 1, 2, 3, 5, 8, 13, 21, 34];

function findIndex(sortedArray, number) {
    for (let i = 0; i < sortedArray.length; ++i) {
        if (sortedArray[i] === number) {
            return i;
        } else if (sortedArray[i] > number) {
            return findIndex(sortedArray.slice(0, i), number);
        }
    }
}

assert.equal(findIndex(sortedArray, 0), 0);
assert.equal(findIndex(sortedArray, 1), 1);
assert.equal(findIndex(sortedArray, 8), 5);
assert.equal(findIndex(sortedArray, 34), sortedArray.length - 1);

console.log("Tests passed.");