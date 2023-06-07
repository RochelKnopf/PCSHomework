/*global $, io*/

(function () {
  'use strict';

  const socketIo = io();

  const loginForm = $('#login');
  loginForm.submit(e => {
    e.preventDefault();

    const errorElem = $('#error');
    socketIo.emit('login', $('#user').val(), result => {
      if (result) {
        errorElem.text(result);
      } else {
        loginForm.slideUp('slow');
        $('#messageContainer').slideDown('slow');

        const messagesElem = $('#messages');
        socketIo.on('msg', msg => {
          messagesElem.append(`<div>${msg.name} said: ${msg.msg}</div>`);
        });

        socketIo.on('info', info => {
          const text = info.join ? `${info.join} has joined` : `${info.leave} has left`;
          messagesElem.append(`<div class="info">${text} the chat</div>`);
        });
      }
    });
  });

  const messageInput = $('#msg');
  $('#message').submit(e => {
    e.preventDefault();

    socketIo.emit('msg', messageInput.val());
    messageInput.val('');
  });
})();
