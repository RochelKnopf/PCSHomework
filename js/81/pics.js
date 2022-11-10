/* global $ */
(async function () {
    'use strict';

    try {
        const pictureBox = $('#pictureArea');

        const response = await fetch('pics.json');

        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }

        const pics = await response.json();

        pics.forEach(picture => {
            pictureBox.append(`
            <div class="pictureDiv">
            <img src="${picture.image}">
            <h2>${picture.name}</h2>
        </div>
        `);
        });
    }
    catch (e) {
        console.error(e);
    }
    

})();