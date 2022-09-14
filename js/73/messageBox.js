(function () {
    'use strict';

    const messageBox = document.getElementById('messageBox');
    const okButton = document.getElementById('ok');
    const showButton = document.getElementById('show');
    const inputForm = document.getElementById('inputForm');
    const messageBoxText = document.getElementById('messageBoxText');
    const message = document.getElementById('message');

    function showMessageBox() {
        messageBox.style.display = 'inline-block';
    }

    function hideMessageBox () {
        messageBox.style.display = 'none';
    }

    showButton.addEventListener('click', () => {
        inputForm.style.display = 'none';
        showMessageBox();
        messageBoxText.innerText = `${message}`;
    });

    okButton.addEventListener('click', () => {
        hideMessageBox();
    });

})();

