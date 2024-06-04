const reverseString = function (str) {
    if (str.length < 2) {
        return str;
    }
    else {
        let len = str.length;
        let strReverse = "";
        for (let i = 1; i <= len; i++) {
            let char = str.at(len - i);
            strReverse = strReverse.concat(char); // must assign result of string method to variable
        }
        return strReverse;
    }
};

// NOTES
// sol1: converting between string to array back to string
// string to array: map  
// reverse array: pop off last character and add to array2 until array1 length = 0
// array to string: array2.toString method = str2
// return str2    
// if (str.length < 2) {
//     return str;
// }
// else {
//     let len = str.length;
//     let array = str.split("");
//     let arrayReverse = [];
//     while (array.length) {
//         char = array.pop();
//         arrayReverse.push(char);
//     }
//     let strReverse = arrayReverse.toString(); // at this point the original characters are comma seperated. this is already looking to be NOT a concise solution. Solving with string methods only is superior.  
// }

// Do not edit below this line
module.exports = reverseString;