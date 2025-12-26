const loveMessages = [
  "I choose you. Every single day 💖",
  "You are my favorite notification 💬",
  "Your smile = my happiness 😘",
  "Come here, unlimited kisses 💋💋💋",
  "Forever yours, no returns ❤️"
];

function showLove() {
  const msg = loveMessages[Math.floor(Math.random() * loveMessages.length)];
  document.getElementById("extra-love").innerText = msg;
}
