function squareDigits(num) {
    return parseInt(num.toString().split('').map(digit => Math.pow(digit, 2)).join(''));
  }