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
