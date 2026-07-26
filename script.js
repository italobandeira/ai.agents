/*
 * Troque os valores abaixo pelas URLs finais de cada agente.
 * Enquanto o valor for "#", o card exibe uma mensagem sem sair da página.
 */
const agentLinks = {
  realistic: "#",
  comic: "#",
  mascot: "#",
};

const toast = document.querySelector(".toast");
const toastMessage = document.querySelector("[data-toast-message]");
let toastTimer;

function showToast(message) {
  window.clearTimeout(toastTimer);
  toastMessage.textContent = message;
  toast.classList.add("is-visible");

  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2600);
}

document.querySelectorAll("[data-agent-link]").forEach((card) => {
  const agent = card.dataset.agentLink;
  const destination = agentLinks[agent];

  if (destination && destination !== "#") {
    card.href = destination;
    return;
  }

  card.addEventListener("click", (event) => {
    event.preventDefault();

    const message =
      agent === "realistic"
        ? "O link do ai.realistic está sendo configurado."
        : `O ai.${agent} ainda está em desenvolvimento.`;

    showToast(message);
  });
});

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -40px",
    },
  );

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 70, 210)}ms`;
    observer.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = new Date().getFullYear();
}
