window.onload = () => document.getElementsByTagName("form")[0].addEventListener("submit", submitMessage);

const socket = io();
const input = document.getElementsByTagName('input')[0];
const chat = document.getElementsByClassName('chat')[0];

function submitMessage(e) {
  e.preventDefault();
  socket.emit('chat.message', input.value);
  input.value = '';
}

socket.on('chat message', (msg) => {
  chat.appendChild(document.createElement('li').append(document.createTextNode(msg)));
});