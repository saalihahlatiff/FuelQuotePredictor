const jsdom = require('jsdom');
const { JSDOM } = jsdom;

// Mock the alert function
global.alert = jest.fn();

// Mock the calculateTotal function
const calculateTotal = require('../client/fuelQuote'); // adjust the path to your file

describe('calculateTotal', () => {
    beforeEach(() => {
        const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`, { url: "http://localhost/index.html" });
        global.window = dom.window;
        global.document = window.document;

        document.body.innerHTML = `
            <input id="deliveryAddress" />
            <input id="totalAmountDue" />
            <input id="suggestedPrice" />
            <input id="gallonsRequested" />
            <input id="deliveryDate" />
        `;
    });

    it('should alert and add invalid-input class when gallons is empty', () => {
        calculateTotal();
        expect(alert).toHaveBeenCalledWith('Please specificy a gallon amount.');
        expect(document.getElementById('gallonsRequested').classList.contains('invalid-input')).toBe(true);
    });

    it('should alert and add invalid-input class when address is empty', () => {
        document.getElementById('gallonsRequested').value = '10';
        calculateTotal();
        expect(alert).toHaveBeenCalledWith('Address cannot be blank.');
        expect(document.getElementById('deliveryAddress').classList.contains('invalid-input')).toBe(true);
    });

    it('should alert and add invalid-input class when deliveryDate is empty', () => {
        document.getElementById('gallonsRequested').value = '10';
        document.getElementById('deliveryAddress').value = '123 Main St';
        calculateTotal();
        expect(alert).toHaveBeenCalledWith('Please specify a delivery date');
        expect(document.getElementById('deliveryDate').classList.contains('invalid-input')).toBe(true);
    });


    /*
    it('should alert and add invalid-input class when suggested is empty', () => {
        document.getElementById('gallonsRequested').value = '10';
        document.getElementById('deliveryAddress').value = '123 Main St';
        document.getElementById('deliveryDate').value = '2024-03-20';
        calculateTotal();
        expect(alert).toHaveBeenCalledWith('Suggested cannot be blank.');
        expect(document.getElementById('suggestedPrice').classList.contains('invalid-input')).toBe(true);
    });

    it('should alert and add invalid-input class when total is empty', () => {
        document.getElementById('gallonsRequested').value = '10';
        document.getElementById('deliveryAddress').value = '123 Main St';
        document.getElementById('deliveryDate').value = '2024-03-20';
        document.getElementById('suggestedPrice').value = '2.5';
        calculateTotal();
        expect(alert).toHaveBeenCalledWith('Total cannot be blank.');
        expect(document.getElementById('totalAmountDue').classList.contains('invalid-input')).toBe(true);
    }); */

    it('should redirect when all inputs are valid', () => {
        document.getElementById('gallonsRequested').value = '10';
        document.getElementById('deliveryAddress').value = '123 Main St';
        document.getElementById('deliveryDate').value = '2024-03-20';
        const result = calculateTotal();
        expect(result).toBe(true);
    });


    // Add more tests for other inputs and scenarios
});
