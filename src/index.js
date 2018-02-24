module.exports = function getZerosCount(number, base) {
  var divider = 2;
  var simpleFactor = [];

  while (base > 1) {
    while (base % divider === 0) {
      simpleFactor.push(divider);
      base = Math.floor(base / divider);
    }
    if (divider === 2) {
      divider++;
    } else {
      divider += 2;
    }
  }

  var countDeleted = 0;
  var pairFactor = [];
  while (simpleFactor.length > 0) {
    countDeleted = 0;
    for (var j = 0; j < simpleFactor.length; j++) {
      if (simpleFactor[0] === simpleFactor[j]) {
        countDeleted++;
      } else {
        break;
      }
    }
    pairFactor.push(new Array(simpleFactor[0], countDeleted));
    simpleFactor.splice(0, countDeleted);
  }

  var countZeros = 0;
  var Zeros = [];
  var temp = number;
  for (var i = 0; i < pairFactor.length; i++) {
    while (number >= pairFactor[i][0]) {
      number = Math.floor(number / pairFactor[i][0]);
      countZeros += number;
    }
    Zeros.push(Math.floor(countZeros / pairFactor[i][1]));
    countZeros = 0;
    number = temp;
  }
  return Math.min.apply(null, Zeros);
};
