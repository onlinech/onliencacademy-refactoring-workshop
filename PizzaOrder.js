var Decimal = require("decimal.js")
const Pizza = require('./Pizza');
/*
 * PizzaOrder.js
 */

// Public
module.exports = PizzaOrder;

function PizzaOrder(pizzaTypes, ingredients) {
	this.pizzaTypes = pizzaTypes;
	this.ingr = ingredients;
}

const margheritaDescription = "Best margherita in town";
const customerSpecialDescription = "Customer special pizza with ";

PizzaOrder.prototype.CalculatePrice = function (discount) {
	this.discount = Decimal(discount);

	var sum = Decimal(0);

	for (var i = 0; i < this.pizzaTypes.length; i++) {
		var pizzaType = this.pizzaTypes[i];
		switch (pizzaType) {
			case "margherita":
				var pizza = new Pizza(this.initializeMargheritaIngredients(),this.discount);
				sum = sum.add(pizza.SummUpIngredientsPrices());
				break;
			case "customerSpecial":
				var ingredients = this.ingr
				var pizza = new Pizza(ingredients,this.discount);
				sum = sum.add(pizza.SummUpIngredientsPrices());

				break;
			default:
				sum += 0;
				break;
		}
	}

	return sum;
};

PizzaOrder.prototype.initializeMargheritaIngredients = function () {
	var ingredients = {};
	ingredients["margherita"] = 10.90;

	return ingredients;
}

PizzaOrder.prototype.IngredientsToString = function (ingredients) {
	return Object.keys(ingredients).join(",");
}

PizzaOrder.prototype.GetGeneratedXml = function () {
	var result = "<pizzaOrder>";

	for (var i = 0; i < this.pizzaTypes.length; i++) {
		var pizzaType = this.pizzaTypes[i];

		switch (pizzaType) {
			case "margherita":
				var pizza = new Pizza(this.initializeMargheritaIngredients(),this.discount);
				result += "<pizza><description>" + margheritaDescription + "</description><price>" +
					pizza.SummUpIngredientsPrices() + "</price></pizza>";
				break;
			case "customerSpecial":
				var sum = Decimal(0);
				var pizza = new Pizza(this.ingr,this.discount);
				sum = sum.add(pizza.SummUpIngredientsPrices());
				result += "<pizza><description>" + customerSpecialDescription + this.IngredientsToString(this.ingr) +
					"</description><price>" + sum +
					"</price></pizza>";
				break;
			default:
				result += string.Empty;
				break;
		}
	}

	return result + "</pizzaOrder>";
};
