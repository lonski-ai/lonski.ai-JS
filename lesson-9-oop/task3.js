function anClean(array) {
  var obj = {};

  for (var i = 0; i < array.length; i++) {
    var nameKey = array[i].toLowerCase().split('').sort().join('');
    obj[nameKey] = array[i];
  }
  var result = [];
  for (var key in obj) {
    result.push(obj[key]);
  }
  return result;
}

var array = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

console.log(anClean(array));
