'use strict';

/**
 * @ngdoc overview
 * @name weatherApp
 * @description
 * # weatherApp
 *
 * Main module of the application.
 */
angular
  .module('weatherApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'uiGmapgoogle-maps'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/views/main.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function(uiGmapGoogleMapApiProvider) {
      uiGmapGoogleMapApiProvider.configure({
          //    key: 'your api key',
          v: '3.20',
          libraries: 'weather,geometry,visualization'
      });
  });
