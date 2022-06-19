let header = document.querySelector('header');
let socialMediaLinks = document.querySelectorAll('.social-media box-icon');

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