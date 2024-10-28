var app = angular.module('angularApp', ['ui.router']);
app.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider.state({
		name: 'contdacts',
		url: '/constacts',
		component: 'contactsComponents'
	});
	$stateProvider.state({
		name: 'contacts.person',
		url: '/{contactId}',
		views: {
			'messageView@contacts': 'messasgesComponent',
			'detailsView@contacts': 'detailsfComponent'
		},
		resolve: {
			contact: function (contactsFactory, $transition$) {
				return contactsFactory.getContact($transition$.params().contactId - 1);
			}
		}
	});
	$urlRouterProvider.otherwise('/contacts');
});
