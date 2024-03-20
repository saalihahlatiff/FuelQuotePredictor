const jsdom = require('jsdom');
const { JSDOM } = jsdom;

// Mock the alert function
global.alert = jest.fn();

// Mock the verifyProfile function
const { verifyProfile } = require('../client/profile'); // Corrected here

describe('Profile Form', () => {
    beforeEach(() => {
        const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`, { url: "http://localhost/account.html" });
        global.window = dom.window;
        global.document = window.document;

        document.body.innerHTML = `
            <form id="profileForm">
                <input id="fullName" />
                <input id="address1" />
                <input id="city" />
                <input id="states" />
                <input id="zipcode" />
                <button>Save</button>
            </form>
        `;

        verifyProfile(); // Moved after window is defined
        require('../client/profile');
    });

    it('should add invalid-input class when fullName is empty', () => {
        expect(document.getElementById('fullName').classList.contains('invalid-input')).toBe(true);
    });

    it('should add invalid-input class when address is empty', () => {
        document.getElementById('fullName').value = 'John Doe';
        expect(document.getElementById('address1').classList.contains('invalid-input')).toBe(true);
    });

    it('should add invalid-input class when city is empty', () => {
        document.getElementById('fullName').value = 'John Doe';
        document.getElementById('address1').value = '123 Main St';
        expect(document.getElementById('city').classList.contains('invalid-input')).toBe(true);
    });

    it('should add invalid-input class when states is empty', () => {
        document.getElementById('fullName').value = 'John Doe';
        document.getElementById('address1').value = '123 Main St';
        document.getElementById('city').value = 'Anytown';
        expect(document.getElementById('states').classList.contains('invalid-input')).toBe(true);
    });

    it('should add invalid-input class when zipcode is empty', () => {
        document.getElementById('fullName').value = 'John Doe';
        document.getElementById('address1').value = '123 Main St';
        document.getElementById('city').value = 'Anytown';
        document.getElementById('states').value = 'TX';
        expect(document.getElementById('zipcode').classList.contains('invalid-input')).toBe(true);
    });

    
    it('should redirect when all inputs are valid', () => {
        document.getElementById('fullName').value = 'John Doe';
        document.getElementById('address1').value = '123 Main St';
        document.getElementById('city').value = 'Anytown';
        document.getElementById('states').value = 'TX';
        document.getElementById('zipcode').value = '12345';
        const result = verifyProfile();
        expect(result).toBe(true);
    }); 
});


describe('isValidZipcode', () => {
    const isValidZipcode = require('../client/profile').isValidZipcode; // replace with the path to your file

    it('should return true for valid zipcodes', () => {
        expect(isValidZipcode('12345')).toBe(true);
        expect(isValidZipcode('12345-6789')).toBe(true);
    });

    it('should return false for invalid zipcodes', () => {
        expect(isValidZipcode('1234')).toBe(false);
        expect(isValidZipcode('123456')).toBe(false);
        expect(isValidZipcode('1234-5678')).toBe(false);
        expect(isValidZipcode('12345-678')).toBe(false);
        expect(isValidZipcode('12345-67890')).toBe(false);
    });
});
