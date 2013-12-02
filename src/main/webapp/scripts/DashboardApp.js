'use strict';

var DashboardApp = angular.module('DasbhoardApp', [
  'ngRoute', 
  'ui.router',
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'DasbhoardApp.CommonCtrl',
  'MobiConSoft.ComponentMod',
  'DashboardApp.JqGridDrtv',
  'DasbhoardApp.RestTestBiz',
  'DasbhoardApp.JqGridBiz',
  'DasbhoardApp.RestfulSvc'
]);

DashboardApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("/main");
	
	$stateProvider
      .state('main', {
      	url: '/main',
        templateUrl: 'views/main.html'
      })
      .state('resttest', {
      	url: '/resttest',
        templateUrl: 'views/restTest.html',
        controller: 'RestTestBiz.personCtrl'
      })
      .state('jqgridtest', {
      	url: '/jqgridtest',
        templateUrl: 'views/jqGridTest.html',
        controller: 'JqGridBiz.salesCtrl'
      })
      .state('mc-component', {
      	url: '/mc-component',
        templateUrl: 'views/mc/component.html',
        controller: 'ComponentMod.componentCtrl'
      })
	      .state('mc-component.detail', {
	      	url: '/detail/{componentId:[0-9]{1,4}}',
	        templateUrl: 'views/mc/component.detail.html',
	        controller: 'ComponentMod.componentDetailCtrl'
	      })
	      .state('mc-component.create', {
	      	url: '/create',
	        templateUrl: 'views/mc/component.create.html',
	        controller: 'ComponentMod.componentCreateCtrl'
	      });
  }]);

DashboardApp.run(['$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {

      // It's very handy to add references to $state and $stateParams to the $rootScope
      // so that you can access them from any scope within your applications.For example,
      // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
      // to active whenever 'contacts.list' or one of its decendents is active.
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
  }]);

//DashboardApp.run(['$rootScope','$templateCache',function($rootScope, $templateCache) {
//  $rootScope.$on('$routeChangeStart', function() {
//     $templateCache.removeAll();
//  });
//}]);