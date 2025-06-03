const messagesEl = document.getElementById('messages');
const formEl = document.getElementById('chat-form');
const inputEl = document.getElementById('user-input');

const pirateResponses = [
  "Arrr, that be interestin'!",
  "Ahoy, matey!",
  "Shiver me timbers!",
  "Yo-ho-ho!",
  "Avast ye!"
];

function appendMessage(text, sender) {
  const msg = document.createElement('div');
  msg.classList.add('message', sender);
  msg.textContent = text;
  messagesEl.appendChild(msg);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

formEl.addEventListener('submit', e => {
  e.preventDefault();
  const userText = inputEl.value.trim();
  if (!userText) return;
  appendMessage(userText, 'user');
  inputEl.value = '';
  const botText = pirateResponses[Math.floor(Math.random() * pirateResponses.length)];
  setTimeout(() => appendMessage(botText, 'bot'), 500);
});