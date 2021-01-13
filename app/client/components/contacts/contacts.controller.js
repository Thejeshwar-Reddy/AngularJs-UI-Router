let contactsController = function contactsController(
    $state,
    contactsFactory,
    $stateParams
) {
    let $ctrlReference = this;

    let getContactList = () => {
        contactsFactory.getContactList().then((response) => {
            $ctrlReference.contactList = response.data;
        })
    };

    $ctrlReference.route = (contact) => {
        if ($stateParams.contactId == contact.id) {
            $state.go('contacts.person', { contactId: contact.id }, { reload: true });
            return;
        }
        $state.go('contacts.person', { contactId: contact.id });
    };

    $ctrlReference.$onInit = function () { 
        getContactList();
    }
};

angular.module('angularApp').component('contactsComponent', {
    templateUrl: '/client/components/contacts/contacts.html',
    controller: contactsController
});