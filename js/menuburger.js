
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');


    burger.addEventListener('click', () => {  
    menu.classList.toggle('open');
    burger.classList.toggle('active');
});


document.addEventListener('click', (event) => {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnBurger = burger.contains(event.target);

    if (!isClickInsideMenu && !isClickOnBurger) {
        menu.classList.remove('open');
        burger.classList.remove('active');
    }
});