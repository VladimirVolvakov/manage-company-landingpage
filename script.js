const buttonMenu = document.getElementById('btn-menu');
const openedMenu = document.getElementById('menu');

buttonMenu.addEventListener('click', () => {
    buttonMenu.classList.toggle('open');
    openedMenu.classList.toggle('hidden');
});