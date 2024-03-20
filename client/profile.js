function verifyProfile() {

    //input fields
    var fullNameInput = document.getElementById('fullName');
    var address1Input = document.getElementById('address1');
    var cityInput = document.getElementById('city');
    var statesInput = document.getElementById('states');
    var zipcodeInput = document.getElementById('zipcode');

    var isValid = true;

    if (fullNameInput.value.trim() === '') {
        fullNameInput.classList.add('invalid-input');
        isValid = false;
    } else {
        fullNameInput.classList.remove('invalid-input');
    }

    if (address1Input.value.trim() === '') {
        address1Input.classList.add('invalid-input');
        isValid = false;
    } else {
        address1Input.classList.remove('invalid-input');
    }

    if (cityInput.value.trim() === '') {
        cityInput.classList.add('invalid-input');
        isValid = false;
    } else {
        cityInput.classList.remove('invalid-input');
    }

    if (statesInput.value.trim() === '') {
        statesInput.classList.add('invalid-input');
        isValid = false;
    } else {
        statesInput.classList.remove('invalid-input');
    }

    if (zipcodeInput.value.trim() === '' || !isValidZipcode(zipcodeInput.value.trim())) {
        zipcodeInput.classList.add('invalid-input');
        isValid = false;
    } else {
        zipcodeInput.classList.remove('invalid-input');
    }

    if (isValid) {
        window.location.href = 'account.html';
        return isValid;
    }  else {
        alert('Please fill out all required fields with valid information.');
    }

    var statesInput = document.getElementById('states');
}

function isValidZipcode(zipcode) {
    //5 digits or 5 digits followed by a hyphen and 4 digits
    var regex = /^\d{5}(?:-\d{4})?$/;
    return regex.test(zipcode);
}

module.exports = {
    verifyProfile: verifyProfile,
    isValidZipcode: isValidZipcode
};
