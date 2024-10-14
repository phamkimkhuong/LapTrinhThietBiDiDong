var a = [10, 3, 2, 6, 7];

// n = a.filter((a) => { return a % 2 == 0 });

// console.log(n); // [10, 2]

// Array.prototype.mymap = function(callbackfn) {
//     return callbackfn(this);
// }

// var value = a.mymap((a) => {
//     return a;
// })
// console.log(value); // 10

Array.prototype.myfilter = function(callbackfn) {
    length = this.length;
    arr = [];
    for (var i = 0; i < length; i++) {
        value = callbackfn(this[i]);
        if (value != null) {
            arr.push(value);
        }
    }
    return arr;
}

var filter = a.myfilter((n) => {
    return n % 2 == 0 ? n : null;
})
console.log(filter); // [10, 2]