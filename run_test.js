const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const html = fs.readFileSync('index.html', 'utf8');
const script = fs.readFileSync('main.js', 'utf8');

const dom = new JSDOM(html, { runScripts: "dangerously" });
const window = dom.window;

// Polyfill for matchMedia
window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};

const scriptEl = window.document.createElement("script");
scriptEl.textContent = script;
window.document.body.appendChild(scriptEl);

window.addEventListener('DOMContentLoaded', () => {
    try {
        window.setLanguage('en');
        console.log("English translation success!");
        console.log(window.document.getElementById('intro-heading').textContent);
    } catch(e) {
        console.error("ERROR:", e);
    }
});
