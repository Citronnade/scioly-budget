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
        console.log("??", $element);
    }

})();

