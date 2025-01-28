const convertToCelsius = function(temp) {
  let conversion;
  conversion = ((temp - 32)*(5/9));
  if (conversion !== 0){
    conversion = Number(conversion.toFixed(1));
  }
  return conversion;
};

const convertToFahrenheit = function(temp) {
  let conversion;
  conversion = (temp*(9/5) + 32);
  if(conversion !== 0){
    conversion = Number(conversion.toFixed(1));
  }
  return conversion;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
