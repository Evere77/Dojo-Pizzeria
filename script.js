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


var crustTypes = [
  'deep dish',
  'hand tossed',
  'think and crispy',
  'cauliflower',
  'gluten free',
  'hawaiian bread'
];

var sauceTypes = [
  'traditional',
  'marinara',
  'bbq',
  'white sauce'
];

var cheeses = [
  'mozzarella cheese',
  'cheddar cheese',
  'feta cheese',
  'swiss cheese',
  'goat cheese',
  'parmesan'
];

var toppings = [
  'pepperoni',
  'sausage',
  'olives',
  'bell peppers',
  'onions',
  'mushrooms',
  'bacon'
];

function randomRange(max, min) {
  return Math.floor(Math.random() * max - min) + min;
}

function randomPick(arr) {
  var i = Math.floor(arr.length * Math.random());
  return arr[i];
}

function randomPizza() {
  var pizza = {};
  pizza.crustType = randomPick(crustTypes);
  pizza.sauceType = randomPick(sauceTypes);
  pizza.cheeses = [];
  pizza.toppings = [];
  for(var i = 0; i<randomRange(5,1); i++) {
    pizza.cheeses.push(randomPick(cheeses));
  }
  for(var i = 0; i<randomRange(4,0); i++) {
    pizza.toppings.push(randomPick(toppings));
  }
  return pizza;
}

console.log(randomPizza());