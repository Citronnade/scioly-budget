(function () {
    'use strict';

    angular
        .module('app')
        .directive('soItem', itemDirective);


    /* @ngInject */
    function itemDirective() {
        var directive = {
            bindToController: true,
            transclude: true,
            controller: ItemController,
            controllerAs: 'vm',
            templateUrl: "item.template.html",
            link: link,
            restrict: 'E',
            scope: {itemData: '='}
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

    //ItemController.$inject = [''];

    /* @ngInject */
    function ItemController() {
        var self = this;
        self.currentItem = itemData; //TODO: GET DATA BINDING WORKING
        console.log(currentItem);
    }

})();

