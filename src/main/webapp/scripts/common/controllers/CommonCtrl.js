'use strict';

var CommonCtrl = angular.module('DasbhoardApp.CommonCtrl', []);

CommonCtrl.controller('CommonCtrl.menuCtrl', ['$scope', '$location', function ($scope, $location) {

	$scope.activeWhen = function (value) {
    	return value ? 'active' : '';
    };

    $scope.path = function () {
       	return $location.url();
    };

    $scope.setRoute = function (url) {
        $location.path(url);
    };    

  }]);
