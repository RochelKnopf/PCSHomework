/* global $ */
(async function () {
    'use strict';

    const songList = $('#songList');
    const playButton = $('#playButton');
    const videoDiv = $('#videoDiv');

    try {
        const response = await fetch('videos.json');

        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }

        const videos = await response.json();

        videos.forEach(video => {
            songList.append(
                `<div class="songDiv">
                <h2 id="songName">${video.name}</h2>
                <img id="songImage" value="${video.id}" src="${video.image}">
                <br>
                <button id="playButton" value="${video.id}">Play</button>
            </div>`
            );
        });

        //not sure why this wont work but I ran out of time to fix it...

        playButton.click(async function (e) {
            console.log('clicked');
            try {
                const response = await fetch(`${this.value}.json`);

                if (!response.ok) {
                    throw new Error(`${response.status} ${response.statusText}`);
                }

                const video = response.json;

                videoDiv.append(`
                    <h2>${video.name}</h2>
                    <video src="${video.src}" controls></video>
                `);

                videoDiv.show();
            }
            catch (e) {
                console.error(e);
            }
        });

    }
    catch (e) {
        console.error(e);
    }

})();