document.addEventListener("DOMContentLoaded", () => {
  const leyenda = document.getElementById("leyenda");
  const text = leyenda.textContent;
  leyenda.textContent = "";

  // Convertir cada letra en un span
  const letters = text.split("");
  letters.forEach(letter => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.opacity = 0;
    leyenda.appendChild(span);
  });

  const spans = leyenda.querySelectorAll("span");

  gsap.registerPlugin(ScrollTrigger);

  // Timeline para animación letra por letra
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#section2",
      start: "top top",
      end: "+=1000",
      scrub: 0.5,
      pin: true,
      markers: false // <-- ocultamos los marcadores
    }
  });

  tl.to(spans, {
    opacity: 1,
    duration: 0.05,
    stagger: 0.02
  });
});



















// Fecha objetivo: 8 de mayo de 2026
const targetDate = new Date("May 8, 2026 20:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference <= 0) {
    document.getElementById("countdown").innerHTML = "<h3>¡La fiesta comenzó! 🎉</h3>";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

// actualizar cada segundo
setInterval(updateCountdown, 1000);
updateCountdown();
