// var app=angular.module('myApp',['ngRoute']);
//定义路由表
//sy---page_1.html
//xx---page_2.html
//sx---page_3.html
//txl---page_4.html
//sjx---page_5.html
// app.config(['$routeProvider',function($routeProvider){
// 	$routeProvider.when('/sy',{
// 		templateUrl:'tpis/page_1.html',
// 	}).when('/xx',{
// 		templateUrl:'tpis/page_2.html'
// 	}).when('/sx',{
// 		templateUrl:'tpis/page_3.html'
// 	}).when('/txl',{
// 		templateUrl:'tpis/page_4.html'
// 	}).when('/sjx',{
// 		templateUrl:'tpis/page_5.html'
// 	}).otherwise({redirectTo:'/sy'});
// }]);



var app=angular.module('myApp',['ui.router']);

app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('sy',{
		url:'/sy',
		templateUrl:'tpis/page_1.html'
	}).state('sy.birthday',{
		url:'/birthday',
		templateUrl:'tpis/birthday.html'
	}).state('sy.message',{
		url:'/message',
		templateUrl:'tpis/message.html'
	}).state('xx',{
		url:'/xx',
		templateUrl:'tpis/page_2.html'
	}).state('xx.pt',{
		url:'/pt',
		templateUrl:'tpis/pt.html'
	}).state('xx.q',{
		url:'/q',
		templateUrl:'tpis/q.html'
	}).state('sx',{
		url:'/sx',
		templateUrl:'tpis/page_3.html'
	}).state('txl',{
		url:'/txl',
		templateUrl:'tpis/page_4.html'
	}).state('sjx',{
		url:'/sjx',
		templateUrl:'tpis/page_5.html'
	});
	$urlRouterProvider.otherwise('/sy');
});

