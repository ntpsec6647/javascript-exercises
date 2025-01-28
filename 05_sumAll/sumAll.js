const sumAll = function(start, end) {
    let final = 0;
    if(!Number.isInteger(start)||!Number.isInteger(end)){
        return "ERROR"
    }
    if (start < 0 || end < 0){
        return "ERROR"
    }
    if (start > end) {
        const min = end;
        end = start;
        start = min;
    }
    for (let i = start; i <= end; i++) {
        final = final + i;
    } 
    return final;

};

// Do not edit below this line
module.exports = sumAll;
