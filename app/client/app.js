var app = angular.module('angularApp', ['ui.router']);
app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state({
    name: 'contacts',
    url: '/contacts',
    component: 'contactsComponent'
  });
  $stateProvider.state({
    name: 'contacts.person',
    url: '/{contactId}',
    views: {
      'messageView@contacts': 'messagesComponent',
      'detailsView@contacts': ''
    }
  });
  $urlRouterProvider.otherwise('/contacts');
});