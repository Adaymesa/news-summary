var newsSummaryApp = angular.module("newsSummaryApp", ['ngRoute']);

newsSummaryApp.config(function($routeProvider,$locationProvider){

	$routeProvider
	.when('/', {
		templateUrl: 'templates/main.html',
		controller: 'SummaryAppController'
	});

	$locationProvider.html5Mode(true)
	
});