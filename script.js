let title;
let screens;
let screenPrice;
let rollback; 
let fullPrice;
let adaptive; 
let howMuch; 
let howMuchDev; 

title = "Переменные";
screens = "Простые, Сложные, Интерактивные";
screenPrice = 10500;
rollback = 78; 
fullPrice = 15000;
adaptive = true; 

howMuch = "Стоимость верстки экранов";
roubles = "рублей";
const NewStr = howMuch + " " + screenPrice + " " + roubles; 

howMuchDev = "Стоимость разработки сайта";
const NewStrDev = howMuchDev + " " + fullPrice + " " + roubles; 

const percent = (fullPrice * (rollback/100)); 


alert("Hello, It's me!");
console.log("My name is Evgeniya!"); 

console.log(title);
console.log(fullPrice);
console.log(adaptive);
console.log(screens.length);
console.log(NewStr);
console.log(NewStrDev);
console.log(screens.toLocaleLowerCase());
console.log(screens.split("ы"));
console.log(percent);