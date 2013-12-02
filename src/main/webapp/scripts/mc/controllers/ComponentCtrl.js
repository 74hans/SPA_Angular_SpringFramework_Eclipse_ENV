'use strict';

var ComponentCtrl = angular.module('MobiConSoft.ComponentCtrl', []);

ComponentCtrl.controller('ComponentCtrl.componentCtrl', ['$scope', 'RestfulSvcApi', function ($scope, RestfulSvcApi) {

	RestfulSvcApi.all({ domain: 'component' }).$promise.then(function (resp) {
		console.log('componentSvc : all data=',resp);
		$scope.components = resp;
  });
  
 }]);

ComponentCtrl.controller('ComponentCtrl.componentDetailCtrl', ['$scope', 'RestfulSvcApi', '$stateParams', function ($scope, RestfulSvcApi, $stateParams) {

	RestfulSvcApi.one({ domain: 'component', key: $stateParams.componentId }).$promise.then(function (resp) {
		console.log('componentSvc : one data=',resp);
    $scope.component = resp;
  });
  
 }]);
