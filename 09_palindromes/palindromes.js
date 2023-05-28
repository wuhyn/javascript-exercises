const palindromes = function (inputString) {
    let strLength = inputString.length - 1;
    // let newString = inputString.replace(" ", "");
    let reverseString = "";
    let newString = ""
    
    for(let i=strLength; i>=0; i--){
        if(inputString.charAt(i) !== " ")
            reverseString += inputString[i];
    }

    for (let i=0; i<= strLength; i++){
        if(inputString.charAt(i) !== " ")
            newString += inputString[i];
    }

    //Strip special characters and ensure string is in lower case
    newString = newString.replace(/[^\w ]/g, '').toLowerCase();
    reverseString = reverseString.replace(/[^\w ]/g, '').toLowerCase();

    // Perform palindrome check
    if(newString === reverseString)
        return true;
    else
        return false;

};

// Do not edit below this line
module.exports = palindromes;