// БЛОК 1. setInterval() - запускает ф-ю через определенный промежуток времени.
// Принимает 2 аргумента. 1 - Callback, 2 - кол-во миллисекунд (1000мс = 1с).
// Минимальное/дефолтное 10мс
// function timer() {
//     document.write('Timer<br>');
// }

// setInterval(timer, 1000);

// короткая запись
// setInterval(() => document.write('Timer<br>'), 1000);

// БЛОК 2. Вызов/остановка таймера по кнопкам
// const startTimer = document.querySelector('#start');
// const stopTimer = document.querySelector('#stop');
// let i = 0;
// let timerId = null;
// startTimer.addEventListener('click', () => {
//     timerId = setInterval(() => console.log(++i), 200);
//     console.log('Timer №'+timerId);
// });

// stopTimer.addEventListener('click', () => {
//     while(timerId) clearInterval(timerId--); // удаление запущенного таска
// });

// БЛОК 3. setTimeOut() - выполняет ф-ю с отложенной задержкой
function callAlert() {
    setTimeout(() => alert('Я появлюсь через 3 секунды'), 3000);
}

// пример с рекурсией (аналог setInterval)
// (function timer() {
//     document.write('Timer<br>');
//     setTimeout(timer, 1000);
// })();

// Задача: создать электронные часы выводящие данные в формате HH:mm:ss

