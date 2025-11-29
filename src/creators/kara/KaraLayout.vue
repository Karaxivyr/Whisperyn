<template>
  <div class="kara-site">
    <!-- Animated procedural background -->
    <div class="kara-grid"></div>
    <div class="kara-noise"></div>
    <div class="kara-light"></div>

    <!-- Page structure -->
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
import KaraHeader from "./KaraHeader.vue";
import KaraFooter from "./KaraFooter.vue";
import KaraHero from "./KaraHero.vue";
import KaraAbout from "./KaraAbout.vue";
import KaraProjects from "./KaraProjects.vue";

// Cursor-reactive ambient lighting
window.addEventListener("mousemove", (e) => {
  document.documentElement.style.setProperty("--x", `${e.clientX}px`);
  document.documentElement.style.setProperty("--y", `${e.clientY}px`);
});
</script>

<style scoped lang="scss">
.kara-site {
  background: #0d0d0d;
  color: #e4e4e4;
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
}

/* === FRACTAL CYBER GRID === */
.kara-grid {
  position: fixed;
  inset: 0;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.03) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 42px 42px;
  opacity: 0.16;
  animation: gridShift 38s linear infinite;
}
@keyframes gridShift {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-120px, -120px);
  }
}

/* === NOISE OVERLAY === */
.kara-noise {
  position: fixed;
  inset: 0;
  opacity: 0.05;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='5'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
  mix-blend-mode: soft-light;
  pointer-events: none;
}

/* === AMBIENT CURSOR LIGHT === */
.kara-light {
  position: fixed;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(
    circle at var(--x, 50%) var(--y, 40%),
    rgba(255, 255, 255, 0.08),
    transparent 60%
  );
  mix-blend-mode: overlay;
  transition: background-position 0.12s linear;
}

.kara-main {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding-bottom: 4rem;
  position: relative;
  z-index: 2;
}

/* REVEAL ANIMATION */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  animation: revealUp 1s ease forwards;
}
@keyframes revealUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
