const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

sendBtn.onclick = sendMessage;
userInput.addEventListener("keydown", e => {
  if (e.key === "Enter") sendMessage();
});

function appendMessage(text, sender) {
  const msg = document.createElement("div");
  msg.className = "msg " + sender;
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  const input = userInput.value.trim();
  if (!input) return;

  appendMessage(input, "user");
  userInput.value = "";

  setTimeout(() => {
    const reply = getResponse(input);
    appendMessage(reply, "bot");
  }, 500);
}

function getResponse(input) {
  const lower = input.toLowerCase();

  if (lower.includes("hello")) return "Hi there! I'm Akin Ai.";
  if (lower.includes("name")) return "I'm Akin Ai, your offline assistant.";
  if (lower.includes("bye")) return "Goodbye! Stay awesome.";
  if (lower.match(/(\d+)\s*[\+\-\*\/]\s*(\d+)/)) {
    try {
      return "The answer is: " + eval(lower);
    } catch {
      return "I couldn't calculate that.";
    }
  }

  return "I'm not connected to the internet, but I'm here to chat!";
}

