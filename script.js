'use strict' 
let title = prompt ("Как называется ваш проект?");
let screens = prompt ("Какие типы экранов нужно разработать?");
let screenPrice = +prompt ("Сколько будет стоить данная работа?");
let adaptive = confirm ("Нужен ли адаптив на сайте?"); 

const rollback = 20; 
let fullPrice;
let servicePercentPrice;

let service1 = prompt ("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt ("Сколько это будет стоить?");
let service2 = prompt ("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt ("Сколько это будет стоить?");
let allServicePrices;

const getAllServicePrices = function(servicePrice1,servicePrice2){
    return servicePrice1 + servicePrice2
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

allServicePrices = getAllServicePrices(servicePrice1,servicePrice2)
fullPrice = getFullPrice()
title = getTitle();
servicePercentPrice = getServicePercentPrices()

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(screens); 
console.log(service1); 
console.log("Стоимость доп. услуги-1 составляет " + servicePrice1 + " рублей");
console.log(service2); 
console.log("Стоимость доп. услуги-2 составляет " + servicePrice2 + " рублей");
console.log("Стоимость всех доп. услуг составляет " + allServicePrices + " рублей");
console.log("Стоимость всей услуги составляет " + fullPrice + " рублей");
console.log("Стоимость с учетом вычета - " + servicePercentPrice + " рублей"); 
console.log(getRollbackMessage(fullPrice));
