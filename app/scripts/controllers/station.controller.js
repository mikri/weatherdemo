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
  function StationController($log, uiGmapGoogleMapApi) {
      var vm = this;
      vm.maps = undefined;
      vm.markers = [];
      vm.getStations = getStations;
      vm.title = 'Stations';
      vm.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };


      activate();

      function activate() {
        uiGmapGoogleMapApi.then(function(maps) {
          vm.maps = maps;
        });
      }

      function getStations() {

      }

  }
})();
