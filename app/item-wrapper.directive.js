(function () {
    'use strict';

    angular
        .module('app')
        .directive('soItemWrapper', itemWrapperDirective);


    /* @ngInject */
    function itemWrapperDirective() { //TODO: should boxes be in item template or html?
        var directive = {
            bindToController: true,
            transclude: true,
            controller: ItemWrapperController,
            templateUrl: "item-wrapper.template.html",
            controllerAs: 'ItemWrapperController',
            link: link,
            restrict: 'E',
            //scope: {}
        };
        return directive;

        function link(scope, element, attrs) {
            scope.checkboxChanged = function(id, value){
                console.log("id", id);
                console.log("value", value);
            };
        }
    }

    ItemWrapperController.$inject = ['$element', 'items'];
    
    /* @ngInject */
    function ItemWrapperController($element, items) {
        var self = this;
        self.items = items.list;
        console.log("controller's items: ", self.items);

        self.itemElements = [];

        self.addItem = function(item){  //TODO: Have to figure out a way to re-run all the display commands when this happens
            self.itemElements.push(item);
            console.log("current items: ", self.itemElements);  //TODO: PLEASE RENAME ITEMS TO SOMEHTING READABLE
        };

        self.help = function(id, status){ //TODO: Correlate the element that sent the help to an itemElement to do stuff to.
            console.log("status: ", status);
            if(status == true) {
                angular.forEach(self.itemElements, function (itemElement) {
                    itemElement.alpha = itemElement.item.id % 2 == 1; //TODO: Rename alpha
                    console.log(itemElement.alpha); //TODO: Rename the goddamn items please
                })
            }
            else{
                angular.forEach(self.itemElements, function(itemElement){
                    itemElement.alpha = false;
                })
            }
        }
    }

})();

