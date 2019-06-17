(function () {
  "use strict";

  function TLocalStorage(KeyName) {
    var self = this;
    self.STORAGE = {};

    self.reset = function () {
      if (localStorage.getItem(KeyName)) {
        if (KeyName == "dish") {
          var myObject = JSON.parse(localStorage[KeyName]);
          self.STORAGE = myObject;
        }

        if (KeyName == "DRINKS") {
          var myObject = JSON.parse(localStorage[KeyName]);
          self.STORAGE = myObject;
        }
      }
    }


    self.addValue = function (key, value) {
      self.STORAGE[key] = value;
      localStorage.setItem(KeyName, JSON.stringify(self.STORAGE));
    }

    self.getValue = function (key) {
      if (key in self.STORAGE) {
        return self.STORAGE[key];
      } else {
        return undefined;
      }
    }

    self.deleteValue = function (key) {
      if (key in self.STORAGE) {
        delete self.STORAGE[key];
        localStorage.setItem(KeyName, JSON.stringify(self.STORAGE));
        return true;
      } else {
        return false;
      }
    }

    self.getKeys = function () {
      var keys = [];
      for (var key in self.STORAGE) {
        keys.push(key + " ");
      }
      return keys;
    }
  }

  var drinkStorage = new TLocalStorage("DRINKS");
  drinkStorage.reset();
  document.getElementById("drinkName").onclick = function () {
    var drinkName = prompt("Напишите название напитка");
    var objDrink = {};
    objDrink.name = drinkName;
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

  var dishStorage = new TLocalStorage("dish");
  dishStorage.reset();
  document.getElementById("dishName").onclick = function () {
    var dishName = prompt("Напишите название блюда");
    var objDish = {};
    objDish.name = dishName;
    objDish.hot = confirm(dishName + " - подается горячим или нет?");
    objDish.recipe = prompt("Напишите рецепт - " + dishName);
    dishStorage.addValue(dishName, objDish);
  }

  document.getElementById("dishInfo").onclick = function () {
    var dishName = prompt("Напишите название блюда");
    if (dishStorage.getValue(dishName) !== undefined) {
      document.getElementById("dishInfoDiv").innerHTML = "блюдо: " + dishName + "<br>" + "горячее: " + (dishStorage.getValue(dishName).hot === true ? "да" : "нет") + "<br>" + "Рецепт приготовления: " + (dishStorage.getValue(dishName).recipe ? dishStorage.getValue(dishName).recipe : "рецепта нет");
    } else {
      document.getElementById("dishInfoDiv").innerHTML = "Такого блюда нет!";
    }
  }

  document.getElementById("dishInfoDelete").onclick = function () {
    var dishDelete = prompt("Напишите название блюда");
    if (dishStorage.deleteValue(dishDelete) === true) {
      document.getElementById("dishInfoDiv").innerHTML = "Информация удалена!";
    } else {
      document.getElementById("dishInfoDiv").innerHTML = "Такого блюда нет!";
    }
  }

  document.getElementById("dishList").onclick = function () {
    document.getElementById("dishInfoDiv").innerHTML = dishStorage.getKeys();
  }
})();