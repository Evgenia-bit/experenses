'use strict';
let money = prompt ("Ваш бюджет на месяц?", "");
let time = prompt ("Введите дату в формате YYYY-MM-DD", "");
let mainExperenses = prompt ("Введите обязательную статью расходов в этом месяце", "");
let itogExperenses = prompt ("Во сколько обойдется?", "");
let  appData = {
    budget : money,
    timeData : time,
    expenses : {
        mainExperenses: itogExperenses
    }, 
    optionalExpenses: "",
    income : "",
    savings : false
 };
 alert (money / 30);

