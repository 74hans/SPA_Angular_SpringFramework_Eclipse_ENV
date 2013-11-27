'use strict';
var jqGridDrtv = angular.module('DashboardApp.JqGridDrtv', [ 'DasbhoardApp.RestfulSvc' ]);

/**
 * mc is Mobile Convergence of MobiConSoft
 * 
 * @use : <mc-jq-grid config="config" data="data"></mc-jq-grid>
 * 
 * config and data is used in Controller of Angular.js
 */
jqGridDrtv.directive('mcJqGrid', [ 'RestfulSvcApi', function(RestfulSvcApi) {
	return {
		restrict : 'E',
		scope : {
			config : '=',
			data : '=',
		},
		link : function(scope, element, attrs) {
			var table;

			scope.$watch('config', function(newValue) {
				element.children().empty();
				table = angular.element('<table></table>');
				element.append(table);
				$(table).jqGrid(newValue);
				//console.log(table); table is jquery object
				//console.log($(table)); $(table) is jquery selector object
			});

			scope.$watch('data', function(newValue, oldValue) {
				var i;
				for (i = oldValue.length - 1; i >= 0; i--) {
					$(table).jqGrid('delRowData', i);
				}
				for (i = 0; i < newValue.length; i++) {
					$(table).jqGrid('addRowData', i, newValue[i]);
				}
			});
		}
	};
} ]);