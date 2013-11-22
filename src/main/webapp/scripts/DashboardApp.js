'use strict';

var DashboardApp = angular.module('DasbhoardApp', [
  'ngRoute',                                                  
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'DasbhoardApp.CommonCtrlMod'
]);

DashboardApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'CommonCtrlMod.mainCtrl'
      })
      .when('/resttest', {
        templateUrl: 'views/resttest.html',
        controller: 'CommonCtrlMod.restTestCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

DashboardApp.run(['$rootScope','$templateCache',function($rootScope, $templateCache) {
  $rootScope.$on('$routeChangeStart', function() {
     $templateCache.removeAll();
  });
}]);