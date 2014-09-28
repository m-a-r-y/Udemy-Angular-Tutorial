/**
 * Created by Mary on 9/26/14.
 */
//Option One
//var app = angular.module('customersAppModule', ['ngRoute']);
//
//app.config(function ($routeProvider) {
//   $routeProvider
//       .when('/editCustomer/:customerId',
//           {
//               controller: 'CustomerEditController',
//               templateUrl: '/app/views/customerEdit.html'
//           });
//});


//Option Two & Three
(function () {
    var app = angular.module('customersAppModule', ['ngRoute']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'CustomersController',
                templateUrl: 'app/views/customers.html'
            })
            .when('/orders/:customerId', {
                controller: 'OrdersController',
                templateUrl: 'app/views/orders.html'
            })
        .otherwise( { redirectTo: '/' } );
    });
}());
