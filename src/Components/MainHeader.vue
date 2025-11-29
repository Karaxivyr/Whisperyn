<template>
  <header class="header header--center">
    <div class="header__inner header__inner--center">
      <!-- LEFT NAV -->
      <nav class="header__nav header__nav--left">
        <a @click.prevent="scrollTo('hero')">Home</a>
      </nav>

      <!-- CENTER LOGO -->
      <div class="header__logo-wrap">
        <img :src="logo" class="header__logo" alt="Whisperyn Logo" />
      </div>

      <!-- RIGHT NAV -->
      <nav class="header__nav header__nav--right">
        <a @click.prevent="scrollTo('creators')">Creators</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
// Transparent trispire logo
import logo from "@/assets/images/whisperyn-trispire-transparent-2048.webp";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const top = el.offsetTop - 80; // header offset
    window.scrollTo({ top, behavior: "smooth" });
  }
};
</script>

<style scoped lang="scss">
.header {
  position: sticky;
  top: 0;
  z-index: 999;
  background: rgba(4, 14, 30, 0.7);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  /* Slimmer header */
  padding: 0.6rem 2rem;
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: center;
}

.header__inner--center {
  justify-content: center;
  width: 100%;
  position: relative;
}

/* NAVIGATION BUTTONS */
.header__nav--left,
.header__nav--right {
  width: 130px;
  display: flex;
  justify-content: center;
}

.header__nav a {
  cursor: pointer;
  opacity: 0.85;
  transition: opacity 0.2s ease;
  font-size: 0.95rem;
}

.header__nav a:hover {
  opacity: 1;
}

/* LOGO + VISIBILITY ENHANCEMENT */
.header__logo-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Glow behind the transparent logo */
  &::before {
    content: "";
    position: absolute;
    width: 92px;
    height: 92px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(79, 224, 198, 0.45) 0%,
      rgba(79, 224, 198, 0.12) 40%,
      transparent 80%
    );
    filter: blur(18px);
    z-index: 0;
  }
}

/* Smaller logo, still very legible */
.header__logo {
  position: relative;
  width: 64px;
  height: 64px;
  z-index: 2;

  filter: brightness(1.35) contrast(1.1)
    drop-shadow(0 0 6px rgba(79, 224, 198, 0.35))
    drop-shadow(0 4px 10px rgba(0, 0, 0, 0.6));
}
</style>
