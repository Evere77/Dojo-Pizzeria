function pizzaOven(crustType, sauceType, cheese, toppings) {
  var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType =  sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven('deep dish', 'traditional', ['mozzarella'], ['pepperoni', 'sausage']);
console.log(pizza1);

var pizza2 = pizzaOven('hand tossed', 'marinara', ['mozzarella', 'feta'], ['mushrooms', 'olives', 'onions']);
console.log(pizza2);

var pizza3 = pizzaOven('deep dish','marinara', ['mozzarella'], ['pepperoni', 'green pepper', 'onions']);
console.log(pizza3);

var pizza4 = pizzaOven('deep dish', 'marinara', ['mozzarella'], ['pepperoni', 'sausage', 'bacon','green pepper', 'onions']);
console.log(pizza4);