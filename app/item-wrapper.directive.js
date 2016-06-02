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

        function link(scope, element, attrs) { //TODO: Refactor so that checkbox values are passed in to one function!!!
            scope.changeOne = function(value){
                console.log("1");
                console.log(a);
            };
            scope.changeTwo = function(value){console.log("2")};
        }
    }

    ItemWrapperController.$inject = ['$element', 'items'];

    /* @ngInject */
    function ItemWrapperController($element, items) {
        var self = this;
        self.items = items.list;
        console.log("??", $element);
    }

})();

