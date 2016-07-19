/** //Demonstrating some examples of core modules **/

var fs = require('fs');
fs.writeFileSync("lebron.txt", "LeBron is the new king");
console.log(fs.readFileSync("lebron.txt").toString());

//path module is great when working with file paths
var path = require('path');
var homepath = "C:\\\\Users\\\Ashen/////Source\\\Repos\\\\NodeT\\\\app.js";

console.log(path.normalize(homepath));
console.log(path.dirname(homepath));
console.log(path.basename(homepath));
console.log(path.extname(homepath));

setInterval(function(){
   console.log("Cheeseburgers!");
},2000);