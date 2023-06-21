'use strict' 
let title;
let screens;
let adaptive; 
const rollback = 20; 
let fullPrice;
let servicePercentPrice;
let allServicePrices;
let service1;
let service2;
let servicePrice1;
let servicePrice2;
let screenPrice;

const isANumber = function(num){
  return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function(){
  title = prompt ("Как называется ваш проект?")
  screens = prompt ("Какие типы экранов нужно разработать?")

  do {
    screenPrice = +prompt("Сколько будет стоить данная работа?");
    }
  while (!isANumber(screenPrice) && screenPrice>0)
  
/*  Вариант из урока
  screenPrice = +prompt ("Сколько будет стоить данная работа?") 
  while (!isANumber(screenPrice)){
    screenPrice = +prompt ("Сколько будет стоить данная работа?")
  }
  */

  adaptive = confirm ("Нужен ли адаптив на сайте?")
}

const getAllServicePrices = function(){
  allServicePrices = 0
  for (let i = 0; i < 2; i++){
    if (i === 0) {
      service1 = prompt ("Какой дополнительный тип услуги нужен?"); 
      servicePrice1 = +prompt ("Сколько это будет стоить?") 
      while (!isANumber(servicePrice1)) {
        servicePrice1 = +prompt ("Сколько это будет стоить?")
      }
      } else if (i ===1) {
      service2 = prompt ("Какой дополнительный тип услуги нужен?");
      servicePrice2 = +prompt ("Сколько это будет стоить?")
      while (!isANumber(servicePrice2)) {
        servicePrice2 = +prompt ("Сколько это будет стоить?")

      }
    }
     allServicePrices = servicePrice1+servicePrice2
   }
return allServicePrices
}

const getFullPrice = function() {
  return screenPrice + allServicePrices
}

const getServicePercentPrices = function(){
 return fullPrice - (fullPrice * (rollback/100))
}

function getTitle() {
  return title.trim().substring(0,1).toUpperCase() + title.trim().substring(1).toLowerCase()
}

const getRollbackMessage = function (price) {
if (price > 30000) {
 return "Даем скидку в 10%"
} 
else if ((price > 15000) && (price <= 30000)) {
  return "Даем скидку в 5%"
} 
else if ((price > 0) && (price <= 15000)) {
  return "Скидка не предусмотрена"
} 
else {
 return "Упс, что-то пошло не так!"
}  
}

const showTypeOf = function(variable){
  console.log(variable, typeof variable)
}

asking();
allServicePrices = getAllServicePrices(servicePrice1,servicePrice2)
fullPrice = getFullPrice()
title = getTitle();
servicePercentPrice = getServicePercentPrices()

/*do {
  screenPrice = parseInt(prompt("Сколько будет стоить данная работа?"));
  break
}
while (screenPrice > 0)
*/
showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);
showTypeOf(fullPrice);
showTypeOf(servicePrice1);
showTypeOf(servicePrice2);
showTypeOf(allServicePrices);

console.log(screens); 
console.log(service1); 
console.log("Стоимость доп. услуги-1 составляет " + servicePrice1 + " рублей");
console.log(service2); 
console.log("Стоимость доп. услуги-2 составляет " + servicePrice2 + " рублей");
console.log("Стоимость всех доп. услуг составляет " + allServicePrices + " рублей");
console.log("Стоимость всей услуги составляет " + fullPrice + " рублей");
console.log("Стоимость с учетом вычета - " + servicePercentPrice + " рублей"); 
console.log(getRollbackMessage(fullPrice));