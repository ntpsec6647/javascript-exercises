const add = function(x, y) {
	return x+y
};

const subtract = function(x,y) {
	return x-y
};

const sum = function(array) {
  if(array.length === 0){
    return 0
  } else {
	  return array.reduce((acc, curr) => acc + curr)
  }
};

const multiply = function(array) {
  return array.reduce((acc, curr) => acc * curr)
};

const power = function(x, y) {
	return x ** y
};

const factorial = function(x) {
  let pro = 1;
  for(let i =x;i>0;i--) {
    pro *= i;
  }
  return pro;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
