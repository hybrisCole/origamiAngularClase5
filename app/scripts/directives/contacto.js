'use strict';

/**
 * @ngdoc directive
 * @name origamiDirectivasApp.directive:contacto
 * @description
 * # contacto
 */
angular.module('origamiDirectivasApp')
  .directive('contacto', function () {
    return {
      templateUrl:function(elem,attrs){
        console.log(attrs);
        return 'templates/contactoTemplate.html';
      },
      restrict: 'E',
      scope:{
        informacionContacto:'=descripcionContacto',
        close:'&onClose',
        modalInformation:'=modalInfo'
      },
      link: function(scope, element, attrs) {

      },
      controller:function($scope){
        $scope.displayData = true;
        $scope.hideData = function(){
          $scope.displayData = false;
        };
        $scope.showData = function(){
          $scope.displayData = true;
        };
      }
    };
  });

