'use strict'

const appData ={
title: '',
screens: '',
adaptive: true,
rollback: 20, 
fullPrice: 0,
servicePercentPrice: 0,
allServicePrices: 0,
service1: '',
service2: '',
servicePrice1: 0,
servicePrice2: 0,
screenPrice: 0,
discountMessage: '',
asking: function(){
  appData.title = prompt ("Как называется ваш проект?", "Калькулятор верстки")
  appData.screens = prompt ("Какие типы экранов нужно разработать?", "Простые и сложные")

  do {
    appData.screenPrice = +prompt("Сколько будет стоить данная работа?");
    }
  while (!bigObject.isANumber(appData.screenPrice) && appData.screenPrice>0)
  
  appData.adaptive = confirm ("Нужен ли адаптив на сайте?")
}
}

const bigObject = {
isANumber: function(num){
  return !isNaN(parseFloat(num)) && isFinite(num)
}, 
getAllServicePrices: function(){
  appData.allServicePrices = 0
  for (let i = 0; i < 2; i++){
    if (i === 0) {
      appData.service1 = prompt ("Какой дополнительный тип услуги нужен?"); 
      appData.servicePrice1 = +prompt ("Сколько это будет стоить?") 
      while (!bigObject.isANumber(appData.servicePrice1)) {
        appData.servicePrice1 = +prompt ("Сколько это будет стоить?")
      }
      } else if (i ===1) {
      appData.service2 = prompt ("Какой дополнительный тип услуги нужен?");
      appData.servicePrice2 = +prompt ("Сколько это будет стоить?")
      while (!bigObject.isANumber(appData.servicePrice2)) {
        appData.servicePrice2 = +prompt ("Сколько это будет стоить?")

      }
    }
     appData.allServicePrices = appData.servicePrice1 + appData.servicePrice2
   }
return appData.allServicePrices
},
getFullPrice: function() {
    return appData.screenPrice + appData.allServicePrices;
}, 
getServicePercentPrices: function(){
    return appData.fullPrice - (appData.fullPrice * (appData.rollback/100))
},
getTitle: function(){
  return appData.title.trim().substring(0,1).toUpperCase() + appData.title.trim().substring(1).toLowerCase()
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
  appData.allServicePrices = bigObject.getAllServicePrices(appData.servicePrice1,appData.servicePrice2)
  appData.fullPrice = bigObject.getFullPrice()
  appData.title = bigObject.getTitle()
  appData.servicePercentPrice = bigObject.getServicePercentPrices()
  appData.discountMessage = bigObject.getRollbackMessage()
  bigObject.logger();
},
logger: function(){
  console.log(appData.title),
  console.log(appData.fullPrice),
  console.log(appData.allServicePrices),
  console.log(appData.servicePercentPrice),
  console.log(appData.discountMessage);
  for (let key in appData){
  console.log("Ключ:" + key + " " + "Значение: " + appData[key]);
}
}
}
bigObject.start();