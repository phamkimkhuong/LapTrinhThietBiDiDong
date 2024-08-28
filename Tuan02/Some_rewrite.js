var a = [5, 3, 2];

// Hàm some lặp qua từng phần tử mảng và truyền vào hàm callbackfn
// Nếu có ít nhất một phần tử thỏa mã, hàm trả về true, ngược lại trả về false

Array.prototype.some = function(callbackfn) {
    length = this.length;
    for (var i = 0; i < length; i++) {
        value = callbackfn(this[i]);
        if (value == true) {
            return value;
        }
    }
    return false;
}
var value = a.some((a) => {
    return a % 2 == 0;
})
console.log(value); // true