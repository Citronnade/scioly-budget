(function () {
    'use strict';

    angular
        .module('app', [])
        .factory("items", function(){
            var items = {};
            items.list = [];

            items.add = function(item){
                items.list.push({id: items.list.length, text: item});
                console.log("hello yes this is the service we have ", items.list);
            };
            return items;
        })
        .controller("ListController", function(items){
            var self = this;
            self.items = items.list;

        })
        .controller("AddController", function(items){
            var self = this;
            self.newItem = "Duct tape";
            self.addItem = function(item){
                items.add(item);
                console.log("added: ", item);
                console.log("all items: ", items);
            }
        })

})();