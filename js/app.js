'use strict';

var App = angular.module('myApp', ['ngAnimate', 'ngMaterial', 'ngRoute']);

App.config([
    '$routeProvider',
    '$locationProvider',
    '$mdThemingProvider',
    function($routeProvider, $locationProvider, $mdThemingProvider) {
        $routeProvider.when('/', {
            templateUrl: 'template/my.tmpl.html',
            controller: 'MyCtrl'
        }).otherwise({ redirectTo: '/' });

        $mdThemingProvider.theme('default')
            .primaryColor('green')
            .accentColor('teal');

        $locationProvider.html5Mode(true);
    }
]);
