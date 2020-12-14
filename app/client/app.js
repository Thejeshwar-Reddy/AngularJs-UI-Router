var app = angular.module('angularApp', ['ui.router']);
app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state({
    name: 'main',
    url: '/',
    template: '<div>view</div>'
  });
  $urlRouterProvider.otherwise('/');
});