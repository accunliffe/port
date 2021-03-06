'use strict';


// Declare app level module which depends on filters, and services
angular.module('inCar', ['myApp.filters', 'myApp.services', 'myApp.directives','ngRoute', 'duScroll', 'ui.bootstrap','angularFileUpload']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1', controller: MyCtrl1});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2', controller: MyCtrl2});
    $routeProvider.when('/view3', {templateUrl: 'partials/partial3', controller: MyCtrl3});
    $routeProvider.when('/view4', {templateUrl: 'partials/partial4', controller: MyCtrl4});
    $routeProvider.when('myModalContent', {templateUrl: 'partials/myModalContent', controller: ModalCtrl})
    $routeProvider.otherwise({redirectTo: '/view1'});
    $locationProvider.html5Mode(true);  
  }]);