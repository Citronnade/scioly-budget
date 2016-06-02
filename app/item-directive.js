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
            //scope: {itemData: '='},
            link: link,
            restrict: 'E'

        };
        return directive;

        function link(scope, element, attrs, controller) {
            console.log(scope.itemData);
            console.log("scope", scope);
            console.log("current item", scope.item);
            console.log("controller", controller);
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
        //self.currentItem = itemData; //TODO: GET DATA BINDING WORKING
        //console.log(currentItem);
    }

})();

