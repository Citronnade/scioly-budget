angular.module("greetings", [])
.directive("welcome", function(){
    return {
        restrict: "E",
        scope: {},
        transclude: true,
        template: "<ng-transclude></ng-transclude><div>This is the welcome component</div>"
    }
});