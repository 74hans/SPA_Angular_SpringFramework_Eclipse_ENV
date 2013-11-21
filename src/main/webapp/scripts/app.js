'use strict';

angular.module('SolarDasbhoardApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize'
])
  .config(['$routeProvider', function ($routeProvider) {
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
