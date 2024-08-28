let firstArr = [2, 3, 5, 8];

Array.prototype.reduce = function(callback, initialValue) {
    var accumulator = initialValue || 0; // 0 is default value
    for (var i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i]);
    }
    return accumulator;
}

var value = firstArr.reduce((a, b) => {
    return a + b;
});

console.log(value); // 240