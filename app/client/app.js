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
			'detailsView@contacts': 'detailsComponent'
		},
		resolve: {
			contact: function (contactsFactory, $transition$) {
				return contactsFactory.getContact($transition$.params().contactId - 1);
			}
		}
	});
	$urlRouterProvider.otherwise('/contacts');
});
