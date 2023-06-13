'use strict;'
let title = "Переменные";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 10500;
let rollback = 78; 
let fullPrice = 15000;
let adaptive = true; 

let howMuch = "Стоимость верстки экранов";
let roubles = "рублей";
const NewStr = howMuch + " " + screenPrice + " " + roubles; 

let howMuchDev = "Стоимость разработки сайта";
const NewStrDev = howMuchDev + " " + fullPrice + " " + roubles; 

const percent = (fullPrice * (rollback/100)); 


alert("Hello, It's me!");
console.log("My name is Evgeniya!"); 

//console.log(title);
console.log(fullPrice);
console.log(adaptive);
console.log(screens.length);
console.log(NewStr);
console.log(NewStrDev);
console.log(screens.toLocaleLowerCase());
console.log(screens.split("ы"));
console.log(percent);

let title2 = prompt ("Как называется ваш проект?");
title = title2; 
console.log(title); 


let screens2 = prompt ("Какие типы экранов нужно разработать?");
screens = screens2;
console.log(screens);


let screenPrice2 = prompt ("Сколько будет стоить данная работа?");
screenPrice = screenPrice2; 
console.log (screenPrice);


let adaptive2 = confirm ("Нужен ли адаптив на сайте?"); 
if (adaptive2 == true) {
  console.log ("Да")
} else {
  console.log ("Нет")
}
adaptive=adaptive2; 

let service1 = prompt ("Какой дополнительный тип услуги нужен?");
console.log(service1); 
let servicePrice1 = prompt ("Сколько это будет стоить?");
console.log(servicePrice1);
let service2 = prompt ("Какой дополнительный тип услуги нужен?");
console.log(service2); 
let servicePrice2 = prompt ("Сколько это будет стоить?");
console.log(servicePrice2);

let fullPrice2 = parseInt(screenPrice) + parseInt(servicePrice1) + parseInt(servicePrice2); 
fullPrice = fullPrice2; 
console.log(fullPrice); 