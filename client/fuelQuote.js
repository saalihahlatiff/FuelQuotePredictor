function calculateTotal() {
    var addressInput = document.getElementById('deliveryAddress');
    var totalInput = document.getElementById('totalAmountDue');
    var suggestedInput = document.getElementById('suggestedPrice');
    var gallonsInput = document.getElementById('gallonsRequested');
    var deliveryDateInput = document.getElementById('deliveryDate');


    var gallons = gallonsInput.value;
    var address = addressInput.value;
    var deliveryDate = deliveryDateInput.value;
    var suggested = suggestedInput.value;
    var total = totalInput.value;


    if (gallons.trim() === '') {
        alert('Please specificy a gallon amount.');
        gallonsInput.classList.add('invalid-input');
        return;
    } else {
        gallonsInput.classList.remove('invalid-input');
    }

    if (address.trim() === '') {
        alert('Address cannot be blank.');
        addressInput.classList.add('invalid-input');
        return;
    } else {
        addressInput.classList.remove('invalid-input');
    }

    if (deliveryDate.trim() === '') {
        alert('Please specify a delivery date');
        deliveryDateInput.classList.add('invalid-input');
        return;
    } else {
        deliveryDateInput.classList.remove('invalid-input');
    }

    if (suggested.trim() === '') {
        alert('Suggested cannot be blank.');
        suggestedInput.classList.add('invalid-input');
        return;
    } else {
        suggestedInput.classList.remove('invalid-input');
    }

    if (total.trim() === '') {
        alert('Total cannot be blank.');
        totalInput.classList.add('invalid-input');
        return;
    } else {
        totalInput.classList.remove('invalid-input');
    }

    window.location.href = '../index.html';
    return true;
}

module.exports = calculateTotal;
