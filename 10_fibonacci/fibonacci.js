const fibonacci = function(num) {
    let fibNum = parseInt(num);
    let n1 = 1;
    let n2 = 1;
    let next = 0;
    let result;
    
    if(fibNum < 0){
        console.log("oops.");
        return "OOPS";
    }

    for(let i=0; i<=fibNum; i++){
        if(i == 0){
            result = 0;
        }

        else if(i == 1 || i == 2){
            result = 1;
        }

        else{
            next = n1 + n2;
            result = next;

            //Move to next sequence
            n1 = n2; // 1
            n2 = next; // 2
           
        }
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;

fibonacci("1");
