// --- کدهای منوی همبرگری (موبایل) ---
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    menuButton.classList.toggle('opened');
});

// --- کدهای تغییر تم (روشن/تیره) ---
const themeToggleBtn = document.querySelector('.theme-toggle');
// ... بقیه‌ی کد تم ...
