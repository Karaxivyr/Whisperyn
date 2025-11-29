// src/composables/useScrollReveal.js
export function useScrollReveal(selector, options = {}) {
  const defaultOptions = {
    threshold: 0.12,
    rootMargin: "0px 0px -10% 0px",
    once: true,
    stagger: 80,
  };

  const finalOptions = { ...defaultOptions, ...options };

  let observer;
  let revealedCount = 0;

  const reveal = (el) => {
    const items = el.querySelectorAll(selector);

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.style.transitionDelay =
          revealedCount * finalOptions.stagger + "ms";

        entry.target.classList.add("reveal-active");
        revealedCount++;

        if (finalOptions.once) observer.unobserve(entry.target);
      });
    }, finalOptions);

    items.forEach((item) => observer.observe(item));
  };

  return { reveal };
}
