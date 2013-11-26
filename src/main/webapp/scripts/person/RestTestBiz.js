'use strict';

var RestTestBiz = angular.module('DasbhoardApp.RestTestBiz', ['DasbhoardApp.RestfulSvc']);

RestTestBiz.controller('RestTestBiz.personCtrl', ['$scope', 'RestfulSvcApi', function ($scope, RestfulSvcApi) {

  var bizDomain = 'person';
  var load = function () {
    	console.log('before calling...');
    	RestfulSvcApi.all(
    		// params
    		{ domain: bizDomain },
    		// success
    		function (response) {
    			$scope.persons = response;
    			console.log('persons is ', $scope.persons);
    		}, 
    		// error
    		function (response) {
    			
    		});
     };

  load();

  $scope.save = function () {
  	console.log('Save Person : ', $scope.person);
  	RestfulSvcApi.save(
  			{ domain: bizDomain }, $scope.person,
  			function(response) { load(); },
  			function(response) {}
  	);
  };

  $scope.update = function () {
  	console.log('Update Person : ', $scope.person);
  	RestfulSvcApi.update(
  			{ domain: bizDomain }, $scope.person ,
  			function(response) { load(); },
  			function(response) {}
  	);
  };

  $scope.deletePerson = function(personId) {
  	console.log('Delete Person : ', personId);
  	RestfulSvcApi['delete'](
  			{ domain: bizDomain, key: personId }, 
  			function(response) { load(); },
  			function(response) {}
  	);
  };

}]);

// RestTestBiz.controller('RestTestBiz.personCtrl', ['$scope', '$http', function ($scope, $http) {

//    var actionUrl = 'api/v1/person/',
// 	  load = function () {
// 				console.log('before calling...');

// 				$http.get(actionUrl).success(function (data) {
//                    $scope.persons = data;
//                    console.log('persons is ', $scope.persons);
//                });
//           };

//    load();

//    $scope.save = function () {
//    	console.log('Save Person : ', $scope.person);
//        $http.post(actionUrl, $scope.person).success(function () {
//            load();
//        });
//    };

//    $scope.update = function () {
//    	console.log('Update Person : ', $scope.person);
//        $http.put(actionUrl, $scope.person).success(function () {
//            load();
//        });
//    };

//    $scope.deletePerson = function(id) {
//    	console.log('Delete Person : ', id);
//        $http['delete'](actionUrl + id).success(function () {
//            load();
//        });
//    };

//  }]);

