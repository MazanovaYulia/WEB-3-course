//setTimeout
console.log('Привет, я лаба!');
setTimeout(() => console.log('лаба номер 10!'), 3000);
console.log('Лаба...');
//setInterval
setInterval(() => console.log('Лаба 10.'), 2000);

//использование пакета Date-fns
//возвращает последний день текущего месяца
const today = new Date();
const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
console.log(lastDay);



