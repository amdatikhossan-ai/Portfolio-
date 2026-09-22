// ===== MOBILE MENU =====

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});


// Close menu after clicking a link

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});


// ===== TYPING EFFECT =====

const typingElement = document.getElementById("typing");

const words = [
  "Student",
  "Creative Learner",
  "Content Creator",
  "Web Designer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

  const currentWord = words[wordIndex];

  if (!deleting) {

    typingElement.textContent =
      currentWord.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentWord.length) {
      deleting = true;

      setTimeout(typeEffect, 1500);
      return;
    }

  } else {

    typingElement.textContent =
      currentWord.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
      deleting = false;

      wordIndex++;

      if (wordIndex >= words.length) {
        wordIndex = 0;
      }
    }
  }

  setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();


// ===== CURRENT YEAR =====

document.getElementById("year").textContent =
  new Date().getFullYear();


// ===== CONTACT FORM =====

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

  event.preventDefault();

  const name =
    document.getElementById("name").value;

  alert(
    "Thank you, " + name +
    "! Your message has been received."
  );

  contactForm.reset();

});


// ===== ACTIVE NAVIGATION =====

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 100;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }

  });

});

// =====================================
// BIRD SOUND
// =====================================

const birdSound = document.getElementById("birdSound");
const soundButton = document.getElementById("soundButton");

if (birdSound && soundButton) {

    const soundIcon = soundButton.querySelector(".sound-icon");

    birdSound.volume = 0.35;

    soundButton.addEventListener("click", async function () {

        if (birdSound.paused) {

            try {
                await birdSound.play();

                soundButton.classList.add("sound-on");

                if (soundIcon) {
                    soundIcon.textContent = "🔊";
                }

            } catch (error) {
                console.log("Sound error:", error);
            }

        } else {

            birdSound.pause();

            soundButton.classList.remove("sound-on");

            if (soundIcon) {
                soundIcon.textContent = "🔇";
            }

        }

    });

}