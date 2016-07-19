function placeanOrder(orderno){
    console.log("Order Number: "+orderno);

    cookAndDeliverFood(function(){
        console.log(orderno+" Delivered! ");
    });
}
function cookAndDeliverFood(callback){
    setTimeout(callback,5000);
}

//In node js you can assign functions to variables and use them inside other functions
var printBacon = function(){
    console.log("Bacon is healthy don't listen to doctors.");
}
//call this function after 5 seconds
setTimeout(printBacon, 5000);

placeanOrder(1);
placeanOrder(2);
placeanOrder(3);
//move test code in here
//in node everything is a reference
var me = {
    favfood: "bacon",
    favmovie: "hangover"
};
//person is merely a reference to me
var person = me;
person.favfood = "salad";
//Only compare the values
//console.log(19== '19');
//whenever you want to compare values and types
//console.log(19=== '19');

//this is a reference to whatever is calling it
//the default calling context is global
function doSomethingWorthless(){
    console.log("\nI am worthless");
    console.log(this===global);
}

function User(){
    this.name="";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer){
        targetPlayer.life += 1;
        console.log(this.name + "gave 1 life to "+targetPlayer.name)
    }
}

var Ailun = new User(); Ailun.name = "Ailun";
var Eeyore = new User(); Eeyore.name = "Eeyore";

Ailun.giveLife(Eeyore);
Eeyore.giveLife(Ailun);
Eeyore.giveLife(Ailun);
// console.log("Ailun: "+Ailun.life);
// console.log("Eeyore: "+Eeyore.life);
User.prototype.uppercut = function uppercut(targetPlayer){
    targetPlayer.life -= 2;
    console.log(this.name + " punched "+targetPlayer.name)
}
Ailun.uppercut(Eeyore)
console.log("Ailun: "+Ailun.life);
console.log("Eeyore: "+Eeyore.life);
User.prototype.Magic = 60;
//importing
var movies = require("./movies");
movies.printAvatar();
console.log(movies.favMovie);