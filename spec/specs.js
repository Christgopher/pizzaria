describe('Pizza', function() {
  it('has the properties size and ingredients', function() {
    var testPizza = new Pizza("medium", ["sausauge", "mushrooms", "olives"]);
    expect(testPizza.size).to.equal("medium");
    expect(testPizza.ingredients).to.eql(["sausauge", "mushrooms", "olives"]);
  })

  it('can determine its own cost and return it', function() {
    var testPizza = new Pizza("medium", ["sausauge", "mushrooms", "olives"]);
    expect(testPizza.pizzaCost()).to.equal(12);
  })
})
