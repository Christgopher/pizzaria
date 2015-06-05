describe('Pizza', function() {
  it('has the properties size and ingredients', function() {
    var testPizza = new Pizza("medium", ["sausauge", "mushrooms", "olives"]);
    expect(testPizza.size).to.equal("medium");
    expect(testPizza.ingredients).to.eql(["sausauge", "mushrooms", "olives"]);
  });

  it('can determine its own cost and return it', function() {
    var testPizza = new Pizza("medium", ["sausauge", "mushrooms", "olives"]);
    expect(testPizza.pizzaCost()).to.equal(12);
  });
});

describe("totalCost", function() {
  it("figures out the total cost of all of the pizzas", function() {
    var testPizza1 = new Pizza("medium", ["sausauge", "mushrooms", "olives"]);
    var testPizza2 = new Pizza("large", ["mushrooms", "peppers"]);
    var pizzas = [];
    pizzas.push(testPizza1, testPizza2);
    expect(totalCost(pizzas)).to.equal(26);
  });
});
