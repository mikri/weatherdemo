(function(){
  'use strict';

/**
 * @ngdoc directive
 * @name weatherappApp.directive:stations
 * @description
 * @example <stations></stations>
 * # stations
 */
angular.module('weatherappApp')
  .directive('stations', stationsInfo);

  function stationsInfo() {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element) {
        element.text('this is the stations directive');
      }
    };
      /* implementation details */
  }
})();
