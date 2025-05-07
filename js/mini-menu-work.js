const miniMenu = document.querySelector('.mini-menu');

const offScreenMenu = document.querySelector('.minimised');

miniMenu.addEventListener('click', () => {
    miniMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})