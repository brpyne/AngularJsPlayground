﻿

function PhoneListCtrl($scope, $http) {
    

    $http.get('/Scripts/app/phones/phones.json').success(function (data) {
        $scope.phones = data;

        // Limit to first 5
        //$scope.phones = data.splice(0, 5);
    });

    $scope.orderProp = 'age';


    $scope.hello = "Hello, World!";

}


//PhoneListCtrl.$inject = ['$scope', '$http'];


function PhoneDetailCtrl($scope, $routeParams, $http) {
    $http.get('/Scripts/app/phones/' + $routeParams.phoneId + '.json').success(function (data) {
        $scope.phone = data;
    });
}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', '$http'];



/*
$http makes an HTTP GET request to our web server, asking for phone/phones.json (the url is relative to our index.html file). 
The server responds by providing the data in the json file. (The response might just as well have been dynamically generated by a backend server. 
To the browser and our app they both look the same. For the sake of simplicity we used a json file in this tutorial.)

The $http service returns a promise object with a success method. We call this method to handle the asynchronous response and assign the phone data 
to the scope controlled by this controller, as a model called phones. Notice that angular detected the json response and parsed it for us!

To use a service in angular, you simply declare the names of the dependencies you need as arguments to the controller's constructor function, as follows:

function PhoneListCtrl($scope, $http) {...}
Angular's dependency injector provides services to your controller when the controller is being constructed. 
The dependency injector also takes care of creating any transitive dependencies the service may have (services often depend upon other services).

Note that the names of arguments are significant, because the injector uses these to look up the dependencies.
*/