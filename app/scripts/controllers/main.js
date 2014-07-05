'use strict';

/**
 * @ngdoc function
 * @name origamiDirectivasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the origamiDirectivasApp
 */
angular.module('origamiDirectivasApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.contacts = [
      {
        name:'Scott Stevens',
        picture:'http://api.randomuser.me/portraits/men/49.jpg'
      },
      {
        name:'Seth Frazier',
        picture:'http://api.randomuser.me/portraits/men/97.jpg'
      },
      {
        name:'Jean Myers',
        picture:'http://api.randomuser.me/portraits/women/90.jpg'
      },
      {
        name:'Todd Shelton',
        picture:'http://api.randomuser.me/portraits/men/24.jpg'
      },
      {
        name:'Rosemary Porter',
        picture:'http://api.randomuser.me/portraits/women/34.jpg'
      },
      {
        name:'Debbie Schmidt',
        picture:'http://api.randomuser.me/portraits/women/56.jpg'
      },
      {
        name:'Glenda Patterson',
        picture:'http://api.randomuser.me/portraits/women/76.jpg'
      }
    ];

  });
