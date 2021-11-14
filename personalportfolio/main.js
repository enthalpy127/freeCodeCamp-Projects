const btn = document.querySelector('#toggle-btn');
const nav = document.querySelector('#navbar');
const navLinks = document.querySelectorAll('#navbar [data-link]');

function onOffScroll() {
    if(nav.classList.contains('active')) {
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted,
        // set this to the previous value
        window.onscroll = function() { window.scrollTo(scrollLeft, scrollTop) };
    } else {
        window.onscroll = function() {}
    }
}

btn.addEventListener('click', () => {
    nav.classList.toggle('active');
})

navLinks.forEach(item => {
    item.addEventListener('click', () => {
        console.log('Clicked', item);
        nav.classList.toggle('active');
    });
});

// scroll reveal effect 

// ScrollReveal().reveal('.up-bottom', {
//     distance: '300px',
//     origin: 'top',
//     opacity: null,
//     duration: 1200,
// });

// ScrollReveal().reveal('.left-right', {
//     distance: '200px',
//     origin: 'left',
//     opacity: null,
//     duration: 1000,
// });

// ScrollReveal().reveal('.right-left', {
//     distance: '600px',
//     origin: 'right',
//     opacity: null,
//     duration: 1500,
// });

// ScrollReveal().reveal('.bottom-up', {
//     distance: '50px',
//     origin: 'bottom',
//     opacity: null,
//     duration: 1000,
// });

// ScrollReveal().reveal('.who-container', {
//     distance: '100px',
//     origin: 'bottom',
//     opacity: 0,
//     duration: 1000,
// });