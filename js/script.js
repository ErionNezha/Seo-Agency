let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

let themeBtn = document.querySelector('#theme-btn');

themeBtn.onclick = () =>{
    let isDark = themeBtn.classList.toggle('fa-sun');
    themeBtn.classList.toggle('fas', isDark);
    themeBtn.classList.toggle('far', !isDark);
    themeBtn.classList.toggle('fa-moon', !isDark);

    document.body.classList.toggle('active', isDark);
};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    let maxHeight = window.document.body.scrollHeight - window.innerHeight;
    let percentage = ((window.scrollY) / maxHeight) * 100;
    document.querySelector('.header .scroll-indicator').style.width = percentage + '%';
};