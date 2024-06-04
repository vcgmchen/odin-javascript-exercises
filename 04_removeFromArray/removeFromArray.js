// For 1 parameter after array:
// const removeFromArray = function(array, item) {
//     function isItem(value) {
//         return value != item;
//     }
//     let newArray = array.filter(isItem);
//     return newArray;
// };

// Succint:
// const removeFromArray = function(array, item) {
//     return array.filter((value) => value != item);
// };

// For arbitrary number of parameters after array:
// const removeFromArray = function(array, ...items) {
//     let newArray = array;
//     for (let item of items) {
//         function isItem(value) {
//             return value != item;
//         }
//         newArray = newArray.filter(isItem);
//     }
//     return array;
// };

const removeFromArray = function (array, ...items) {
    for (let item of items) {
        array = array.filter((element) => element !== item);
    }
    return array;
}

// console.log(removeFromArray([1,2,3], 2));
// console.log(removeFromArray([1,2,2,2,2,2,2,3], 2));
// console.log(removeFromArray([1,2,3], 4));
// console.log(removeFromArray([1,2,3], 2,3));

// const my_array = [1,2,3,4];
// x = my_array.indexOf(5);
// console.log(x);

// y = Boolean(x);
// console.log(y);

// Methods: 
// array.findIndex(function) => returns index of element that satisfies testing function 
// * array.indexOf() => like above, but instead of using function, checks each element for equality . otherwise returns -1.
// array.lastIndexOf('element') 
// array.includes()

// Do not edit below this line
module.exports = removeFromArray;
