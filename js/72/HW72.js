(function () {
    'use strict';

    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];

    const background = document.body;

    function setCss(elem, property, val) { 
        elem.style[property] = val; 
    }

    const button = document.querySelector('#start');

    button.addEventListener('click', () => {
        setInterval(() => {
            for (let i = 0; i < colors.length; i++) {
                setCss(background, 'background-color', colors[i]);
            }
        }, 1000);
    });

    const table = document.querySelector('#table');

    table.addEventListener('change', () => {
        
    });
})();