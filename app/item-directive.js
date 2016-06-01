(function () {
    'use strict';

    angular
        .module('app')
        .directive('soItemDirective', itemDirective);

    itemDirective.$inject = [''];

    /* @ngInject */
    function itemDirective() {
        var directive = {
            bindToController: true,
            controller: ItemController,
            controllerAs: 'vm',
            templateUrl: "item.template.html",
            link: link,
            restrict: 'A',
            scope: {itemData: '='}
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }

    ItemController.$inject = [''];

    /* @ngInject */
    function ItemController() {

    }

})();

