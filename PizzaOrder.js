varDecimal = require("decimal.js")
/*
 * PizzaOrder.js
 */

// Public
module.exports = PizzaOrder;

functionPizzaOrder(pizzaTypes, ingredients) {​​​​​​​​
this.pizzaTypes = pizzaTypes;
this.ingr = ingredients;
}​​​​​​​​

PizzaOrder.prototype.GetPrice = function (discount) {​​​​​​​​
this.discount = Decimal(discount);

varsum = Decimal(0);

for (vari = 0; i < this.pizzaTypes.length; i++) {​​​​​​​​
varpizzaType = this.pizzaTypes[i];
switch (pizzaType) {​​​​​​​​
case"margherita":
sum = sum.add(this.SummUpIngredientsPrices(this.initializeMargheritaIngredients()));                           
break;
case"customerSpecial":
varingredients = this.ingr
sum = sum.add(this.SummUpIngredientsPrices(ingredients));                           
break;
default:
sum += 0;
break;
        }​​​​​​​​
    }​​​​​​​​

returnsum;
}​​​​​​​​;
 
PizzaOrder.prototype.SummUpIngredientsPrices = function (ingredients) {​​​​​​​​
varsum = Decimal(0);
for (propiningredients) {​​​​​​​​
varingredientPrice = ingredients[prop];
sum = sum.add(this.GetPizzaPrice(ingredientPrice));
    }​​​​​​​​
returnsum; 
}​​​​​​​​
PizzaOrder.prototype.initializeMargheritaIngredients = function () {​​​​​​​​
varingredients = {​​​​​​​​}​​​​​​​​;
ingredients["margherita"] = 10.90;
 
returningredients;
}​​​​​​​​

PizzaOrder.prototype.GetMargheritaPrice = function () {​​​​​​​​
returnthis.GetPizzaPrice(10.90);
}​​​​​​​​

PizzaOrder.prototype.GetPizzaPrice = function (price) {​​​​​​​​
returnDecimal(price).sub((Decimal(price).mul(this.discount)));
}​​​​​​​​

PizzaOrder.prototype.Save = function () {​​​​​​​​
varresult = "<pizzaOrder>";

for (vari = 0; i < this.pizzaTypes.length; i++) {​​​​​​​​
varpizzaType = this.pizzaTypes[i];

switch (pizzaType) {​​​​​​​​
case"margherita":
result += "<pizza><description>Best margherita in town</description><price>" +
this.SummUpIngredientsPrices(this.initializeMargheritaIngredients()) + "</price></pizza>";
break;
case"customerSpecial":
varsum = Decimal(0);
sum = sum.add(this.SummUpIngredientsPrices(this.ingr));  
result += "<pizza><description>Customer special pizza with " + Object.keys(this.ingr).join(",") +
"</description><price>" + sum +
"</price></pizza>";
break;
default:
result += string.Empty;
break;
        }​​​​​​​​
    }​​​​​​​​

returnresult + "</pizzaOrder>";
}​​​​​​​​;
