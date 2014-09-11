angular-money-mask
==================

AngularJS Native Money Mask

This directive relies on the AngularJS currency filter in order to transform the number into currency. You may import the i18n locale to apply it to your local currency.

Step 1: Importing the money-mask module to your application

```
angular.module("yourAppName", "money-mask");
```

Step 2: Using the directive

```
<input type="text" ng-model="value" money-mask/>
```

Step 3: Enjoy!