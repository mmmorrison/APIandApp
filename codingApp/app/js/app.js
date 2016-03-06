var app = angular.module("myApp", ['ngRoute', 'ngResource']);


app.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'MainController'
      })
      .when('/cats', {
        templateUrl: 'partials/cats/index.html',
        controller: 'CatsIndexController'
      })
      .when('/newcat', {
        templateUrl: 'partials/cats/new.html',
        controller: 'CatsNewController'
      })
      .when('/cats/:id', {
        templateUrl: 'partials/cats/show.html',
        controller: 'CatsShowController'
      })

});
