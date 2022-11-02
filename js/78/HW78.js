(function () {
    'use strict';

    const theInput = document.getElementById('input');
    const theButton = document.getElementById('button');

    /* theButton.addEventListener('click', () => {
        console.log(theInput.value);
    }); */


    theButton.addEventListener('click', () => {
        console.log('submit was clicked');
        fetch(theInput.value)
            .then(response => {
                console.log('response', response);
                if (response >= 400) {
                    throw new Error(`oops ${response.status} ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                const jdata = JSON.parse(data);
                console.log(jdata, typeof data);
            })
            ;
    });

})();