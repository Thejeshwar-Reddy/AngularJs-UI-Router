let contactsController = function contactsController(
    $http
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

    let init = () => {
        getContactList();
    };

    init();
};
  
angular.module('angularApp').component('contactsComponent', {
    templateUrl: '/client/components/contacts/contacts.html',
    controller: contactsController
});