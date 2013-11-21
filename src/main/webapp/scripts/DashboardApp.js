'use strict';

var DashboardApp = angular.module('DasbhoardApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'DasbhoardApp.CommonCtrlMod'
]);

DashboardApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/resttest', {
        templateUrl: 'views/resttest.html',
        controller: 'RestTestCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
