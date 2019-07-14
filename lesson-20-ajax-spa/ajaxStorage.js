"use strict"
function TAJAXStorage() {
  var self = this;
  var UpdatePassword;
  self.hashStorage = {};

  $.ajax("http://fe.it-academy.by/AjaxStringStorage2.php",
      {type: "POST", dataType: "json", data: {f: "READ", n: "Lonski_lesson_20"}, success: update, error: errorHandler}
  );

  function update(data) {
    self.hashStorage = JSON.parse(data.result);
    console.log("Полученные данные " + data.result);
  }

  function errorHandler(statusStr, errorStr) {
    alert(statusStr + ' ' + errorStr);
  }

  self.addValue = function (key, value) {
    self.hashStorage[key] = value;
    sendInfo(self.hashStorage);
  }

  function sendInfo(hash) {
    UpdatePassword = Math.random();
    $.ajax("http://fe.it-academy.by/AjaxStringStorage2.php",
        {type: 'POST', dataType: "json", data: {f: 'LOCKGET', n: 'Lonski_lesson_20', p: UpdatePassword}, cache: false, success: lockGetReady, error: errorHandler}
    );
  }

  function lockGetReady(data) {
    $.ajax("http://fe.it-academy.by/AjaxStringStorage2.php",
        {type: 'POST', dataType: "json", data: {f: 'UPDATE', n: 'Lonski_lesson_20', v: JSON.stringify(self.hashStorage), p: UpdatePassword}, cache: false, success: updateReady, error: errorHandler}
    );
  }

  function updateReady(data) {
    console.log("Данные отправлены");
  }

  self.getValue = function (key) {
    if (key in self.hashStorage) {
      return self.hashStorage[key];
    } else {
      return undefined;
    }
  }

  self.deleteValue = function (key) {
    if (key in self.hashStorage) {
      delete self.hashStorage[key];
      sendInfo(self.hashStorage);
      return true;
    } else {
      return false;
    }
  }

  self.getKeys = function () {
    var keys = [];
    for (var key in self.hashStorage) {
      keys.push(key);
    }
    return keys;
  };
}

var drinkStorage = new TAJAXStorage();

document.getElementById("drinkName").onclick = function () {
  var drinkName = prompt("Напишите название напитка");
  var objDrink = {};
  objDrink.alcohol = confirm(drinkName + " - алкогольный напиток или нет?");
  objDrink.recipe = prompt("Напишите рецепт - " + drinkName);
  drinkStorage.addValue(drinkName, objDrink);
}

document.getElementById("drinkInfo").onclick = function () {
  var drinkName = prompt("Напишите название напитка");
  if (drinkStorage.getValue(drinkName) !== undefined) {
    document.getElementById("drinkInfoDiv").innerHTML = "напиток: " + drinkName + "<br>" + "алкогольный: " + (drinkStorage.getValue(drinkName).alcohol === true ? "да" : "нет") + "<br>" + "Рецепт приготовления: " + (drinkStorage.getValue(drinkName).recipe ? drinkStorage.getValue(drinkName).recipe : "рецепта нет");
  } else {
    document.getElementById("drinkInfoDiv").innerHTML = "Такого напитка нет!";
  }
}

document.getElementById("drinkInfoDelete").onclick = function () {
  var drinkDelete = prompt("Напишите название напитка");
  if (drinkStorage.deleteValue(drinkDelete) === true) {
    document.getElementById("drinkInfoDiv").innerHTML = "Информация удалена!";
  } else {
    document.getElementById("drinkInfoDiv").innerHTML = "Такого напитка нет!";
  }
}

document.getElementById("drinkList").onclick = function () {
      document.getElementById("drinkInfoDiv").innerHTML = drinkStorage.getKeys();
    }
