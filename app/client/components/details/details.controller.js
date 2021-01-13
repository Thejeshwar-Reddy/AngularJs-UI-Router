let detailsController = function detailsController(
    detailsFactory,
    $stateParams
) {
    let $ctrlReference = this;
    let contactId = $stateParams.contactId;
    
    let getDetails = () => { 
        detailsFactory.getDetails(contactId).then(function (respone) { 
            $ctrlReference.details = respone.data;
        })
    }

    $ctrlReference.$onInit = function () { 
        getDetails();
    }
};
  
angular.module('angularApp').component('detailsComponent', {
    templateUrl: '/client/components/details/details.html',
    controller: detailsController
});