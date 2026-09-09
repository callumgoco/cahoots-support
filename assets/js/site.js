(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

  const phone = document.querySelector("[data-parallax]");
  if (!phone) return;

  let ticking = false;
  window.addEventListener(
    "pointermove",
    (event) => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = phone.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        phone.style.transform = `rotate(${-2.5 + x * 2}deg) translateY(${1.5 + y * 0.4}rem)`;
        ticking = false;
      });
    },
    { passive: true }
  );
})();
