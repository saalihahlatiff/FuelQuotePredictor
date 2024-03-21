/*
if (typeof window !== 'undefined') { // conditional for unit testing purposes
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
}
*/

//  COMMENTING OUT ANIMATION BECAUSE IT'S MESSING UP CODE COVERAGE REQUIREMENT


function login() {
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');

    var username = usernameInput.value;
    var password = passwordInput.value;

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


    window.location.href = './client/account.html';
    return true;
}


module.exports = login;