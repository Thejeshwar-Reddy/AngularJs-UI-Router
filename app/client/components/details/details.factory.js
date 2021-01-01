let detailsFactory = (
    $http
) => {
    let detailsFactory = {}

    detailsFactory.getDetails = (contactId) => {
        return $http({
            method: 'GET',
            url: `http://localhost:3002/details/${contactId}`
        })
    }

    return detailsFactory;
}
detailsFactory.$inject = ['$http'];
angular.module('angularApp').factory('detailsFactory', detailsFactory);