const Model = require('./model')


const mycar = new Model("Ford", "Mustang");
console.log(mycar.show())
console.log(mycar.cnam)
mycar.cnam = "Volvo";
console.log(mycar.cnam)


// mycar = new Car("Ford");
// console.log(mycar.present())
console.log(Model.hello())