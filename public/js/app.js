/**
 * the app registration
 */

var app = angular.module('mpApp', [
  'mpApp.directives',
  'mpApp.services',
  'mpApp.controllers',
  'ui.bootstrap',
  'ngRoute'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
	.when("/group", {templateUrl: "/tpl/groups.html", controller: "groupsController"})
	.when("/group/:id", {templateUrl: "/tpl/group.html", controller: "groupController"})
	.when("/me", {templateUrl: "/tpl/me.html", controller: "userController"})
	.otherwise({redirectTo: '/group'});
}])
.run(['$rootScope', function($rootScope){
	$rootScope.user = {"id":1,"firstname":"Jedidiah","lastname":"Funk","email":"tLind@yahoo.comfdafsda","active":1,"created":"2016-01-21 22:44:17","createdById":1,"updated":"1972-10-25 20:58:58","updatedById":1}
}])
;