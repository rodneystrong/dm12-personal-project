angular.module('daft')
    .config(function($stateProvider, $urlRouterProvider) {

        //This is a catch all for our routes. "If you can't find the route, send back to home".
        //Kinda' like a global 404
        $urlRouterProvider.otherwise("/");

//       We need to configure our routes here

        //in the code below, we're adding a .state property to the stateProvider
        $stateProvider
          .state('home', {
            url: '/',
            templateUrl: 'views/home.html'
          })
          .state('projects', {
            // url:'/projects',
            //commented out above to show functionality of code below
            //type is just an arbitrary word
            url:'/projects/:id',
            templateUrl:'views/projects.html',
            controller: 'MainCtrl',
            resolve: [

            ]
          })
          .state('contact', {
            url:'/contact',
            templateUrl:'views/contact.html'
          })
          .state('pricing', {
            url:'/pricing',
            templateUrl:'views/pricing.html'
          });

});
