angular.module('functionalities', [])
.directive("entering", function(){
    return function(scope, element, attrs){
        element.bind("mouseenter", function(){
            scope.$apply(attrs.entering);
        })
    }
})
.directive("leaving", function(){
    return function(scope, element, attrs){
        element.bind("mouseleave", function(){
            scope.$apply(attrs.leaving);
        })
    }
});

angular.module('functionalities')
.controller("FunCtrl", function(){
    var self = this;
    self.start = function(){
        console.log("entered!");
    };
    self.end = function(){
        console.log("left :(");
    };

})