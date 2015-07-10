'use strict';

angular.module('sApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('index', {
        url: '/index',
        templateUrl: 'app/index/index.html',
        controller: 'IndexCtrl'
      });
  });