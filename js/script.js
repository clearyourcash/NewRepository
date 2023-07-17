'use strict'

let titleH1 = document.getElementsByTagName('h1')[0];
console.log(titleH1);

let buttons = document.getElementsByClassName('handler_btn');
console.log (buttons)

let buttonPlus = document.querySelector('.screen-btn');
console.log(buttonPlus);

let otherItemsPercent = document.querySelectorAll('.percent');
let otherItemsNumber = document.querySelectorAll('.number');
console.log(otherItemsPercent);
console.log(otherItemsNumber);

let inputRange = document.querySelector('.rollback input[type=range]');
console.log(inputRange);

let spanGetting = document.querySelector('.rollback span'); 
console.log(spanGetting);

let inputs = document.getElementsByClassName('total-input');
//console.log(inputs);
let inputTotal = inputs[0];
//let inputTotal2 = document.getElementById('#total')
console.log(inputTotal); 
let inputTotalCount = inputs[1];
console.log(inputTotalCount); 
let inputTotalCountOther = inputs[2];
console.log(inputTotalCountOther); 
let inputTotalFullCount = inputs[3];
console.log(inputTotalFullCount); 
let inputTotalCountRollback = inputs[4];
console.log(inputTotalCountRollback); 

let allScreens = document.querySelectorAll('.screen');
console.log(allScreens);

const appData ={
regexp: /^(\d*\s?([A-Za-zА-Яа-я]+)\s?(\d*)\s?)*$/gmi,
title: '',
screens: [],
adaptive: true,
rollback: 20, 
fullPrice: 0,
servicePercentPrice: 0,
allServicePrices: 0,
services: {},
name0: '', 
name1: '',
price0: 0, 
price1: 0,
servicePrice1: 0,
servicePrice2: 0,
screenPrice: 0,
discountMessage: '',
asking: function(){
  do {
    appData.title = prompt ("Как называется ваш проект?")
  } while (!appData.checkInput(appData.title));

  for (let i = 0; i < 2; i++ ) {
//    let name = prompt ("Какие типы экранов нужно разработать?")
  do {
    name = prompt ("Какие типы экранов нужно разработать?")
  } while (!appData.checkInput(name));
    let price = 0

    do {
    price = prompt("Сколько будет стоить данная работа?");
   // } while (!appData.isANumber(price) && price > 0);
   } while (!appData.isANumber(price));

    appData.screens.push({ id: i, name: name, price: price })
  }

  for (let i = 0; i < 2; i++ ){
//    let name = prompt ("Какой дополнительный тип услуги нужен?")
  do {
    name = prompt ("Какой дополнительный тип услуги нужен?")
  } while (!appData.checkInput(name));
    let price = 0; 
    do {
      price = prompt ("Сколько это будет стоить?")
    } while (!appData.isANumber(price))

   appData.services[name] = +price

   if (i === 0){
    appData.name0 = name
    appData.price0 = price

   } else if (i === 1) {
    appData.name1 = name
    appData.price1 = price
   }

  }

  appData.adaptive = confirm ("Нужен ли адаптив на сайте?")
},

isANumber: function(num){
  return !isNaN(parseFloat(num)) && isFinite(num)
}, 

checkInput: function(inputValue){
return isNaN(inputValue) && inputValue.match(appData.regexp)
},

addPrices: function(){
  for (let screen of appData.screens){
  appData.screenPrice += +screen.price
  }
  for (let key in appData.services){
  appData.allServicePrices += appData.services[key]
}
},
getFullPrice: function() {
    appData.fullPrice = appData.screenPrice + appData.allServicePrices;
}, 
getServicePercentPrices: function(){
    appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback/100))
},
getTitle: function(){
  appData.title = appData.title.trim().substring(0,1).toUpperCase() + appData.title.trim().substring(1).toLowerCase()
},
getRollbackMessage: function(){
if (appData.fullPrice > 30000) {
 return "Даем скидку в 10%"
} 
else if ((appData.fullPrice > 15000) && (appData.fullPrice <= 30000)) {
  return "Даем скидку в 5%"
} 
else if ((appData.fullPrice > 0) && (appData.fullPrice <= 15000)) {
  return "Скидка не предусмотрена"
} 
else {
 return "Упс, что-то пошло не так!"
}  
},
start: function(){
  appData.asking()
  appData.addPrices()
  appData.getFullPrice()
  appData.getTitle()
  appData.getServicePercentPrices()
  appData.getRollbackMessage()
  appData.logger();
},
logger: function(){
  console.log(appData.title),
  console.log(appData.fullPrice),
  console.log(appData.allServicePrices),
  console.log(appData.servicePercentPrice),
 // console.log(appData.getRollbackMessage);
  console.log(appData.screens)
  console.log(appData.services)
  
/*  for (let key in appData){
  console.log("Ключ:" + key + " " + "Значение: " + appData[key]);
}
*/
}
}

appData.start();