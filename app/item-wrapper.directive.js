(function () {
    'use strict';

    angular
        .module('app')
        .directive('soItemWrapper', itemWrapperDirective);


    /* @ngInject */
    function itemWrapperDirective() {
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

        }
    }

    ItemWrapperController.$inject = ['items'];

    /* @ngInject */
    function ItemWrapperController(items) {
        var self = this;
        self.items = items.list;
    }

})();

