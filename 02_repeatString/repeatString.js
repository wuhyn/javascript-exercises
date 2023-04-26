const repeatString = function(stringToRepeat, numOfRepeats) {
    let result = "";

    if(numOfRepeats > 0){
        for(let i=0; i<numOfRepeats; i++){
            result += stringToRepeat;
        }

        return result;
    }

    else if(numOfRepeats == 0){
        return "";
    }

    else{
        return "ERROR";
    }
};

// console.log(repeatString("you", 10));

// Do not edit below this line
module.exports = repeatString;
