function Pizza(size, ingredients) {
  this.size = size;
  this.ingredients = ingredients;
}

Pizza.prototype.pizzaCost = function() {
  var cost = 6;
  if (this.size === "medium") {
    cost += 3;
  } else if (this.size === "large") {
    cost += 6;
  }

  return (cost + this.ingredients.length);
}

function totalCost(pizzas) {
  var cost = 0;
  pizzas.forEach(function(pizza) {
    cost += pizza.pizzaCost();
  })
  return cost;
}

$(document).ready(function() {
  pizzas = []
  $("#add-pizza").click(function() {
    $("#new-pizzas").append('<div class="new-pizza">' +
                              '<div class="form-group">' +
                              '<label for="new-size">Size:</label>' +
                              '<select class="form-control new-size" name="size" required>' +
                                '<option selected disabled hidden value="">Please choose</option>' +
                                '<option value="small">Small</option>' +
                                '<option value="medium">Medium</option>' +
                                '<option value="large">Large</option>' +

                              '</select>' +
                            '</div>' +

                            '<div class="form-group">' +
                              '<label for="new-toppings">Toppings:</label>' +
                              '<select multiple class="form-control new-toppings" name="toppings[]" size=5 required>' +
                                '<option value="pepperoni">Pepperoni</option>' +
                                '<option value="sausauge">Sausauge</option>' +
                                '<option value="olives">Olives</option>' +
                                '<option value="onions">Onions</option>' +
                                '<option value="mushrooms">Mushrooms</option>' +
                                '</select>' +
                              '</div>' +
                            '</div>');
  });

  $("form#new-pizza").submit(function(event) {
    event.preventDefault();
    $("#pre-order").show();

    $("ul#pizzas").empty();
    $(".new-pizza").each(function() {
      var inputtedToppings = $(this).find(".new-toppings").val();

      var inputtedSize = $(this).find(".new-size").val();
      var newPizza = new Pizza(inputtedSize, inputtedToppings);
      pizzas.push(newPizza)
    });

    pizzas.forEach(function(pizza) {
      $("ul#pizzas").append("<li>" + "A " + pizza.size + " pizza with " + pizza.ingredients.join(", ") + "." + "</li>");

    });

  });

  $("button#checkout-button").click(function() {
    $("#order").fadeOut();
    $("#total").text(totalCost(pizzas));
    $("#checkout").delay(750).fadeIn();

  })




});
