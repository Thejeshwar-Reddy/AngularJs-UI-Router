var headerController = function headerController() {
    var reference = this;
    reference.variable = 'header Component';
};
  
angular.module('angularApp').component('headerComponent', {
    templateUrl: '/client/components/header/header.html',
    controller: headerController
});