const ftoc = function(fahrenheit) {
  conversion = (fahrenheit - 32) * (5/9);
  conversion = Math.round(conversion * 10) / 10;
  return conversion;
};

const ctof = function(celsius) {
  conversion = celsius * (9/5) + 32;
  conversion = Math.round(conversion * 10) / 10;
  return conversion;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
