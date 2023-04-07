// ==UserScript==
// @name         01bz-PC-Bypass
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  通过电脑端浏览器访问第一版主
// @author       h4ckm310n
// @match        *://*.8yydstxt426.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/1.9.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    if (document.body.innerText.indexOf('404 Not Found\nnginx') != -1) {
        $('body').css({
            'background': '#ddd'
        });
        $('div,input,form').show();
        $('div#tip').hide();
    }
    if (document.body.innerHTML.indexOf('https://area51.mitecdn.com/loader.gif') != -1) {
        document.body.firstChild.remove();
    }
})();