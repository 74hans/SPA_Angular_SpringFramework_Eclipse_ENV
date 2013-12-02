'use strict';

var RestfulSvc = angular.module('MobiConSoft.ComponentSvc', []);

RestfulSvc.factory('componentSvc', ['RestfulSvcApi', function (RestfulSvcApi) {

	var bizDomain = 'component';
	var factory = {};
  factory.all = function () {
  	return RestfulSvcApi.all({ domain: bizDomain }).$promise.then(function (resp) {
  		console.log('componentSvc : all data=',resp);
      return resp;
    });
  };
  factory.one = function (id) {
  	return RestfulSvcApi.all({ domain: bizDomain, key: id }).$promise.then(function (resp) {
  		console.log('componentSvc : one data=',resp);
      return resp;
    });
  };
  return factory;
}]);
