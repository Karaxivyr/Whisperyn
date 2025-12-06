<template>
  <header class="whisperyn-header" role="banner">
    <div class="header__inner">
      <!-- Crest aligned with content -->
      <img :src="logo" alt="Whisperyn Crest" class="header__crest" />

      <!-- Menu items to the right -->
      <nav class="header__nav" aria-label="Primary navigation">
        <a @click.prevent="scrollTo('hero')">Home</a>
        <a @click.prevent="scrollTo('foundations')">Foundations</a>
        <a @click.prevent="scrollTo('creators')">Creators</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import logo from "../assets/images/logos/whisperyn-trispire-transparent-512.webp";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const top = el.offsetTop - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }
};
</script>

<style scoped lang="scss">
/* -------------------------------------------------------
   WHISPERYN | CLEAN LEFT-ANCHOR HEADER
   Crest left → menu right → aligned to content width
-------------------------------------------------------- */

.whisperyn-header {
  position: sticky;
  top: 0;
  z-index: 999;

  background: rgba(4, 14, 30, 0.75);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding: 0.75rem 0;
}

/* Aligns with your 1080px content grid */
.header__inner {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  gap: 1.75rem;
}

/* ENHANCED WHISPERYN GLOW — STRONGER, WIDER, MORE NOTICEABLE */
.header__crest {
  width: 52px;
  height: 52px;

  filter: drop-shadow(0 0 8px rgba(79, 224, 198, 0.9)) /* bright core */
    drop-shadow(0 0 22px rgba(79, 224, 198, 0.55)) /* strong halo */
    drop-shadow(0 0 38px rgba(79, 224, 198, 0.4)) /* bloom */
    drop-shadow(0 0 65px rgba(79, 224, 198, 0.25)); /* atmospheric aura */

  transition: none !important;
}

/* Keep glow identical on hover */
.header__crest:hover {
  filter: drop-shadow(0 0 8px rgba(79, 224, 198, 0.9))
    drop-shadow(0 0 22px rgba(79, 224, 198, 0.55))
    drop-shadow(0 0 38px rgba(79, 224, 198, 0.4))
    drop-shadow(0 0 65px rgba(79, 224, 198, 0.25)) !important;
}

/* Menu navigation */
.header__nav {
  display: flex;
  align-items: center;
  gap: 1.75rem;
}

.header__nav a {
  color: #fff;
  opacity: 0.88;
  font-size: 1rem;
  text-decoration: none;
  padding: 0.25rem 0;

  cursor: pointer; /* ← FIXED */
  user-select: none; /* prevent text cursor */
  -webkit-user-select: none;
  -moz-user-select: none;

  transition: opacity 0.2s ease, color 0.2s ease;
}

.header__nav a:hover {
  opacity: 1;
  color: #dff;
}

.header__nav a:hover {
  opacity: 1;
  color: #dff;
}

/* -------------------------------------------------------
   MOBILE — crest stays left, menu drops below
-------------------------------------------------------- */

@media (max-width: 640px) {
  .header__inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.6rem;
  }

  .header__crest {
    width: 38px;
    height: 38px;
  }

  .header__nav {
    gap: 1.2rem;
  }
}

/* 360px wrap */
@media (max-width: 380px) {
  .header__nav {
    flex-wrap: wrap;
    row-gap: 0.25rem;
  }
}
</style>
