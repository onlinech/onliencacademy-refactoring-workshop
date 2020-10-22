const PizzaOrder = require('./PizzaOrder');

var ingredients = {};
ingredients["base"] = 11.90;
ingredients["mushrooms"] = 1;
ingredients["ham"] = 2;
// console.log(ingredients);
// for(prop in ingredients)
// {
// 	console.log(prop);
// 	console.log(ingredients[prop]);
// }
const order = new PizzaOrder(["margherita", "customerSpecial"], ingredients);
const discount = 0.0; // 0.1 --> 10%

console.log("Price: " + order.CalculatePrice(discount));
console.log("Save(): " + order.GetGeneratedXml());