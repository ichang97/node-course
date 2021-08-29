function calculateVat(money, vat){
    return money * vat / 100;
}

function sayHello(){
    console.log('Hello eiei.');
}


module.export = calculateVat //single export module

//multiple export module
module.exports = {
    calculateVat,
    sayHello
}