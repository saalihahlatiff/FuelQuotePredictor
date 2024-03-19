function register(window) {
    var usernameInput = document.getElementById('regUsername');
    var passwordInput = document.getElementById('regPassword');

    var username = usernameInput.value;
    var password = passwordInput.value;

    if (username.trim() === '') {
        window.alert('Username cannot be blank.');
        usernameInput.classList.add('invalid-input');
        return;
    }
    else {
        usernameInput.classList.remove('invalid-input');
    }

    if (password.length < 8) {
        window.alert('Password must be at least 8 characters long.');
        passwordInput.classList.add('invalid-input');
        return;
    }
    else {
        passwordInput.classList.remove('invalid-input');
    }

    window.location.href = '../index.html';
}

module.exports = register;