// Modal functionality
const loginModal = document.getElementById("loginModal");
const registerModal = document.getElementById("registerModal");
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const switchToRegister = document.getElementById("switchToRegister");
const switchToLogin = document.getElementById("switchToLogin");
const closeButtons = document.getElementsByClassName("close");
const ctaButton = document.querySelector('.cta-button');

// Обработчик для кнопки "Начать бесплатно"
if (ctaButton) {
    ctaButton.addEventListener('click', function(e) {
        e.preventDefault();
        registerModal.style.display = "block";  // Открываем окно регистрации
    });
}

// Переключение между модальными окнами
if (switchToRegister) {
    switchToRegister.addEventListener('click', function(e) {
        e.preventDefault();
        loginModal.style.display = "none";
        registerModal.style.display = "block";
    });
}

if (switchToLogin) {
    switchToLogin.addEventListener('click', function(e) {
        e.preventDefault();
        registerModal.style.display = "none";
        loginModal.style.display = "block";
    });
}

// Закрытие модальных окон
for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', function() {
        loginModal.style.display = "none";
        registerModal.style.display = "none";
    });
}

// Закрытие при клике вне модального окна
window.addEventListener('click', function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
    if (event.target == registerModal) {
        registerModal.style.display = "none";
    }
});
