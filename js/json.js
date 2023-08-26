//JavaScript Object Notation (JSON)
const user = {id: 1, name: 'nymr', job: 'actor'};
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    owner:'Alia',
    address: {
        street: 'patenga',
        city: 'ctg',
        country: 'BD'
    },
    products: [ 'laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
};
// console.log(shop);
const shopJson = JSON.stringify(shop);
// console.log(shopJson);
const shopObject = JSON.parse(shopJson);
console.log(shopObject);
