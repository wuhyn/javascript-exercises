const reverseString = function(input) {
    const inputString = input;
    let reverse = '';

    for(let i=inputString.length;i>=0;i--){
        reverse += inputString.charAt(i);
    }

    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
