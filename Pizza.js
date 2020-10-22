var Decimal = require("decimal.js")

module.exports = Pizza;

function Pizza(ingredients, discount) {
    this.ingredients = ingredients;
    this.discount = discount;
}

Pizza.prototype.SummUpIngredientsPrices = function(){
	var sum = Decimal(0);
	for (prop in this.ingredients) {
		var ingredientPrice = this.ingredients[prop];
		sum = sum.add(this.GetPizzaPrice(ingredientPrice));
	}
	return sum;
}

Pizza.prototype.GetPizzaPrice = function (price) {
	return Decimal(price).sub((Decimal(price).mul(this.discount)));
}
