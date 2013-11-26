'use strict';

var DashboardApp = angular.module('DasbhoardApp', [
  'ngRoute',                                                  
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'DasbhoardApp.CommonCtrl',
  'DasbhoardApp.RestTestBiz',
  'DasbhoardApp.RestfulSvc'
]);

DashboardApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/resttest', {
        templateUrl: 'views/restTest.html',
        controller: 'RestTestBiz.personCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

//DashboardApp.run(['$rootScope','$templateCache',function($rootScope, $templateCache) {
//  $rootScope.$on('$routeChangeStart', function() {
//     $templateCache.removeAll();
//  });
//}]);