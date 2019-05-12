var arrTipJohn = [];
var JohnTipAndBill = [];
var arrTipMark = [];
var MarkTipAndBill = [];

var familyJohn = {
  bill: [124, 48, 268, 180, 42],
  calcTip: function () {
    for (var i = 0; i < familyJohn.bill.length; i++) {
      if (familyJohn.bill[i] < 50) {
        arrTipJohn[i] = familyJohn.bill[i] * 0.2;
        JohnTipAndBill[i] = familyJohn.bill[i] + arrTipJohn[i];
      } else if (familyJohn.bill[i] >= 50 && familyJohn.bill[i] <= 200) {
        arrTipJohn[i] = familyJohn.bill[i] * 0.15;
        JohnTipAndBill[i] = familyJohn.bill[i] + arrTipJohn[i];
      } else if (familyJohn.bill[i] > 200) {
        arrTipJohn[i] = familyJohn.bill[i] * 0.1;
        JohnTipAndBill[i] = familyJohn.bill[i] + arrTipJohn[i];
      }
    }
    return arrTipJohn;
  }
};

var familyMark = {
  bill: [77, 375, 110, 45],
  calcTip: function () {
    for (var i = 0; i < familyMark.bill.length; i++) {
      if (familyMark.bill[i] < 100) {
        arrTipMark[i] = familyMark.bill[i] * 0.2;
        MarkTipAndBill[i] = familyMark.bill[i] + arrTipMark[i];
      } else if (familyMark.bill[i] >= 100 && familyMark.bill[i] <= 300) {
        arrTipMark[i] = familyMark.bill[i] * 0.1;
        MarkTipAndBill[i] = familyMark.bill[i] + arrTipMark[i];
      } else if (familyMark.bill[i] > 300) {
        arrTipMark[i] = familyMark.bill[i] * 0.25;
        MarkTipAndBill[i] = familyMark.bill[i] + arrTipMark[i];
      }
    }
    return arrTipMark;
  }
};

function averageTip(arrTip) {
  var result = 0;
  for (var i = 0; i < arrTip.length; i++) {
    result = result + arrTip[i];
  }
  return result / arrTip.length;
}

familyJohn.calcTip();
console.log('Массив чаевых Джона:' + '\n' + arrTipJohn);
// console.log(arrTipJohn);
console.log('Массив суммы счета и чаевых Джона:');
console.log(JohnTipAndBill);

console.log('----------------------------------------------------------' + '\n');

familyMark.calcTip();
console.log('Массив чаевых Марка:');
console.log(arrTipMark);
console.log('Массив суммы счета и чаевых Марка:');
console.log(MarkTipAndBill);

console.log('----------------------------------------------------------' + '\n');

console.log('Среднее значение чаевых Джона: ' + averageTip(arrTipJohn));
console.log('Среднее значение чаевых Марка: ' + averageTip(arrTipMark));

if (averageTip(arrTipJohn) < averageTip(arrTipMark)) {
  console.log('Чаевые Марка в среднем выше');
} else if (averageTip(arrTipJohn) > averageTip(arrTipMark)) {
  console.log('Чаевые Джона в среднем выше');
} else console.log('Чаевые Джона и Марка в среднем равны');

module.exports = averageTip;