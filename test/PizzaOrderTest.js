const assert = require('assert');
const PizzaOrder = require('../PizzaOrder');


describe('PizzaOrder', function () {
  describe('CalculatePrice()', function () {
    it('should return price of one pizza margherita', function () {
      const sut = new PizzaOrder(["margherita"]);
      assert.equal(sut.CalculatePrice(0), 10.90);
    });

    it('should return price of no pizza', function () {
      const sut = new PizzaOrder([]);
      assert.equal(sut.CalculatePrice(0), 0);
    });

    it('should return price of two pizza margherita', function () {
      const sut = new PizzaOrder(["margherita", "margherita"]);
      assert.equal(sut.CalculatePrice(0), 21.80);
    });

    it('should return price of one pizza margherita with a discount', function () {
      const sut = new PizzaOrder(["margherita"]);
      assert.equal(sut.CalculatePrice(0.1), 9.81);
    });

    it('should return price of one customer special pizza', function () {
      var ingredients = {};
      ingredients["base"] = 11.90;
      ingredients["mushrooms"] = 1;
      ingredients["ham"] = 2;
      const sut = new PizzaOrder(["customerSpecial"],ingredients);
      assert.equal(sut.CalculatePrice(0), 14.90);
    });

    it('should return price of one customer special pizza with discount', function () {
      var ingredients = {};
      ingredients["base"] = 11.90;
      ingredients["mushrooms"] = 1;
      ingredients["ham"] = 2;
      const sut = new PizzaOrder(["customerSpecial"],ingredients);
      assert.equal(sut.CalculatePrice(0.1), 13.41);
    });
  });

  describe('GetGeneratedXml()', function () {
    it('should return xml of one pizza margaritha', function(){
      const sut = new PizzaOrder(["margherita"]);
      sut.CalculatePrice(0); // initialize the discount
      assert.equal(sut.GetGeneratedXml(), '<pizzaOrder><pizza><description>Best margherita in town</description><price>10.9</price></pizza></pizzaOrder>');
    });

    it('should return xml of no pizza', function () {
      const sut = new PizzaOrder([]);
      sut.CalculatePrice(0);
      assert.equal(sut.GetGeneratedXml(), '<pizzaOrder></pizzaOrder>');
    });
  });
});