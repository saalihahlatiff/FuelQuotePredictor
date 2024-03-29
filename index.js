window.onload = function () {
    var container = document.querySelector('.gif-container');
    var currentX = -100;
    var endX = window.innerWidth + 100;

    function animate() {
        currentX += 5;
        container.style.left = currentX + 'px';

        if (currentX < endX) {
            requestAnimationFrame(animate);
        }
    }
    animate();
};

document.addEventListener("DOMContentLoaded", function () {
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');

    usernameInput.addEventListener('input', validateUsername);
    passwordInput.addEventListener('input', validatePassword);

    function validateUsername() {
        if (this.value.trim() === '') {
            this.classList.add('invalid-input');
        } else {
            this.classList.remove('invalid-input');
        }
    }

    function validatePassword() {
        if (this.value.trim() === '') {
            this.classList.add('invalid-input');
        } else {
            this.classList.remove('invalid-input');
        }
    }
});

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username.trim() === '') {
        alert('Username cannot be blank.');
        document.getElementById('username').classList.add('invalid-input');
        return;
    }

    if (password.trim() === '') {
        alert('Password cannot be blank.');
        document.getElementById('password').classList.add('invalid-input');
        return;
    }

    window.location.href = 'client/profile.html';
}

// will be completed on final assignment
class PricingModule {
    constructor() {}

    calculateQuotePrice(clientProfile, fuelQuote) {}

    getCurrentMarketRate() {}
}


