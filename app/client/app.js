var app = angular.module('angularApp', ['ui.router']);
app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state({
    name: 'main',
    url: '/',
    component: 'mainComponent'
  });
  $urlRouterProvider.otherwise('/');
});