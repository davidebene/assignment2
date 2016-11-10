(function () {
'use strict';

var mylist = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
    name: "Cake",
    quantity: "5"
  }
];

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var tobuylist = this;

  tobuylist.items = ShoppingListCheckOffService.getItemsToBuy();

  tobuylist.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);

    if (tobuylist.items.length == 0) {
      tobuylist.errorMessage = true;
    }
  };

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var boughtlist = this;

  boughtlist.items = ShoppingListCheckOffService.getBoughtItems();

  boughtlist.getInfo = function () {
    if (boughtlist.items.length == 0) {
      return true;
    }
  };

}

function ShoppingListCheckOffService(){
  var service = this;

  var tobuy = mylist;
  var bought = [];

  service.getItemsToBuy = function () {
    return tobuy;
  };

  service.getBoughtItems = function () {
    return bought;
  };

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    bought.push(item);
  };

  service.removeItem = function (itemIdex) {
    this.addItem(tobuy[itemIdex].name, tobuy[itemIdex].quantity);
    tobuy.splice(itemIdex, 1);
  };
}

})();
