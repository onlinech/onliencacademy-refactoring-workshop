var Decimal = require("decimal.js")
/*
 * PizzaOrder.js
 */

// Public
module.exports = PizzaOrder;

function PizzaOrder(pizzaTypes, ingredients) {
	this.pizzaTypes = pizzaTypes;
	this.ingr = ingredients;
}

PizzaOrder.prototype.GetPrice = function (discount) {
	this.discount = Decimal(discount);

	var sum = Decimal(0);

	for (var i = 0; i < this.pizzaTypes.length; i++) {
		var pizzaType = this.pizzaTypes[i];
		switch (pizzaType) {
			case "margherita":
				sum = sum.add(this.GetMargheritaPrice());
				break;
			case "customerSpecial":
				for (prop in this.ingr) {
					sum = sum.add(Decimal(this.ingr[prop]).sub((Decimal(this.ingr[prop]).mul(this.discount))));
				}
				break;
			default:
				sum += 0;
				break;
		}
	}

	return sum;
};

PizzaOrder.prototype.GetMargheritaPrice = function () {
	return Decimal(10.90).sub((Decimal(10.90).mul(this.discount)));
}

PizzaOrder.prototype.Save = function () {
	var result = "<pizzaOrder>";

	for (var i = 0; i < this.pizzaTypes.length; i++) {
		var pizzaType = this.pizzaTypes[i];

		switch (pizzaType) {
			case "margherita":
				result += "<pizza><description>Best margherita in town</description><price>" +
					this.GetMargheritaPrice() + "</price></pizza>";
				break;
			case "customerSpecial":
				var sum = Decimal(0);
				for (prop in this.ingr) {
					sum = sum.add(Decimal(this.ingr[prop]).sub((Decimal(this.ingr[prop]).mul(this.discount))));
				}
				result += "<pizza><description>Customer special pizza with " + Object.keys(this.ingr).join(",") +
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
