'use strict';

var RestfulSvc = angular.module('DasbhoardApp.RestfulSvc', []);

RestfulSvc.factory('RestfulSvcApi', ['$resource', function ($resource) {
	
	/**
	 * Restful API version. it must be attached the called url.
	 */
	var prefixUrl = '/api/v1';
	
	/**
	 * @domain : biz object ex) person
	 * @key : biz object id ex) persion id is 123
	 * @action : server action name. if it exist, you can define or not.
	 * ex) http://www.bennadel.com/blog/2433-Using-RESTful-Controllers-In-An-AngularJS-Resource.htm
	 * 
	 * add a update action for method of PUT
	 */
	return $resource( 
				prefixUrl + '/:domain/:key/:action',
			    {
			    	domain: "@domain",
			    	key: "@key",
			    	action: "@action"
			    },
			    {
			      one: { method: 'GET', isArray: false },
			      all: { method: 'GET', isArray: true },
			   	  update: {method:'PUT'}
			   	}
		    );
}]);
