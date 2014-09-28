/**
 * Created by Mary on 9/25/14.
 */
//creating a customer controller here:

(function() {

    var CustomersController = function ($scope, customersFactory, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        $scope.appSettings = appSettings;

        function init() {
            $scope.customers = customersFactory.getCustomers();
        }

        init();

        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
    };

    CustomersController.$inject = ['$scope', 'customersFactory', 'appSettings'];

    angular.module('customersAppModule')
        .controller('CustomersController', CustomersController);

}());






//Option One
/*app.controller('CustomersController', function ($scope) {
    $scope.sortBy = 'name';
    $scope.reverse = false;

    $scope.customers = [
                        {name:'Lex', city: 'Dublin', orderTotal: '9', joined: '1988-12-26'},
                        {name:'Steven', city: 'Pittsburg', orderTotal: '13', joined: '1987-05-20'},
                        {name:'Jeff', city: 'Concord', orderTotal: '54', joined: '2008-11-01'},
                        {name:'Mary', city: 'Fremont', orderTotal: '23', joined: '1989-01-23'}
                       ];
    $scope.doSort = function(propName) {
        $scope.sortBy = propName;
        $scope.reverse = !$scope.reverse;
    };
}); */


//Option Two
/*angular.module('customersAppModule')
    .controller('CustomersController', function ($scope) {
        $scope.sortBy = 'name';
        $scope.reverse = false;

        $scope.customers = [
            {name:'Lex', city: 'Dublin', orderTotal: '9', joined: '1988-12-26'},
            {name:'Steven', city: 'Pittsburg', orderTotal: '13', joined: '1987-05-20'},
            {name:'Jeff', city: 'Concord', orderTotal: '54', joined: '2008-11-01'},
            {name:'Mary', city: 'Fremont', orderTotal: '23', joined: '1989-01-23'}
        ];
        $scope.doSort = function(propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
});*/


//Option Three
/*(function() {

    var CustomersController = function ($scope) {
        $scope.sortBy = 'name';
        $scope.reverse = false;

        $scope.customers = [
            {name: 'Lex', city: 'Dublin', orderTotal: '9', joined: '1988-12-26'},
            {name: 'Steven', city: 'Pittsburg', orderTotal: '13', joined: '1987-05-20'},
            {name: 'Jeff', city: 'Concord', orderTotal: '54', joined: '2008-11-01'},
            {name: 'Mary', city: 'Fremont', orderTotal: '23', joined: '1989-01-23'}
        ];
        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
    }

    angular.module('customersAppModule')
        .controller('CustomersController', CustomersController);
}());*/

//Option Three A injections (remember to take out the 'foo' and 'bar')
/*(function() {

    var CustomersController = function ($scope, foo, bar) {
        $scope.sortBy = 'name';
        $scope.reverse = false;

        $scope.customers = [
            {name: 'Lex', city: 'Dublin', orderTotal: '9', joined: '1988-12-26'},
            {name: 'Steven', city: 'Pittsburg', orderTotal: '13', joined: '1987-05-20'},
            {name: 'Jeff', city: 'Concord', orderTotal: '54', joined: '2008-11-01'},
            {name: 'Mary', city: 'Fremont', orderTotal: '23', joined: '1989-01-23'}
        ];
        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
    }

    angular.module('customersAppModule')
        .controller('CustomersController', ['$scope', 'foo', 'bar', CustomersController]);
}()); */


//Option Three B injections (remember to take out the 'foo' and 'bar')
/*(function() {

    CustomersController.$inject = ['$scope', 'foo', 'bar'];
    function CustomersController ($scope, foo, bar) {
        $scope.sortBy = 'name';
        $scope.reverse = false;

        $scope.customers = [
            {name: 'Lex', city: 'Dublin', orderTotal: '9', joined: '1988-12-26'},
            {name: 'Steven', city: 'Pittsburg', orderTotal: '13', joined: '1987-05-20'},
            {name: 'Jeff', city: 'Concord', orderTotal: '54', joined: '2008-11-01'},
            {name: 'Mary', city: 'Fremont', orderTotal: '23', joined: '1989-01-23'}
        ];
        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
    }

    angular.module('customersAppModule')
        .controller('CustomersController', CustomersController);
}());*/

