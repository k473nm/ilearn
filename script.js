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

// --- تمرین: تغییر متن دکمه با کلیک ---
const ctaButton = document.querySelector('.nav-cta');

ctaButton.addEventListener('click', () => {
    // متن دکمه رو به «خوش آمدی!» تغییر بده
    ctaButton.innerHTML = "خوش آمدی! ✨";
});

// --- تمرین: تغییر موقت رنگ پس‌زمینه ---
const bodyElement = document.body;

ctaButton.addEventListener('click', () => {
    // رنگ پس‌زمینه رو به یه آبی تیره‌ی متفاوت تغییر بده
    bodyElement.style.backgroundColor = "#0a1a2a";
    
    // بعد از ۱ ثانیه (۱۰۰۰ میلی‌ثانیه)، رنگ رو به حالت اولش برگردون
    setTimeout(() => {
        bodyElement.style.backgroundColor = ""; // "" یعنی رنگ پیش‌فرض CSS رو بگیر
    }, 1000);
});
