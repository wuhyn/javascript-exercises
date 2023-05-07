const sumAll = function(min, max) {
    let sum = 0;
    let temp = 0;

    //If the min or max is negative
    if(min < 0 || max < 0){
        return "ERROR";
    }

    //If the min or max field is nor a number
    // console.log(typeof(min));
    if(typeof(min) != 'number' || typeof(max) != 'number'){
        return "ERROR";
    }

    //If min is greater than max, the min and max values need to be switched
    //to be compatible with the loop
    if(max < min){
        //Store high value in temp
        temp = min;
        //Store low value in min
        min = max;
        //store high value in max
        max = temp;
    }

    for(let i=min; i<=max; i++){
        sum += i;
    }

    return sum;
};

sumAll(1, 4)

// Do not edit below this line
module.exports = sumAll;
