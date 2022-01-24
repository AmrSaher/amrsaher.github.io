const header = document.querySelector('.header');
const nav = document.querySelector('.header .links');
const hl = document.querySelectorAll('.header .links a');
const body = document.body;
const toggleThemeBtn = document.querySelector('#toggle-theme');
let theme = window.localStorage.getItem('theme');
setTheme(theme);

for (let i = 0; i < hl.length; i++) {
    let link = hl[i];
    link.onclick = hideLinks;
}

function showLinks() {
    nav.style.right = '0';
}

function hideLinks() {
    nav.style.right = '-110%';
}

function toggleTheme() {
    let className = body.className === 'dark' ? 'light' : 'dark';
    setTheme(className);
    window.localStorage.setItem('theme', className);
}

function setTheme(th) {
    body.className = th;
    if (th === 'light') {
        toggleThemeBtn.className = 'fas fa-toggle-off';
    } else if (th === 'dark') {
        toggleThemeBtn.className = 'fas fa-toggle-on';
    }
}

window.onscroll = function () { 
    scrollY >= 100 ? header.style.backgroundColor = '#00000023' : header.style.background = 'none';
};