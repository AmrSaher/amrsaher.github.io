let header = document.querySelector('header');
let socialMediaLinks = document.querySelectorAll('.social-media box-icon');
let toggle = document.querySelector('.toggle');
let links = document.querySelector('header .links')

toggle.addEventListener('click', () => {
    links.classList.toggle('active');
});

window.onscroll = function () { 
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