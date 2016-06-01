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
            templateUrl: "item.template.html",
            controllerAs: 'ItemController',
            link: link,
            restrict: 'E',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }

    ItemController.$inject = ['items'];

    /* @ngInject */
    function ItemController(items) {
        var self = this;
        self.items = items.list;
    }

})();

