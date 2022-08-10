let header = document.querySelector('header');
let socialMediaLinks = document.querySelectorAll('.social-media box-icon');
let toggle = document.querySelector('.toggle');
let links = document.querySelector('header .links');
let bar = document.getElementById("bar");

toggle.addEventListener('click', () => {
    links.classList.toggle('active');
});

window.onscroll = function () {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    bar.style.width = scrolled + "%";
    if (scrollY >= 100) {
        header.classList.add('active');
        socialMediaLinks.forEach(link => {
            link.setAttribute('color', '#fff');
        });
    } else {
        header.classList.remove('active');
        socialMediaLinks.forEach(link => {
            link.setAttribute('color', '#6dae65');
        });
    }
};

const sr = ScrollReveal({origin: 'top', duration: 2500, distance: '60px', delay: 150});

sr.reveal('.home .container');
sr.reveal('.about .container');
sr.reveal('.skills .container');
sr.reveal('.services .container');
sr.reveal('.front-end-projects .container .card');
sr.reveal('.contact .container');