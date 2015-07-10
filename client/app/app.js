'use strict';

angular.module('sApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'toaster',                   
  'localytics.directives',     
  'ngDialog',                  
  'ngWig',                     
  'ngTable',                   
  'ngTableExport',             
  'angularBootstrapNavTree',   
  /*'htmlSortable',*/
  'xeditable',                 
  'angularFileUpload',         
  'ngImgCrop',                 
  'ui.select',                 
  'ui.codemirror',             
  'angular-carousel',          
  'ngGrid',                    
  'infinite-scroll',           
  'ui.bootstrap-slider',       
  'ui.grid',                   
  'textAngular',               
  'angular-rickshaw',          
  'angular-chartist',          
  'ui.map',                    
  'datatables',                
  'angular-jqcloud',           
  'angularGrid',               
  'ng-nestable',               
  'akoenig.deckgrid',          
  'oitozero.ngSweetAlert',     
  'bm.bsTour'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });


  var App = angular.module('sApp');