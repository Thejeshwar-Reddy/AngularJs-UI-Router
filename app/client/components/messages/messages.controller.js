let messagesController = function messagesController(
    $http,
    $stateParams,
    $state
) {
    let $ctrlReference = this;
    let contactId = $stateParams.contactId;
    
    if (!$stateParams.contact) {
        $state.go('contacts');
    }
    
    $ctrlReference.contact = $stateParams.contact;

    let getMessages = () => {
        $http({
            method: 'GET',
            url: `http://localhost:3002/messages/${contactId}`
        }).then(function successCallback(response) {
            $ctrlReference.messageList = response.data;
        })
    };
    
    let init = () => {
        getMessages();
    };

    init();
};
  
angular.module('angularApp').component('messagesComponent', {
    templateUrl: '/client/components/messages/messages.html',
    controller: messagesController
});