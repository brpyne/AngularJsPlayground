angular.module('phonecat', ['phonecatFilters']).
  config(['$routeProvider', function ($routeProvider) {
      $routeProvider.
          when('/Phones', { templateUrl: '/Scripts/app/partials/phone-list.html', controller: PhoneListCtrl }).
          when('/Phones/:phoneId', { templateUrl: '/Scripts/app/partials/phone-detail.html', controller: PhoneDetailCtrl }).
          otherwise({ redirectTo: '/Phones' });
  }]);

/*
In order to configure our application with routes, we need to create a module for our application. 
We call this module phonecat and using the config API we request the $routeProvider to be injected into our config function and 
use $routeProvider.when API to define our routes.

Note that during the injector configuration phase, the providers can be injected as well, but they will not be available for injection 
once the injector is created and starts creating service instances.

Our application routes were defined as follows:

The phone list view will be shown when the URL hash fragment is /phones. To construct this view, Angular will use the phone-list.html 
template and the PhoneListCtrl controller.

The phone details view will be shown when the URL hash fragment matches '/phone/:phoneId', where :phoneId is a variable part of the URL. 
To construct the phone details view, angular will use the phone-detail.html template and the PhoneDetailCtrl controller.

We reused the PhoneListCtrl controller that we constructed in previous steps and we added a new, empty PhoneDetailCtrl controller to the 
app/js/controllers.js file for the phone details view.

The statement $route.otherwise({redirectTo: '/phones'}) triggers a redirection to /phones when the browser address doesn't match either of our routes.

Note the use of the :phoneId parameter in the second route declaration. The $route service uses the route declaration — '/phones/:phoneId' — 
as a template that is matched against the current URL. All variables defined with the : notation are extracted into the $routeParams object.

In order for our application to bootstrap with our newly created module we'll also need to specify the module name as the value of the ngApp directive:

app/index.html:

*/