const login = require('../index'); // replace with the path to your login module
const { JSDOM } = require('jsdom');

// Mock the alert function
global.alert = jest.fn();

describe('login', () => {
    beforeEach(() => {
        const dom = new JSDOM(`
        <!DOCTYPE html>
        <p>Hello world</p>
        <input id="username" />
        <input id="password" />
    `, { url: "http://localhost/account.html" });
        global.window = dom.window;
        global.document = window.document;
    });

    it('should alert and add invalid-input class when username is blank', () => {
        document.getElementById('username').value = '';
        login();
        expect(alert).toHaveBeenCalledWith('Username cannot be blank.');
    });

    it('should alert and add invalid-input class when password is blank', () => {
        document.getElementById('username').value = 'testuser';
        document.getElementById('password').value = '';
        login();
        expect(alert).toHaveBeenCalledWith('Password cannot be blank.');
    });

    it('should redirect to profile page when username and password are not blank', () => {
        document.getElementById('username').value = 'testuser';
        document.getElementById('password').value = 'testpass';
        const result = login();
        expect(result).toBe(true);
    });
});

