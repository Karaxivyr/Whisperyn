<template>
  <header class="header header--center" role="banner">
    <div class="header__inner header__inner--center">
      <!-- LEFT NAV -->
      <nav
        class="header__nav header__nav--left"
        aria-label="Primary navigation"
      >
        <a @click.prevent="scrollTo('hero')" tabindex="0">Home</a>
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

      <!-- RIGHT NAV -->
      <nav
        class="header__nav header__nav--right"
        aria-label="Primary navigation"
      >
        <a @click.prevent="scrollTo('creators')" tabindex="0">Creators</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
// Transparent trispire logo
import logo from "../assets/images/logos/whisperyn-trispire-transparent-512.webp";

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

  padding: 0.55rem 2rem;

  /* Better for accessibility */
  nav a {
    font-size: 1rem;
    color: #fff;
    text-decoration: none;
  }

  nav a:focus-visible {
    outline: 3px solid #4fe0c6;
    outline-offset: 3px;
  }
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 2rem;
}

.header__logo-wrap {
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 82px;
    height: 82px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(79, 224, 198, 0.42) 0%,
      rgba(79, 224, 198, 0.08) 40%,
      transparent 80%
    );
    filter: blur(15px);
  }
}

.header__logo {
  position: relative;
  width: 58px;
  height: 58px;
  filter: brightness(1.35) contrast(1.15)
    drop-shadow(0 0 6px rgba(79, 224, 198, 0.3));
}

/* Reduce-motion accessibility */
@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
    animation: none !important;
  }
}
</style>
