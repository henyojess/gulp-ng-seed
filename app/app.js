'use strict';

angular.module('gulp-ng-seed', [ 'ngRoute','gulp-ng-seed-main','templates' ])
  .config(function ($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  });