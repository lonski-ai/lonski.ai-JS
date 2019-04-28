var space = ' ';
var res = '#';

function chessboard(row, coll) {
  var result = '';

  for (var i = 1; i <= row; i++) {
    for (var j = 1; j <= coll; j++) {
      if (i % 2 != 0 && j % 2 != 0) {
        result += res;
      } else if (i % 2 != 0 && j % 2 == 0) {
        result += space;
      } else if (i % 2 == 0 && j % 2 != 0) {
        result += space;
      } else if (i % 2 == 0 && j % 2 == 0) {
        result += res;
      }
    }
    result += '\n';
  }
  return result;
}

console.log(chessboard(8, 8));
