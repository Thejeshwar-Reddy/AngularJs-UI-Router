let contactsFactory = (
    $http,
    $q,
    $state
) => {
    let contactsFactory = {}

    contactsFactory.getContactList = () => {
        return $http({
            method: 'GET',
            url: 'http://localhost:3002/contacts',
            cache: true
        })
    }

    contactsFactory.getContact = (index) => { 
        var deferred = $q.defer();
        contactsFactory.getContactList().then((response) => {
            if (response.data[index]) {
                deferred.resolve(response.data[index]);
            } else { 
                deferred.reject('no data');
                $state.go('contacts.person', { contactId: 1 }, { reload: true });
            }
        })
        return deferred.promise;
    }

    return contactsFactory;
}
contactsFactory.$inject = ['$http', '$q', '$state'];
angular.module('angularApp').factory('contactsFactory', contactsFactory);