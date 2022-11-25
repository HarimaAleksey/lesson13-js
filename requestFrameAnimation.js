// requestAnimationFrame (rAF) - механизм, который предоставляет разработчику доступ
// к жизненному циклу фрейма, позволяя выполнять операции перед вычислением стилей 
// и формировнием макета (layout) браузером

// Преимущества использования:
// 1) Вызывается не чаще и не реже, чем браузер вычисляет макет
// 2) Вызывается перед формированием макета, т.е. в нужное время
// 3) Не исп. ресурсы на перерисовку при уходе со страницы

// Конечная суть rAF - позволяет синхронизировать запуск коллбэка с рендерингом страницы

const div = document.querySelector('div');
let id = null;
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
div.style.width = div.clientWidth + 'px'; // 5px

function repeat() {
    div.style.width = (parseFloat(div.style.width) + 0.2) + 'px';
    id = requestAnimationFrame(repeat);
}

start.addEventListener('click', () => {
    requestAnimationFrame(repeat);
});

stop.addEventListener('click', () => {
    while(id) cancelAnimationFrame(id--); // остановка анимации
});