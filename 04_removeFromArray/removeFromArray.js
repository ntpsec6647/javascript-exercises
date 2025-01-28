const removeFromArray = function() {
    let t;
    const nArr = arguments[0];
    for (let x=1; x<arguments.length; x++) {
        t = arguments[x];
        for(let i = nArr.length-1; i >=0; i--){
            if(nArr[i] === t) {
                nArr.splice(i, 1)
            }
        }
    }
    return nArr
};

// Do not edit below this line
module.exports = removeFromArray;
