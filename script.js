// Typing Effect
const text = ["Data Analyst", "Python Developer", "SQL Expert"];
let i = 0, j = 0, currentText = "", isDeleting = false;

function type() {
  currentText = text[i];
  document.getElementById("typing").innerHTML =
    currentText.substring(0, j);

  if (!isDeleting && j < currentText.length) j++;
  else if (isDeleting && j > 0) j--;
  else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % text.length;
  }
  setTimeout(type, 100);
}
type();

// Scroll Animation
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100)
      el.classList.add("active");
  });
});

// Skill Animation
window.addEventListener("scroll", () => {
  document.querySelectorAll(".fill").forEach(bar => {
    bar.style.width = bar.getAttribute("data-percent") + "%";
  });
});

// Smooth Scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Modal
function openModal(id) {
  document.getElementById(id).style.display = "block";
}
function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Particles Background
particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    size: { value: 3 },
    move: { speed: 2 }
  }
});