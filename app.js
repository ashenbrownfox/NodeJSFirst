//in node everything is a reference
var me = {
    favfood: "bacon",
    favmovie: "hangover"
};
var person = me;
person.favfood = "salad";
console.log(me.favfood);

