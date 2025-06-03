const piratePhrases = [
  "Ahoy, matey!",
  "Shiver me timbers!",
  "Yo-ho-ho!",
  "Avast ye!",
  "Walk the plank!",
  "Blimey!",
  "Pieces of eight!"
];

const chatWindow = document.getElementById("chat-window");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  chatWindow.appendChild(msg);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function getRandomPiratePhrase() {
  return piratePhrases[Math.floor(Math.random() * piratePhrases.length)];
}

function handleUserInput() {
  const text = userInput.value.trim();
  if (!text) return;
  addMessage(text, "user");
  userInput.value = "";
  setTimeout(() => {
    const reply = getRandomPiratePhrase();
    addMessage(reply, "bot");
  }, 500);
}

sendButton.addEventListener("click", handleUserInput);
userInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    handleUserInput();
  }
});