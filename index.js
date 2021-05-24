/* ======================== Задача-1 ========================== */
/* Задание
Присвой переменной apartment объект описывающий квартиру со следующими характеристиками:

imgUrl - фотография, значение "https://via.placeholder.com/640x480";
descr - описание, значение "Spacious apartment in the city center";
rating - рейтинг, значение 4;
price - цена, значение 2153;
tags - метаинформация, массив ["premium", "promoted", "top"]. */

const apartment =  {
imgUrl: "https://via.placeholder.com/640x480",
descr: "Spacious apartment in the city center",
rating: 4,
price: 2153,
tags: ["premium", "promoted", "top"],
};

/* ======================== Задача-2 ========================== */
/* Задание
Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце. Добавь ему следующие свойства:

name - имя владельца, значение "Henry";
phone - телефон, значение "982-126-1588";
email - почта, значение "henry.carter@aptmail.com". */

const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Spacious apartment in the city center',
  owner: {
name: "Henry",
phone: "982-126-1588",
email: "henry.carter@aptmail.com",
  },
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
  };

/* ======================== Задача-3 ========================== */
/* Задание
Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

aptRating - рейтинг;
aptDescr - описание;
aptPrice - цена;
aptTags - теги. */

const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Spacious apartment in the city centre',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
  };
  
  // Change code below this line
  const aptRating = apartment.rating;
  const aptDescr = apartment.descr;
  const aptPrice = apartment.price;
  const aptTags = apartment.tags;
  // Change code above this line

/* ======================== Задача-4 ========================== */
/* Задание
Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

ownerName - имя владельца;
ownerPhone - телефон владельца;
ownerEmail - почта владельца;
numberOfTags - количество элементов массива в свойстве tags;
firstTag - первый элемент массива в свойстве tags;
lastTag - последний элемент массива в свойстве tags. */

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city centre',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

// Change code below this line
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[2];
// Change code above this line

/* ======================== Задача-5 ========================== */
/* Задание
Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment используя синтаксис «квадратных скобок».

aptRating - рейтинг;
aptDescr - описание;
aptPrice - цена;
aptTags - теги. */

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city centre',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};

// Change code below this line
const aptRating = apartment['rating'];
const aptDescr = apartment['descr'];
const aptPrice = apartment['price'];
const aptTags = apartment['tags'];
// Change code above this line

/* ======================== Задача-6 ========================== */
/* Задание
Дополни код обновив значения свойств объекта apartment:

цену в свойстве price на 5000;
рейтинг квартиры в свойстве rating на 4.7;
имя владельца во вложенном свойстве name на "Henry Sibola";
массив тегов в свойстве tags добавив в конец строку "trusted". */

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city centre',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com'
  }
};
apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = "Henry Sibola";
apartment.tags.push("trusted");

// Change code below this line

/* ======================== Задача-7 ========================== */
/* Задание
Добавь объекту apartment несколько новых свойств:

area - площадь в квадратных метрах, число 60;
rooms - количество комнат, число 3;
location - местоположение квартиры, обьект со следующими вложенными свойствами;
country - страна, строка "Jamaica";
city - город, строка "Kingston". */

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city centre',
  rating: 4.7,
  price: 5000,
  tags: ['premium', 'promoted', 'top', 'trusted'],
  owner: {
    name: 'Henry Sibola',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com'
  }
};
apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
  country: "Jamaica",
  city: "Kingston",
}

// Change code below this line

/* ======================== Задача-8 ========================== */
/* Задание
Дополни код объявления объекта так, чтобы у него были свойства name, price, image и tags со значениями из переменных с аналогичными именами. Обязательно используй синтаксис коротких свойств. */

const name = 'Repair Droid';
const price = 2500;
const image = 'https://via.placeholder.com/640x480';
const tags = ['on sale', 'trending', 'best buy'];

const product = {
  // Change code below this line

  name,
    price,
  image,
  tags,


  // Change code above this line
};

