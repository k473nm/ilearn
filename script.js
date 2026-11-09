// =========================
// 1. منوی همبرگری (موبایل)
// =========================
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    menuButton.classList.toggle('opened');
});


// =========================
// 2. تغییر تم (روشن/تیره) + ذخیره در حافظه
// =========================
const themeToggleBtn = document.querySelector('.theme-toggle');

function toggleTheme() {
    document.body.classList.toggle('light-theme');
    
    const isLight = document.body.classList.contains('light-theme');
    
    if (isLight) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
}

themeToggleBtn.addEventListener('click', toggleTheme);

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
}
