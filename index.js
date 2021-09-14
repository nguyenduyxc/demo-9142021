var Dog= require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');

var dog =new Dog('Tom');
var tom = new Cat();
var jerry = new Mouse();

tom.eat(jerry);
console.log(tom);
dog.eat(tom);
console.log(dog);
//dog.sayHi();

