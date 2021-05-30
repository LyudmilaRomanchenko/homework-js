/*========================= Задача-1 =============================*/
/* Задание
Дополни код так, чтобы в переменной result был результат выполнения функции makePizza, а в переменной pointer была ссылка на функцию makePizza. */

function makePizza() {
    return 'Ваша пицца готовится, ожидайте.';
  }
  // Пиши код ниже этой строки
  
  const result = makePizza();
  const pointer = makePizza;
  

/*========================= Задача-2 =============================*/
/* Колбэк-функции
Функция обратного вызова (callback, колбэк) - это функция, которая передаётся другой функции в качестве аргумента и та, в свою очередь, вызывает переданную функцию.

Функция высшего порядка(higher order function) - функция, принимающая в качестве параметров другие функции или возвращающая функцию как результат.

// Колбэк-функция
function greet(name) {
  consle.log(`Добро пожаловать ${name}.`);
}

// Функция высшего порядка
function registerGuest(name, callback) {
  console.log(`Регистрируем гостя ${name}.`);
  callback(name);
}

registerGuest('Манго', greet);
Мы передали ссылку на функцию greet как аргумент, поэтому она будет присвоена в параметр callback и вызвана внутри функции registerGuest через круглые скобки. Имя параметра для колбэка может быть произвольным, главное помнить, что значением будет функция.

Задание
Дополни функцию makeMessage так, чтобы она ожидала вторым параметром (параметр callback) колбэк-функцию и возвращала ее вызов. Функция deliverPizza или makePizza будет передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы. */

unction deliverPizza(pizzaName) {
    return `Доставляем пиццу ${pizzaName}.`;
  }
  
  function makePizza(pizzaName) {
    return `Пицца ${pizzaName} готовится, ожидайте...`;
  }
  
  // Пиши код ниже этой строки
  function makeMessage(pizzaName, callback) {
    return callback(pizzaName);
  }
  

/*========================= Задача-3 =============================*/
/* Инлайн-колбэки
Если колбэк-функция маленькая и нужна только для передачи аргументом, её можно объявить прямо при вызове функции в которую передаём колбэк. Такая функция будет доступна только как значение параметра и больше нигде в коде.

function registerGuest(name, callback) {
  console.log(`Регистрируем гостя ${name}.`);
  callback(name);
}

// Передаём инлайн функцию greet как колбэк
registerGuest('Манго', function greet(name) {
  consle.log(`Добро пожаловать ${name}.`);
});

// Передаём инлайн функцию notify как колбэк
registerGuest('Поли', function notify(name) {
  consle.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
});
Задание
Дополни второй вызов функции makePizza(pizzaName, callback), передав вторым аргументом инлайн колбэк-функцию eatPizza(pizzaName), которая логирует строку 'Едим пиццу <имя пиццы>'. */

function makePizza(pizzaName, callback) {
    console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
    callback(pizzaName);
  }
  
  makePizza('Роял гранд', function deliverPizza(pizzaName) {
    console.log(`Доставляем пиццу ${pizzaName}.`);
  });
  // Пиши код ниже этой строки
  
  makePizza('Ультрасыр', function eatPizza(pizzaName) {
      console.log(`Едим пиццу ${pizzaName}`);
  });
  

/*========================= Задача-4 =============================*/
/*  */

const pizzaPalace = {
    pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
    order(pizzaName, onSuccess, onError) {
        if (this.pizzas.includes(pizzaName)) {
          return onSuccess(pizzaName);
        
      }
      /*const errorMessage = `В ассортименте нет пиццы с названием ${pizzaName}`;*/
     else  return onError(`В ассортименте нет пиццы с названием ${pizzaName}`);
    },
  };
  // Пиши код выше этой строки
  
  // Колбэк для onSuccess
  function makePizza(pizzaName) {
    return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
  }
  
  // Колбэк для onError
  function onOrderError(error) {
    return `Ошибка! ${error}`;
  }
  
  // Вызовы метода с колбэками
  pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
  pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
  pizzaPalace.order('Биг майк', makePizza, onOrderError);
  pizzaPalace.order('Венская', makePizza, onOrderError);
  

/*========================= Задача-1 =============================*/
/*========================= Задача-1 =============================*/
/*========================= Задача-1 =============================*/
/*========================= Задача-1 =============================*/
/*========================= Задача-1 =============================*/
/*========================= Задача-1 =============================*/