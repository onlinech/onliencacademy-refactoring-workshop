const assert = require('assert');
const Pizza = require('../Pizza');

describe('Pizza', function () {
    describe('SummUpIngredientsPrices()', function () {
        it('should return price of the pizza', function () {
            var ingredients = {};
            ingredients["base"] = 11.90;
            ingredients["mushrooms"] = 1;
            ingredients["ham"] = 2;
            const sut = new Pizza(ingredients,0);
            assert.equal(sut.SummUpIngredientsPrices(), 14.90);
        });
    });
});