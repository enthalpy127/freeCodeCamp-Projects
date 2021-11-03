const btn = document.querySelector('#toggle-btn');
const nav = document.querySelector('#navbar');

btn.addEventListener('click', () => {
    nav.classList.toggle('active');
});