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
        picture:'http://api.randomuser.me/portraits/men/49.jpg',
        mail:'acpii2005@gmail.com'
      },
      {
        name:'Seth Frazier',
        picture:'http://api.randomuser.me/portraits/men/97.jpg',
        mail:'dfoidsfpi@gmail.com'
      },
      {
        name:'Jean Myers',
        picture:'http://api.randomuser.me/portraits/women/90.jpg',
        mail:'awaoidu@gmail.com'
      },
      {
        name:'Todd Shelton',
        picture:'http://api.randomuser.me/portraits/men/24.jpg',
        mail:'sadipsaol@gmail.com'
      },
      {
        name:'Rosemary Porter',
        picture:'http://api.randomuser.me/portraits/women/34.jpg',
        mail:'sdaspodipo@gmail.com'
      },
      {
        name:'Debbie Schmidt',
        picture:'http://api.randomuser.me/portraits/women/56.jpg',
        mail:'dljasdlkj@gmail.com'
      },
      {
        name:'Glenda Patterson',
        picture:'http://api.randomuser.me/portraits/women/76.jpg',
        mail:'qewqwe@gmail.com'
      }
    ];

  });