/* ======================== Задача-9 ========================== */
/* Задание
Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства: email и password, имена которых хранятся в переменных emailInputName и passwordInputName.

Значением свойства email должна быть строка "henry.carter@aptmail.com", а значением свойства password - строка "jqueryismyjam". */

const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
  // Change code below this line
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam",
  
  
  // Change code above this line
};

/* ======================== Задача-10 ========================== */
/* Задание
Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств. */

const apartment = {
  descr: 'Spacious apartment in the city centre',
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line
for (const key in apartment) {
keys.push(key);
  values.push(apartment[key]);
}

/* ======================== Задача-11 ========================== */
/* Задание
Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство. */

const keys = [];
const values = [];
const advert = {
  service: 'apt',
};
const apartment = Object.create(advert);
apartment.descr = 'Spacious apartment in the city centre';
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
if (apartment.hasOwnProperty(key)) {
keys.push(key);
  values.push(apartment[key]);
}
  

  // Change code above this line
}


/* ======================== Задача-12 ========================== */
/* Задание
Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта. */

function countProps(object) {
  let propCount = 0;
  // Change code below this line
for (const key in object) {
	if (object.hasOwnProperty(key)) {
    	propCount += 1;
    }
}
  // Change code above this line
  return propCount;
}


/* ======================== Задача-13 ========================== */
/* Задание
Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств. */

const apartment = {
  descr: 'Spacious apartment in the city centre',
  rating: 4,
  price: 2153,
};

const values = [];
// Change code below this line
const keys = Object.keys(apartment);
for (const key of keys) {
	
  values.push(apartment[key]);
}


/* ======================== Задача-14 ========================== */
/* Задание
Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, цикл for...of. */

function countProps(object) {
  // Change code below this line
  let propCount = 0;
const keys = Object.keys(object);
  for (const key of keys) {
    
      propCount += 1;
    
  }

  return propCount;
  // Change code above this line
}


/* ======================== Задача-15 ========================== */
/* Задание
Запиши в переменную keys массив ключей собственных свойств объекта apartment, а в переменную values массив всех значений его свойств. Используй методы Object.keys() и Object.values(). */

const apartment = {
  descr: 'Spacious apartment in the city centre',
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys = Object.keys(apartment);
const values = Object.values(apartment);


/* ======================== Задача-16 ========================== */
/* Задание
Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты. */

function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
  const values = Object.values(salaries);
for (const value of values) {
	totalSalary += value;
}
  // Change code above this line
  return totalSalary;
}


/* ======================== Задача-17 ========================== */
/* Задание
Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors. */

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line
for (const color of colors) {
	hexColors.push(color['hex']);
  rgbColors.push(color['rgb']);
}

/* ======================== Задача-18 ========================== */
/* Задание
Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null. */

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
  for (const product of products) {
  	if (product.name === productName) {
    	return product.price;
    }
    
  }
  return null;
  
  // Change code above this line
}


/* ======================== Задача-1 ========================== */
/* ======================== Задача-1 ========================== */
/* ======================== Задача-1 ========================== */
/* ======================== Задача-1 ========================== */
/* ======================== Задача-1 ========================== */
/* ======================== Задача-1 ========================== */
/* ======================== Задача-1 ========================== */
/* ======================== Задача-1 ========================== */
/* ======================== Задача-1 ========================== */
/* ======================== Задача-1 ========================== */
/* ======================== Задача-1 ========================== */
/* ======================== Задача-1 ========================== */
/* ======================== Задача-1 ========================== */
/* ======================== Задача-1 ========================== */
/* ======================== Задача-1 ========================== */
/* ======================== Задача-1 ========================== */
/* ======================== Задача-1 ========================== */
/* ======================== Задача-1 ========================== */
/* ======================== Задача-1 ========================== */
/* ======================== Задача-1 ========================== */
/* ======================== Задача-1 ========================== */
/* ======================== Задача-1 ========================== */
/* ======================== Задача-1 ========================== */
/* ======================== Задача-1 ========================== */
/* ======================== Задача-1 ========================== */
/* ======================== Задача-1 ========================== */