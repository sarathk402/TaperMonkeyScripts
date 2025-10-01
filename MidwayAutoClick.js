// ==UserScript==
// @name         Midway Auto Signin
// @namespace    http://tampermonkey.net/
// @version      0.1
// @match        https://midway-auth.amazon.com/login*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log('Tampermonkey script loaded');

    function findAndClickButton() {
        console.log('Looking for button...');

        const button = document.querySelector('button[data-testid="submit_button"]')||
                      document.querySelector('button[type="submit"]');
        console.log('Button found:', button);

        if (button) {
            console.log('Button text:', button.textContent);
            button.click();
            console.log('Button clicked!');
        } else {
            console.log('Button not found, trying alternatives...');
            const altButton = document.querySelector('button[type="submit"]');
            console.log('Alt button:', altButton);
        }
    }

    setInterval(findAndClickButton, 1000);
    // Also check immediately when the page loads
    window.addEventListener('load', findAndClickButton);

})();
