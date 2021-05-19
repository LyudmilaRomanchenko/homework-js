/*============================ Задача-1 ===================================== */
/* Задание
Запиши условие в инструкции if так, чтобы функция работала правильно. */

function checkAge(age) {
  if (age >= 18) { // Change this line
    return "You are an adult";
  }

  return "You are a minor";
}

/*============================ Задача-2 ===================================== */
/* Задание
Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.

Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат»:

удали переменную message
удали else
код должен работать так же, как и до оптимизации */

/* function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line

  let message;

  if (password === ADMIN_PASSWORD) {
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  }

  return message;
  // Change code above this line
} */

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line



  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  } 

  return "Access denied, wrong password!";
  // Change code above this line
}

/*============================ Задача-3 ===================================== */
/* Задание
Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате. Она принимает два параметра, значения которых будут задаваться во время её вызова.

available - доступное количество товаров на складе
ordered - количество единиц товара в заказе
Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат». */
/* function checkStorage(available, ordered) {
  // Change code below this line
  let message;

  if (ordered === 0) {
    message = "Your order is empty!";
  } else if (ordered > available) {
    message = "Your order is too large, not enough goods in stock!";
  } else {
    message = "The order is accepted, our manager will contact you";
  }

  return message;
  // Change code above this line
} */

function checkStorage(available, ordered) {
  // Change code below this line


  if (ordered === 0) {
   return "Your order is empty!";
  } 
  if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  } 
  
    return "The order is accepted, our manager will contact you";
  
  // Change code above this line
}


/*============================ Задача-4 ===================================== */
/* Задание
Объяви переменную fruits и присвой ей массив фруктов - строк "apple", "plum", "pear" и "orange". */

// Change code below this line
const fruits = ["apple", "plum", "pear", "orange"];

/*============================ Задача-5 ===================================== */
/* Задание
Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных скобок.0 */

const fruits = ["apple", "plum", "pear", "orange"];

// Change code below this line
const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[3];

/*============================ Задача-6 ===================================== */
/* Задание
Переопредели значения элементов с индексами 1 и 3. Замени "plum" на "peach", а "orange" на "banana". */

const fruits = ["apple", "plum", "pear", "orange"];

// Write your code under this line
fruits[1] = "peach";
fruits[3] = "banana";

/*============================ Задача-7 ===================================== */
/* Задание
Объяви переменную fruitsArrayLength и присвой ей длину массива fruits используя свойство length. */

const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
const fruitsArrayLength = fruits.length;

/*============================ Задача-8 ===================================== */
/* Задание
Объяви две перемнные:

Имя переменной	Ожидаемое значение
lastElementIndex	Мндекс последнего элемента масcива fruits через длина_массива - 1
lastElement	Значение последнего элемента массива */

const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
const lastElementIndex = fruits.length-1;
const lastElement = fruits[lastElementIndex];


/*============================ Задача-9 ===================================== */
/* Задание
Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array. */

function getExtremeElements(array) {
  const firstElement = array[0];
  const lastElementIndex = array.length - 1;
  const lastElement = array[lastElementIndex];
  return [firstElement, lastElement]
}

/*============================ Задача-10 ===================================== */
/* Задание
Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала в переменной words результат разделения строки message по разделителю delimeter - массив строк. */

function splitMessage(message, delimeter) {
  let words;
  // Change code below this line
words = message.split(delimeter);
  // Change code above this line
  return words;
}


/*============================ Задача-11 ===================================== */
/* Задание
Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.

Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).

Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке. */

function calculateEngravingPrice(message, pricePerWord) {
   // Change code below this line


const mass = message.split(" ");
  const a = mass.length * pricePerWord;
  return a;
   // Change code above this line
}

/*============================ Задача-1 ===================================== */
/*============================ Задача-1 ===================================== */
/*============================ Задача-1 ===================================== */
/*============================ Задача-1 ===================================== */
/*============================ Задача-1 ===================================== */
/*============================ Задача-1 ===================================== */
/*============================ Задача-1 ===================================== */
/*============================ Задача-1 ===================================== */
/*============================ Задача-1 ===================================== */
/*============================ Задача-1 ===================================== */
/*============================ Задача-1 ===================================== */

/*============================ Задача-1 ===================================== */
/*============================ Задача-1 ===================================== */
/*============================ Задача-1 ===================================== */
/*============================ Задача-1 ===================================== */
/*============================ Задача-1 ===================================== */
/*============================ Задача-1 ===================================== */
/*============================ Задача-1 ===================================== */



