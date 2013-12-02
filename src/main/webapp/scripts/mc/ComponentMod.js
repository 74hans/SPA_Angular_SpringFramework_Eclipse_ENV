'use strict';

var ComponentCtrl = angular.module('MobiConSoft.ComponentMod', []);

ComponentCtrl.controller('ComponentMod.componentCtrl', ['$scope', 'RestfulSvcApi', function ($scope, RestfulSvcApi) {

	RestfulSvcApi.all({ domain: 'component' }).$promise.then(function (resp) {
		console.log('componentCtrl : all data=',resp);
		$scope.components = resp;
  });
  
 }]);

ComponentCtrl.controller('ComponentMod.componentDetailCtrl', ['$scope', 'RestfulSvcApi', '$state', '$stateParams', 
                                                              function ($scope, RestfulSvcApi, $state, $stateParams) {

	RestfulSvcApi.one({ domain: 'component', key: $stateParams.componentId }).$promise.then(function (resp) {
		console.log('componentCtrl : one data=',resp);
    $scope.component = resp;
  });
	
	$scope.update = function() {
		console.log('componentCtrl : component=', $scope.component);
		RestfulSvcApi.update(
				{ domain: 'component'}, $scope.component,
				function(response) {
					$state.go('.create');
				},
				function(response) {}
		);
	};
	
	$scope.deleteComp = function() {
		RestfulSvcApi['delete'](
				{ domain: 'component', key: $scope.component.id },
				function(response) {
					$state.transitionTo('mc-component');
				},
				function(response) {}
		);
	}
  
 }]);

ComponentCtrl.controller('ComponentMod.componentCreateCtrl', ['$scope', 'RestfulSvcApi', '$state', function ($scope, RestfulSvcApi, $state) {

	$scope.save = function() {
			console.log('----> component is ', $scope.component);
			RestfulSvcApi.save(
					{ domain: 'component' }, $scope.component,
					function(response) {
						$state.go('mc-component');
					},
					function(response) {}
			);
		};
			
 }]);
