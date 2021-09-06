const Mouse = require("./mouse");

function Cat(){
    this.stomach=[];
}
Cat.prototype.eat=function(mouse){
    this.stomach.push(mouse);
}
module.exports = Cat;