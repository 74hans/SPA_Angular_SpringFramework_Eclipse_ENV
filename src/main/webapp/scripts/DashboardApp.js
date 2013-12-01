'use strict';

var DashboardApp = angular.module('DasbhoardApp', [
  'ngRoute',                                                  
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'DasbhoardApp.CommonCtrl',
  'DasbhoardApp.MCAdminCtrl',
  'DashboardApp.JqGridDrtv',
  'DasbhoardApp.RestTestBiz',
  'DasbhoardApp.JqGridBiz',
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
      .when('/jqgridtest', {
        templateUrl: 'views/jqGridTest.html',
        controller: 'JqGridBiz.salesCtrl'
      })
      .when('/mc-component', {
        templateUrl: 'views/mc/component.html',
        controller: 'MCAdminCtrl.componentCtrl'
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