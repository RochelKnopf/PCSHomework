(function () {
    'use strict';

    let buttonCount = 1;

    const clickHandler = () => {
        const newButton = document.createElement('button');
        newButton.innerText = `${++buttonCount}`;
        newButton.addEventListener('click', clickHandler);
        document.body.appendChild(newButton); //add button to page
    };

    document.getElementById('one').addEventListener('click', clickHandler);

})();