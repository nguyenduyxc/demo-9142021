var chalk = require('chalk');
function Dog(name){
   this.name=name;
 //  this.stomach =[]; 
};

Dog.prototype.sayHi=function(){
    console.log('hi! my name is ' +chalk.blue(this.name));
}
module.exports = Dog;
