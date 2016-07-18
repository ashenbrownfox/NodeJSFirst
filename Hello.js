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