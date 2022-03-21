// Write your solution in this file!
var customerName = 'bob';

// const upperCaseCustomerName = () => {
//     return customerName = customerName.toUpperCase()
// } DOES NOT WORK

function upperCaseCustomerName() {
    return customerName = customerName.toUpperCase()
}

var bestCustomer;
function setBestCustomer() {
    bestCustomer = 'not bob'
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 5
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 3
}