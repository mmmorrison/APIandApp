var app = angular.module("myApp", ['ngRoute', 'ngResource']);


app.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
    $routeProvider
      .when('/resources', {
        templateUrl: 'partials/resources/index.html',
        controller: 'ResourcesController'
      })
      .when('/newresource', {
        templateUrl: 'partials/resources/new.html',
        controller: 'NewController'
      })
      .when('/resource/:id', {
        templateUrl: 'partials/resources/show.html',
        controller: 'ShowController'
      })

});
