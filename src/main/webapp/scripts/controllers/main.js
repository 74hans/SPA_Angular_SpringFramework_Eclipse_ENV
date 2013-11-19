'use strict';

angular.module('SolarDasbhoardApp')
  .controller('MenuCtrl', function ($scope, $location) {
   	$scope.activeWhen = function (value) {
    	return value ? 'active' : '';
    };

    $scope.path = function () {
       	return $location.url();
    };
  })
  .controller('MainCtrl', function ($scope) {
    
  })
  .controller('RestTestCtrl', function ($scope, $http) {
  	$scope.number=1;
  	$scope.no = function() {
  		return $scope.number++;
  	}

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

    $scope.delete = function(person) {
    	console.log('Delete Person : ', $scope.person);
        $http.delete(actionUrl + $scope.person.id).success(function () {
            load();
        });
    }

  });
