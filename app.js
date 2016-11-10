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
function ToBuyController(){
  var tobuylist = this;

  tobuylist.items = ShoppingListCheckOffService.getItems();

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(){
  var boughtlist = this;

}

function ShoppingListCheckOffService(){
  var service = this;

  var tobuy = mylist;
  var bought = [];

  service.getItems = function () {
    return tobuy;
  };
}

})();
