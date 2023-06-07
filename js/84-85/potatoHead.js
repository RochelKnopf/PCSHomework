/* global $ */
(function () {
    'use strict';

    let dragging = false;
    let offset;
    let zIndex = 0;

    $(document).on('mousedown', '.part', e => {
        e.preventDefault();
        console.log('mouse down', e);
        dragging = $(e.target);
        offset = { y: e.offsetY, x: e.offsetX };
    })
    .mousemove(e => {
        if (dragging) {
            console.log('mouse move', e);
            dragging.css('z-index', ++zIndex);
            dragging.css({ top: e.pageY - offset.y, left: e.pageX - offset.x });
        }
     })
    .mouseup(e => {
        console.log('mouse up');
        dragging = false;
    });

})();