<template>
  <div class="kara-site">
    <!-- Smooth Background Layers -->
    <div class="kara-grid"></div>
    <div class="kara-noise"></div>
    <div class="kara-light"></div>
    <div class="kara-circuit"></div>

    <KaraHeader />

    <main class="kara-main">
      <KaraHero />
      <KaraAbout />
      <KaraProjects />
    </main>

    <KaraFooter />
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from "vue";

/* Components */
import KaraHeader from "./KaraHeader.vue";
import KaraFooter from "./KaraFooter.vue";
import KaraHero from "./KaraHero.vue";
import KaraAbout from "./KaraAbout.vue";
import KaraProjects from "./KaraProjects.vue";

/* Import global animation SCSS */
import "./karaBackground.scss";

/* Smooth cursor reactive lighting */
let cx = 0;
let cy = 0;

const listener = (e) => {
  cx = e.clientX;
  cy = e.clientY;

  document.documentElement.style.setProperty("--kara-x", `${cx}px`);
  document.documentElement.style.setProperty("--kara-y", `${cy}px`);
};

onMounted(() => {
  window.addEventListener("mousemove", listener);

  /* Generate Random Circuit */
  const container = document.querySelector(".kara-circuit");
  if (container) {
    for (let i = 0; i < 22; i++) {
      const n = document.createElement("div");
      n.className = "circuit-node";
      n.style.top = `${Math.random() * 100}%`;
      n.style.left = `${Math.random() * 100}%`;
      n.style.animationDelay = `${Math.random() * 6}s`;
      container.appendChild(n);
    }
    for (let i = 0; i < 12; i++) {
      const l = document.createElement("div");
      l.className = "circuit-line";
      l.style.top = `${Math.random() * 100}%`;
      l.style.left = `${Math.random() * 100}%`;
      l.style.width = `${40 + Math.random() * 160}px`;
      l.style.animationDelay = `${Math.random() * 6}s`;
      container.appendChild(l);
    }
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("mousemove", listener);
});
</script>

<style scoped lang="scss">
.kara-site {
  background: #0b0d10;
  color: #e3e7ec;
  min-height: 100vh;
  overflow-x: hidden;
}

.kara-main {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding-bottom: 4rem;
  z-index: 10;
}

/* SMOOTH REVEAL */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  animation: karaReveal 1s cubic-bezier(0.21, 0.55, 0.16, 1) forwards;
}

@keyframes karaReveal {
  0% {
    opacity: 0;
    transform: translateY(28px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
