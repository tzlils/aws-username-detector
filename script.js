// ==UserScript==
// @name         AWS Username Detector
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Display logged in AWS username in card
// @author       Tzlil
// @match        https://*.console.aws.amazon.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hibbard.eu
// @grant        none
// ==/UserScript==

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

(function() {
    'use strict';

    // devtools -> element -> copy as selector
    // method 1, element query
    let usernameElement = document.querySelector("#nav-usernameMenu > span.OYUiy2c-Bv3l4eRDVvfYu > span._1Vtx1Z7gxtNZJP2MVzVCLO._31GHADTBDW3BW3qVhZRFPq").title;
    
    // devtools -> application -> cookies
    // method 2, aws-userinfo cookie
    let usernameCookie = JSON.parse(decodeURIComponent(getCookie("aws-userInfo"))).username

    alert(`
        Method 1: element query
        ${usernameElement}
        Method 2: cookies
        ${usernameCookie}
    `);
})();