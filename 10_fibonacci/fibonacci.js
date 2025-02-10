const fibonacci = function(x) {
let arr = [1,1];
const y = Number(x)
if (y===0){
    return 0;
} else if (y < 0){
    return "OOPS"
} else {
    for(let i=1; i<=y-2;i++){
        arr.push(arr[i]+arr[i-1])
    }
    return arr[y-1];
}
};

// Do not edit below this line
module.exports = fibonacci;
