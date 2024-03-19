const register = require('../client/register.js');
const { JSDOM } = require('jsdom');

describe('register function', () => {
    beforeEach(() => {
        const dom = new JSDOM(`
            <input id="regUsername" />
            <input id="regPassword" />
        `);
        global.window = dom.window;
        global.document = window.document;
        global.window.alert = jest.fn(); // Mock the alert function
    });

    it('should alert and return when username is blank', () => {
        document.getElementById('regUsername').value = '';
        register(window);
        expect(window.alert).toHaveBeenCalledWith('Username cannot be blank.');
    });

    it('should alert and return when password is less than 8 characters', () => {
        document.getElementById('regUsername').value = 'testUser';
        document.getElementById('regPassword').value = '1234567';
        register(window);
        expect(window.alert).toHaveBeenCalledWith('Password must be at least 8 characters long.');
    });

    it('should redirect when inputs are valid', () => {
        document.getElementById('regUsername').value = 'testUser';
        document.getElementById('regPassword').value = '12345678';
        register(window);
        expect(window.location.href).toBe('../index.html');
    });
});
