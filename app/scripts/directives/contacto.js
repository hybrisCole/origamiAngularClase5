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
        informacionContacto:'=descripcionContacto'
      },
      link: function postLink(scope, element, attrs) {

      }
    };
  });

