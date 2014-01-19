'use strict';

angular.module('prodClientApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


(function($){

    var baseUrl = 'http://127.0.0.1:8000/v1/';
    
    $.ajax({
        url: baseUrl + 'activities',
        type: 'GET',
        complete: function(x){
            console.log(x.responseJSON)
        }
    });

    /*$.ajax({
        url: baseUrl + 'activities/8',
        type: 'DELETE',
        contentType: 'application/json',
        complete: function(x){
            console.log(x.responseJSON)
        }
    });*/

    console.log('posting...');
    $.ajax({
        url: baseUrl + 'activities',
        type: 'POST',
        contentType: 'application/json',
        data: '{"description": "one recipe per week", "name": "Learn to cook", "user": "/v1/users/1"}',
        complete: function(x){
            console.log(x.responseJSON)
        }
    });

}(jQuery));