(function() {

	'use strict';

	angular.module('smartreview.cores').config(configure);

	configure.$inject = [ '$httpProvider', '$logProvider', '$locationProvider' ];

	function configure($httpProvider, $logProvider, $locationProvider) {

		/**
		 * Having the ability to have asynchronous request across the board
		 */
		$httpProvider.useApplyAsync(true);

		/**
		 * Activates the ability to switch log statements on and off
		 */
		$logProvider.debugEnabled(true);

		/**
		 * Resolves issue with IE fetching the data and not refreshing the
		 * result
		 */
		$httpProvider.defaults.cache = false;
		if (!$httpProvider.defaults.headers.get) {
			$httpProvider.defaults.headers.get = {};
		}

		/**
		 * disable IE ajax request caching
		 */
		$httpProvider.defaults.headers.get['If-Modified-Since'] = '0';

		/**
		 * parses the html url to remove the # signs that angular places by
		 * default
		 */
		$locationProvider.html5Mode(true).hashPrefix('!');
	}
})();