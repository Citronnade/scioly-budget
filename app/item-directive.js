(function () {
    'use strict';

    angular
        .module('app')
        .directive('soItem', itemDirective);


    /* @ngInject */
    function itemDirective() {
        var directive = {
            bindToController: true,
            //transclude: true,
            controller: ItemController,
            controllerAs: 'vm',
            templateUrl: "item.template.html",
            //scope: {itemData: '='}, //TODO: Use isolate scope and binding or parent?
            link: link,
            require: '^soItemWrapper',
            restrict: 'E'

        };
        return directive;

        function link(scope, element, attrs, controller) {
            controller.addItem(scope);
        }
    }

    //ItemController.$inject = [''];

    /* @ngInject */
    function ItemController() {
        var self = this;
        console.log("self", self);
        console.log(self.itemData);
        //console.log(scope);
        //console.log($scope);
        //self.currentItem = itemData; 
        //console.log(currentItem);
    }

})();

