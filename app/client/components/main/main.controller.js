var mainController = function mainController() {
    var reference = this;
    reference.variable = 'Main Component';
};
  
angular.module('angularApp').component('mainComponent', {
    templateUrl: '/client/components/main/main.html',
    controller: mainController
});