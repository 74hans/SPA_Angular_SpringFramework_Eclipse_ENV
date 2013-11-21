'use strict';

angular.module('SolarDasbhoardApp')
  .controller('MenuCtrl', ['$scope', '$location', function ($scope, $location) {
   	$scope.activeWhen = function (value) {
    	return value ? 'active' : '';
    };

    $scope.path = function () {
       	return $location.url();
    };
  }])
  .controller('MainCtrl', ['$scope', function ($scope) {
    
  }])
  .controller('RestTestCtrl', ['$scope', '$http', function ($scope, $http) {
 
    var actionUrl = 'api/v1/person/',
 	  load = function () {
 				console.log('before calling...');

                $http.get(actionUrl).success(function (data) {
                    $scope.persons = data;
                    console.log('persons is ', $scope.persons);
                });
           };

    load();

    $scope.save = function () {
    	console.log('Save Person : ', $scope.person);
        $http.post(actionUrl, $scope.person).success(function () {
            load();
        });
    };

    $scope.update = function () {
    	console.log('Update Person : ', $scope.person);
        $http.put(actionUrl, $scope.person).success(function () {
            load();
        });
    };

    $scope.deletePerson = function(id) {
    	console.log('Delete Person : ', id);
        $http['delete'](actionUrl + id).success(function () {
            load();
        });
    };

  }]);
