'use strict';

angular.module('myApp', [ 'ngRoute','myApp-main','templates' ])
  .config(function ($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  });