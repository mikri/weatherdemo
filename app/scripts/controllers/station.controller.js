(function() {
  'use strict';

/**
 * @ngdoc function
 * @name weatherApp.controller:StationController
 * @description
 * # StationController
 * Controller of the weatherApp
 */

 angular.module('weatherApp')
   .controller('StationController', StationController);

  /* @ngInject */
  function StationController($http, $log, $scope, uiGmapGoogleMapApi) {
      var vm = this;
      vm.getStations = getStations;
      vm.maps = undefined;
      vm.markers = [];

      vm.map = { center: { latitude: 60, longitude: 25 }, zoom: 8 };
      vm.showWindow = false;

      activate();

      function activate() {
        uiGmapGoogleMapApi.then(function(maps) {
          vm.maps = maps;
        });
        getStations();
      }

      function getStations() {
        $http.get('http://api.openweathermap.org/data/2.5/station/find?lat=60&lon=24&cnt=50&units=metric&APPID=<APPID>', {cache: true})
          .success(function(response) {
            var m = [];
            for (var i = 0; i < response.length; i++) {
              m.push({
                id:response[i].station.id,
                name: response[i].station.name,
                coords : {
                  latitude:response[i].station.coord.lat,
                  longitude:response[i].station.coord.lon
                },
                data: response[i]
              });
            }
            vm.markers = m;
          });

      }

  }
})();
