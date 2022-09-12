let header = document.querySelector('header');
let socialMediaLinks = document.querySelectorAll('.social-media box-icon');
let toggle = document.querySelector('.toggle');
let linksC = document.querySelector('header .links');
let bar = document.getElementById("bar");

toggle.addEventListener('click', (e) => {
    linksC.classList.toggle('active');
});

window.onscroll = () => {
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

// Home
sr.reveal('.home .container');

// About
sr.reveal('.about .container .section_title');
sr.reveal('.about .container .content .hero-img', {origin: 'left', delay: 300});
sr.reveal('.about .container .content .text', {origin: 'right', delay: 300});

// Skills
sr.reveal('.skills .container .section_title');
sr.reveal('.skills .container .content .text', {origin: 'bottom', delay: 300});
sr.reveal('.skills .container .content ul', {origin: 'right', delay: 300});

// Services
sr.reveal('.services .container .section_title');
sr.reveal('.services .container .content .cards .card-1', {origin: 'left', delay: 300});
sr.reveal('.services .container .content .cards .card-2', {origin: 'bottom', delay: 300});
sr.reveal('.services .container .content .cards .card-3', {origin: 'right', delay: 300});

// Projects
sr.reveal('.front-end-projects .container .section_title');
sr.reveal('.front-end-projects .container .content', {rotate: {x: 50, z: 20}, delay: 300});

// Contact
sr.reveal('.contact .container .section_title');
sr.reveal('.contact .container form .name', {origin: 'left', delay: 250});
sr.reveal('.contact .container form .email', {origin: 'right', delay: 300});
sr.reveal('.contact .container form .message', {origin: 'left', delay: 350});
sr.reveal('.contact .container form .btn', {origin: 'bottom', delay: 450});