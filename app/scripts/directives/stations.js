(function(){
  'use strict';

/**
 * @ngdoc directive
 * @name weatherApp.directive:stations
 * @description
 * @example <stations></stations>
 * # stations
 */

angular.module('weatherApp')
  .directive('stations', stationsInfo);

  function stationsInfo() {
    var directive = {
        link: link,
        templateUrl: '/views/stations.html',
        restrict: 'E',
        scope: {},
        controller: 'StationController',
        controllerAs: 'vm',
        bindToController: true
    };
    return directive;

    function link(scope, el, attr, ctrl) {
        
    }

  }
})();
