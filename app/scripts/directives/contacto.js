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
      templateUrl:'templates/contactoTemplate.html',
      restrict: 'E',
      scope:{
        informacionContacto:'=descripcionContacto',
        hola:'='
      },
      link: function postLink(scope, element, attrs) {
        element.click(function(ev){
          alert('Hola Desde La Directiva');
        });
      }
    };
  });
