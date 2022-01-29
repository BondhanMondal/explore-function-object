var computer = {
    price: 29000,
    storage: '156gb',
    color: 'silver',
    processor: 'intel i5'
}

// console.log(computer);
// console.log(computer.processor);
var computerPrice = computer.price;
// console.log(computerPrice);

// set object property value 
computer.price = 22000;
// console.log(computer);

// different ways to set a value of an object property 
var priceName = "price";
computer.price = 250000;
computer['price'] = 23000;
computer[priceName] = 18000;

var storageProperty = "storage";
computer[storageProperty] = '512gb';
computer.storage = '1tb';
computer['storage'] = '2tb';

console.log(computer);