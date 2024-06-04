const repeatString = function (string, num) {
    if (num < 0) return "ERROR";
    else {
        let stringRepeat = "";
        for (let i = 0; i < num; i++) {
            stringRepeat = stringRepeat + string;
        }
        return stringRepeat;
    }
};

// Do not edit below this line
module.exports = repeatString;
