'use strict';

/**
 * @ngdoc directive
 * @name timeConverterApp.directive:timePanel
 * @description
 * # timePanel
 */
angular.module('timeConverterApp')
  .directive('timePanel', function () {
    return {
      templateUrl: 'views/timepanel.html',
      restrict: 'E',
        scope: {
            timeZone: '=timeZone',
            size: '=size',
            before: '=before'
        },
        link: function(scope, element, attrs){
            var currentHour = new Date().getUTCHours();
            scope.timeRange = [];
            for(var i = 0; i < scope.size; i++){
                scope.timeRange.push({value:currentHour + scope.timeZone + i - scope.before, now: i == scope.before});
            }
        }
    };
  });
