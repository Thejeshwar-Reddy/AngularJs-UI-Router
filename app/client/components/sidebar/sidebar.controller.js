var sidebarController = function sidebarController() {
    var reference = this;
    reference.variable = 'side bar Component';
};
  
angular.module('angularApp').component('sidebarComponent', {
    templateUrl: '/client/components/sidebar/sidebar.html',
    controller: sidebarController
});