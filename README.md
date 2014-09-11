angular-money-mask
==================

AngularJS Native Money Mask

This directive relies on the AngularJS currency filter in order to transform the number into currency. You may import the i18n locale to apply it to your local currency.

angular.module("yourAppName", "money-mask");

<input type="text" ng-model="value" money-mask/>