angular.module("money-mask", []);
angular.module("money-mask").directive('moneyMask', ['$timeout', 'moneyMaskService', function($timeout, moneyMaskService) {
   return {
     require: 'ngModel',
     link: function(scope, element, attrs, ctrl) {
         var execute = function () {
             scope.$apply(function () {
                 ctrl.$setViewValue(moneyMaskService.fromStringToMoney(ctrl.$modelValue));
                 ctrl.$render();
             });
         };
         element.bind('keyup', function () {
             execute();
         });
         
         $timeout(function () { 
             execute();
         }, 500);
      }
   };
}]);
angular.module("money-mask").factory("moneyMaskService", [ "$filter", function ($filter) {
    var _otherCharacters = /[^0-9]/g;
    var _zeros = /^0+/;
    
    var _fromStringToMoney = function (string) {
        return $filter("currency")((_fromStringToNumber(string)/100).toFixed(2));
    };
    
    var _fromStringToNumber = function (string) {
        if (!string) return 0;
        return string.replace(_otherCharacters, '').replace(_zeros, '') || 0;
    }
    
    return {
        fromStringToMoney: _fromStringToMoney
    };
}]);