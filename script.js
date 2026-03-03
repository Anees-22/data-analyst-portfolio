// Live Clock
function updateClock() {
  const now = new Date();
  document.getElementById("clock").innerText =
    "Current Time: " + now.toLocaleString();
}
setInterval(updateClock, 1000);
updateClock();

// Save Message
function saveMessage() {
  const message = document.getElementById("message").value;
  localStorage.setItem("timeCapsuleMessage", message);
  alert("Your message has been sealed! 🔒");
}

// Show Message
function showMessage() {
  const message = localStorage.getItem("timeCapsuleMessage");
  if (message) {
    document.getElementById("savedMessage").innerText =
      "📜 Your Sealed Message:\n" + message;
  } else {
    document.getElementById("savedMessage").innerText =
      "No message found!";
  }
}

// Countdown to 2027
function updateCountdown() {
  const targetDate = new Date("Jan 1, 2027 00:00:00").getTime();
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("countdownTimer").innerText =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}
setInterval(updateCountdown, 1000);
updateCountdown();