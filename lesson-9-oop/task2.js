function isPal(str) {
  var string = str;
  if (string.toLowerCase().split(' ').join('').split('').reverse().join('') === string.toLowerCase().split(' ').join('').split('').join('')) {
    return true;
  }
  return false;
}

console.log(isPal('А роза упала на лапу Азора'));
