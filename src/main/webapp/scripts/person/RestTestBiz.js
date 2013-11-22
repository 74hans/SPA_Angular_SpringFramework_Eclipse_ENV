'use strict';

var RestTestBiz = angular.module('DasbhoardApp.RestTestBiz', []);

RestTestBiz.controller('RestTestBiz.personCtrl', ['$scope', '$http', function ($scope, $http) {

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
