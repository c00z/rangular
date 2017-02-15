angular.module('sampleApp', ['ngRoute', 'templates'])

.config(config)
.controller('HomeIndexController', HomeIndexController);

config.$inject = ['$routeProvider', '$locationProvider'];
function config (  $routeProvider,   $locationProvider  )  {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'HomeIndexController',
      controllerAs: 'homeIndexCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
};


HomeIndexController.$inject=['$http'];
function HomeIndexController($http) {
  var vm = this;
  console.log('AAAAAAAAHHHHH')
  $http({
    method: 'GET',
    url: '/api/todos'
  }).then(function successCallback(response) {
    console.log('response for all todos:', response);
    // probably do something with the response data
  }, function errorCallback(error) {
    console.log('There was an error getting the data', error);
  });

};

HomeShowController.$inject=['$http', '$routeParams'];
function HomeShowController($http, $routeParams) {
  var vm = this;
  var todoId = $routeParams.id;
  $http({
    method: 'GET',
    url: '/api/todos' + 'todoId'
  }).then(function successCallback(response) {
    console.log('response for all todos:', response);
    // probably do something with the response data
  }, function errorCallback(error) {
    console.log('There was an error getting the data', error);
  });

};
