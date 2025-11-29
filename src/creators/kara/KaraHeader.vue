<template>
  <header class="kara-header reveal">
    <div class="kara-header__inner">
      <!-- LEFT: Kara Logo -->
      <div class="kara-header__logo">
        <img :src="karaLogo" alt="Kara Logo" />
      </div>

      <!-- Left-aligned nav -->
      <nav class="kara-header__nav">
        <button class="nav-pill" @click="scrollTo('kara-about')">About</button>
        <button class="nav-pill" @click="scrollTo('kara-work')">Work</button>
      </nav>

      <!-- Return to Whisperyn -->
      <RouterLink to="/" class="kara-header__return"> ← Whisperyn </RouterLink>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
import karaLogo from "../kara/assets/logos/kara-logo-768w.webp";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = window.scrollY + el.getBoundingClientRect().top - 80;
  window.scrollTo({ top, behavior: "smooth" });
};
</script>

<style scoped lang="scss">
.kara-header {
  position: sticky;
  top: 0;
  z-index: 20;
  padding: 1rem 2.4rem;
  background: linear-gradient(
    to bottom,
    rgba(11, 13, 16, 0.95),
    rgba(11, 13, 16, 0.88)
  );
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(14px);
}

/* HEADER LAYOUT */
.kara-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

/* ============================ */
/*   KARA LOGO (ANIMATED, SOFT) */
/* ============================ */
.kara-header__logo {
  width: 50px;
  height: 50px;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 12px;
  background: rgba(143, 212, 210, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.06);

  transition: background 0.25s ease, transform 0.25s ease;
  box-shadow: 0 0 12px rgba(143, 212, 210, 0.15);
}

.kara-header__logo:hover {
  background: rgba(143, 212, 210, 0.16);
  transform: translateY(-2px);
}

.kara-header__logo img {
  width: 125%;
  height: 125%;
  opacity: 1;
  filter: drop-shadow(0 0 6px rgba(143, 212, 210, 0.25));
  transition: opacity 0.25s ease;
}

.kara-header__logo:hover img {
  opacity: 1;
}

/* ============================ */
/*        NAVIGATION             */
/* ============================ */

.kara-header__nav {
  display: flex;
  gap: 0.75rem;
  padding: 0.25rem;
  margin-left: 1.25rem;
  margin-right: auto;

  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(10, 12, 16, 0.85);
  backdrop-filter: blur(6px);
}

.nav-pill {
  border: none;
  outline: none;
  border-radius: 999px;
  padding: 0.35rem 0.95rem;
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: transparent;
  color: #d6dde6;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  transition: color 0.18s ease, transform 0.18s ease;
}

.nav-pill::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at top,
    rgba(143, 212, 210, 0.3),
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.2s ease;
}

.nav-pill:hover {
  color: white;
  transform: translateY(-1px);
}
.nav-pill:hover::before {
  opacity: 0.9;
}

/* ============================ */
/*      RETURN LINK (RIGHT)     */
/* ============================ */
.kara-header__return {
  font-size: 0.86rem;
  color: #aab2bc;
  text-decoration: none;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(
    to right,
    rgba(143, 212, 210, 0.1),
    rgba(143, 212, 210, 0.03)
  );

  transition: background 0.25s ease, color 0.25s ease;
}

.kara-header__return:hover {
  color: white;
  background: rgba(143, 212, 210, 0.18);
}

/* MOBILE */
@media (max-width: 768px) {
  .kara-header__nav {
    display: none;
  }
}
</style>
