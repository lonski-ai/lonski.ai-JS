(function() {
  "use strict";

  function THashStorage() {

    this.hashStorage = {};

    this.addValue = function(key, value) {
      this.hashStorage[key] = value;
    }

    this.getValue = function(key) {
      if (key in this.hashStorage) {
        return this.hashStorage[key];
      } else {
        return undefined;
      }
    }

    this.deleteValue = function(key) {
      if (key in this.hashStorage) {
        delete this.hashStorage[key];
        return true;
      } else {
        return false;
      }
    }

    this.getKeys = function() {
      var keys = [];
      for (var key in this.hashStorage) {
        keys.push(key);
      }
      return keys;
    }
  }

  var drinkStorage = new THashStorage();

  document.getElementById("drinkName").onclick = function() {
    var drinkName = prompt("Напишите название напитка");
    var objDrink = {};
    objDrink.alcohol = confirm(drinkName + " - алкогольный напиток или нет?");
    objDrink.recipe = prompt("Напишите рецепт - " + drinkName);
    drinkStorage.addValue(drinkName, objDrink);
  }

  document.getElementById("drinkInfo").onclick = function() {
    var drinkName = prompt("Напишите название напитка");
    if (drinkStorage.getValue(drinkName) !== undefined) {
      document.getElementById("drinkInfoDiv").innerHTML = "напиток: " + drinkName + "<br>" + "алкогольный: " + (drinkStorage.getValue(drinkName).alcohol === true ? "да" : "нет") + "<br>" + "Рецепт приготовления: " + (drinkStorage.getValue(drinkName).recipe ? drinkStorage.getValue(drinkName).recipe : "рецепта нет");
    } else {
      document.getElementById("drinkInfoDiv").innerHTML = "Такого напитка нет!";
    }
  }

  document.getElementById("drinkInfoDelete").onclick = function() {
    var drinkDelete = prompt("Напишите название напитка");
    if (drinkStorage.deleteValue(drinkDelete) === true) {
      document.getElementById("drinkInfoDiv").innerHTML = "Информация удалена!";
    } else {
      document.getElementById("drinkInfoDiv").innerHTML = "Такого напитка нет!";
    }
  }

  document.getElementById("drinkList").onclick = function() {
    document.getElementById("drinkInfoDiv").innerHTML = drinkStorage.getKeys();
  }
})();