<template>
  <header class="header" role="banner">
    <div class="header__inner">
      <!-- LEFT NAV PILL (Home / Foundations / Creators) -->
      <nav class="header__nav-pill" aria-label="Primary navigation">
        <a @click.prevent="scrollTo('hero')" tabindex="0">Home</a>
        <a @click.prevent="scrollTo('foundations')" tabindex="0">Foundations</a>
        <a @click.prevent="scrollTo('creators')" tabindex="0">Creators</a>
      </nav>

      <!-- CENTER LOGO -->
      <div class="header__logo-wrap">
        <img
          :src="logo"
          class="header__logo"
          alt="Whisperyn logo"
          width="64"
          height="64"
        />
      </div>
    </div>
  </header>
</template>

<script setup>
import logo from "../assets/images/logos/whisperyn-trispire-transparent-512.webp";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const offset = el.offsetTop - 80;
    window.scrollTo({ top: offset, behavior: "smooth" });
  }
};
</script>

<style scoped lang="scss">
/* ---------------------------------------------------------- */
/* HEADER BASE STYLES                                         */
/* ---------------------------------------------------------- */
.header {
  position: sticky;
  top: 0;
  z-index: 999;

  background: rgba(4, 14, 30, 0.7);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  padding: 0.65rem 0;
}

.header__inner {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 1.5rem;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* ---------------------------------------------------------- */
/* NAVIGATION PILL                                            */
/* ---------------------------------------------------------- */
.header__nav-pill {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  gap: 1.25rem;

  padding: 0.45rem 1.25rem;
  border-radius: 999px;

  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.11);
  backdrop-filter: blur(12px);

  box-shadow: inset 0 0 12px rgba(80, 200, 255, 0.05);

  /* Fix: Entire pill is interactive */
  cursor: pointer;
  user-select: none;
}

/* Pill animated mesh */
.header__nav-pill::before {
  content: "";
  position: absolute;
  inset: 0;

  opacity: 0.08;
  pointer-events: none;

  background-image: linear-gradient(
    90deg,
    rgba(80, 200, 255, 0.12) 0,
    rgba(80, 200, 255, 0.12) 1px,
    transparent 1px,
    transparent 6px
  );
  animation: pillMesh 18s linear infinite;
}

@keyframes pillMesh {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-200px);
  }
}

/* Individual links */
.header__nav-pill a {
  font-size: 0.95rem;
  color: #ffffff;
  opacity: 0.88;

  text-decoration: none;
  letter-spacing: 0.015em;

  /* Larger clickable area */
  padding: 0.35rem 0.55rem;
  border-radius: 6px;

  /* Fix: Always show pointer cursor */
  cursor: pointer;
  user-select: none;

  transition: opacity 0.25s ease, color 0.25s ease, background-color 0.25s ease,
    text-shadow 0.25s ease;
}

.header__nav-pill a:hover {
  opacity: 1;
  color: #d9ffff;
  background: rgba(255, 255, 255, 0.07);
  text-shadow: 0 0 8px rgba(80, 200, 255, 0.32);
}

.header__nav-pill a:focus-visible {
  outline: 3px solid #4fe0c6;
  outline-offset: 4px;
  border-radius: 6px;
}

/* Prevent text selection highlight */
.header__nav-pill a::selection {
  background: transparent;
}

/* ---------------------------------------------------------- */
/* CENTER LOGO + PULSE GLOW                                   */
/* ---------------------------------------------------------- */
.header__logo-wrap {
  position: relative;
  width: 64px;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.header__logo-wrap::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 92px;
  height: 92px;
  border-radius: 50%;

  background: radial-gradient(
    circle,
    rgba(79, 224, 198, 0.42) 0%,
    rgba(79, 224, 198, 0.14) 35%,
    transparent 80%
  );

  filter: blur(15px);
  z-index: 0;

  animation: logoPulse 4.5s ease-in-out infinite;
}

@keyframes logoPulse {
  0%,
  100% {
    opacity: 0.8;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.04);
  }
}

.header__logo {
  position: relative;
  z-index: 2;

  width: 64px;
  height: 64px;

  filter: brightness(1.35) contrast(1.18)
    drop-shadow(0 0 6px rgba(79, 224, 198, 0.3))
    drop-shadow(0 4px 14px rgba(0, 0, 0, 0.55));
}

/* ---------------------------------------------------------- */
/* ACCESSIBILITY (REDUCED MOTION)                             */
/* ---------------------------------------------------------- */
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
</style>
