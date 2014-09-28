/**
 * Created by Mary on 9/26/14.
 */

function CustomersController(){
    this.sortBy = 'name';
    this.reverse = false;

    this.customers = [{name:'Lex', city: 'Dublin', orderTotal: '9', joined: '1988-12-26'}, {name:'Steven', city: 'Pittsburg', orderTotal: '13', joined: '1987-05-20'}, {name:'Logan', city: 'Concord', orderTotal: '54', joined: '2008-11-01'}];
    this.doSort = function(propName) {
        this.sortBy = propName;
        this.reverse = !this.reverse;
    };
}
