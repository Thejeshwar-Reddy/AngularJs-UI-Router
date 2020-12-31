let contactsController = function contactsController(
    $http,
    $state
) {
    let $ctrlReference = this;
    
    let getContactList = () => {
        $http({
            method: 'GET',
            url: 'http://localhost:3002/contacts'
        }).then(function successCallback(response) {
            $ctrlReference.contactList = response.data;
        })
    };

    $ctrlReference.route = (contact) => { 
        $state.go('contacts.person', { contactId: contact.id, contact: contact })
    };

    let init = () => {
        getContactList();
    };

    init();
};
  
angular.module('angularApp').component('contactsComponent', {
    templateUrl: '/client/components/contacts/contacts.html',
    controller: contactsController
});