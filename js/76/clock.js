(function () {
    'use strict';

    const clock = document.createElement('div');
    clock.style.backgroundColor = 'black';
    clock.style.color = 'yellow';
    clock.style.margin = 'auto';
    clock.style.padding = '1em';
    clock.style.width = '5em';
    clock.style.textAlign = 'center';
    clock.style.fontSize = 'xx-large';
    document.body.appendChild(clock);

    setInterval(() => {
        let date = new Date().toLocaleTimeString();
        clock.innerText = date;
    }, 1000);

})();