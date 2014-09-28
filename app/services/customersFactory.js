/**
 * Created by Mary on 9/27/14.
 */

(function() {
   var customersFactory = function() {
       var customers = [
           {id: 1, name: 'Lex', city: 'Dublin', orderTotal: '9', joined: '1988-12-26',
               orders: [{
                   id: 1,
                   product: 'shoes',
                   total: 9
               }]
           },
           {id: 2, name: 'Steven', city: 'Pittsburg', orderTotal: '13', joined: '1987-05-20',
               orders: [{
                   id: 2,
                   product: 'car',
                   total: 10
               },
                   {
                       id: 3,
                       product: 'gum',
                       total: 3
                   }]
           },
           {id: 3, name: 'Jeff', city: 'Concord', orderTotal: '54', joined: '2008-11-01',
               orders: [{
                   id: 4,
                   product: 'hat',
                   total: 54
               }]
           },
           {id: 4, name: 'Mary', city: 'Fremont', orderTotal: '23', joined: '1989-01-23',
               orders: [{
                   id: 5,
                   product: 'dress',
                   total: 23
               }]
           }
       ];

       var factory = {};
       factory.getCustomers = function() {
           return customers;
       };

       factory.getCustomer = function(customerId) {
           for (var i= 0, len = customers.length; i < len; i++) {
               if (customers[i].id === parseInt(customerId)) {
                   return customers[i];
               }
           }
           return {};
       }
       return factory;
   };

    angular.module('customersAppModule')
        .factory('customersFactory', customersFactory);

}());