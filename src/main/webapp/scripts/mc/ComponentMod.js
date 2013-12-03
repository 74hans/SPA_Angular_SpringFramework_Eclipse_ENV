'use strict';

var ComponentMod = angular.module('MobiConSoft.ComponentMod', []);

ComponentMod.controller('ComponentMod.componentCtrl', ['$rootScope', '$scope', 'RestfulSvcApi', '$state', '$stateParams', 'componentSvc',
                                                             	function ($rootScope, $scope, RestfulSvcApi, $state, $stateParams, componentSvc) {
	
	console.log('===> $state.current.name=', $state.current.name);
	console.log('===> $stateParams.componentId=', $stateParams.componentId);

	$rootScope.$on("updateComponentList", function(event, data){
		console.log('--broadcasting data, ', data);
	  $scope.components = data;
	});
	
	var getAll = function() {
		console.log('-----all: ', $scope.components);
		componentSvc.getAll();
	};
	
	var getOne = function() {
		console.log('-----one: ', $stateParams.componentId);
		RestfulSvcApi.one({ domain: 'component', key: $stateParams.componentId },
			function(response) {
				console.log('componentCtrl : one data=',response);
		    $scope.component = response;
			},
			function(response) {});
	};
	
	if($state.current.name === 'mc-component' || (!$stateParams.componentId && !$scope.components)) {
		getAll();
	};
	
	if($state.current.name === 'mc-component.detail' && $stateParams.componentId) {
		getOne();
	};
	
	$scope.update = function() {
		console.log('componentCtrl : component=', $scope.component);
		RestfulSvcApi.update({ domain: 'component'}, $scope.component,
				function(response) {
					console.log('---update, ', response);
					getAll();
				},
				function(response) {});
	};
	
	$scope.deleteComp = function() {
		RestfulSvcApi['delete']({ domain: 'component', key: $scope.component.id },
				function(response) {
					console.log('---delete, ', response);
					$scope.component = {};
					getAll();
				},
				function(response) {});
	};
  
	$scope.save = function() {
		console.log('----> component is ', $scope.component);
		RestfulSvcApi.save({ domain: 'component' }, $scope.component,
				function(response) {
					console.log('---save, ', response);
					getAll();
				},
				function(response) {});
	};
	
 }]);


ComponentMod.service('componentSvc', ['$rootScope', 'RestfulSvcApi', function ($rootScope, RestfulSvcApi) {
	this.getAll = function() {
		RestfulSvcApi.all({ domain: 'component' },
			function(response) {
				console.log('componentSvc : all data=', response);
				$rootScope.$broadcast('updateComponentList', response);
			},
			function(response) {});
	};
	
}]);

