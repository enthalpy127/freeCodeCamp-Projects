document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('#toggle');
    const navBar = document.querySelector('#nav-bar');

    toggle.addEventListener('click', () => {
        navBar.classList.toggle('active');
    });
})