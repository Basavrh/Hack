(function() {

	'use strict';

	angular.module('smartreview.cores').config(routes);

	routes.$inject = [ '$stateProvider', '$urlRouterProvider' ];

	/**
	 * Provides all the
	 * 
	 * @param $stateProvider
	 */
	function routes($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('smartreview', {
				url : '/',
				views : {
					'header' : {
						templateUrl : './static/templates/header.html',
					},
					'leftmenu' : {
						templateUrl : './static/templates/leftmenu.html',
					},
					'content' : {
						templateUrl : './static/js/dashboard/dashboard.html',
						controller : 'DashboardController',
						controllerAs : 'vm'
					},
					'footer' : {
						templateUrl : './static/templates/footer.html'
					}
				}
			})
	}
})();