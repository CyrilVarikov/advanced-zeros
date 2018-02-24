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

  var i = 0;
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

  var min = 0;
  var div = 0;
  // console.log(pairFactor.length);

  if (pairFactor.length === 1) {
    min = pairFactor[0][0];
    div = pairFactor[0][1];
  } else {
    for (var i = 0; i < pairFactor.length - 1; i++) {
      if ((pairFactor[0][1] >= 5) && (pairFactor[i + 1][0] - pairFactor[i][0] < 4)) {
        min = pairFactor[0][0];
        div = pairFactor[0][1];
      } else {
          if (pairFactor[i][0] < pairFactor[i + 1][0] ) {
            min = pairFactor[i + 1][0];
            div = pairFactor[i + 1][1];
          } else {
            min = pairFactor[i][0];
            div = pairFactor[i][1];
          }
        }
    }
  }


  var countZeros = 0;
  while (number >= min) {
    number = Math.floor(number / min);
    countZeros += number;
  }
  return Math.floor(countZeros / div);
};
