const removeFromArray = function(inputArray, ...args){
    const newArray = [];

    //Loop through each element of the array
    inputArray.forEach(element => {
        //Compare the element from the loop against the spread operator array
        let doesElementExist = args.includes(element);

        //Push element not to be removed into the new array
        if(!doesElementExist){
            newArray.push(element);
        }
        // console.log(doesElementExist);  
    });

    return newArray;
};

// Call the function with a test method
removeFromArray([1, 2, 3, 4], 3)

// Do not edit below this line
module.exports = removeFromArray;
