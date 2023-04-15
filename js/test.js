const Contenedor = require('./Contenedor.js');
console.clear();

const productos = new Contenedor('contenedor.txt');

//Pruebo el método save
const item1 = {
     
};

const item2 = {
    
};

const item3 = {
    
};

setTimeout(() => {productos.save(item1)}, 500);
setTimeout(() => {productos.save(item2)}, 1000);
setTimeout(() => {productos.save(item3)}, 1500);
console.log(item2);



//Pruebo el método getAll
//setTimeout(() => {productos.getAll()}, 2000);

//Pruebo el método getById
//setTimeout(() => {productos.getById(1)}, 2500);

//Pruebo el método deleteById
//setTimeout(() => {productos.deleteById(2)}, 3000);

//Pruebo el método deleteAll
setTimeout(() => {productos.deleteAll()}, 3500);

// productos.generateId();