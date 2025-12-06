<template>
  <header :class="['kara-header', { scrolled: isScrolled }]">
    <div class="header-inner">
      <!-- Logo -->
      <div class="logo">
        <img
          src="../assets/logos/kara-logo-768w.webp"
          alt="Kara"
          @click="goHome"
        />
      </div>

      <!-- Navigation -->
      <nav class="nav">
        <button class="link" @click="goHome">Home</button>
        <button class="link" @click="scrollToSection('about')">About</button>
        <button class="link" @click="scrollToSection('projects')">
          Projects
        </button>
        <button class="link" @click="goWhisperyn">Whisperyn</button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const isScrolled = ref(false);

/* Detect scroll depth */
function updateScroll() {
  isScrolled.value = window.scrollY > 20;
}

onMounted(() => {
  window.addEventListener("scroll", updateScroll);
  updateScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateScroll);
});

/* Home button behavior */
function goHome() {
  if (route.path === "/kara") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    router.push("/kara");
  }
}

function goWhisperyn() {
  router.push("/");
}
/* Smooth in-page scrolling */
function scrollToSection(section) {
  if (route.path !== "/kara") {
    router.push({ path: "/kara", hash: `#${section}` });
    return;
  }

  const el = document.getElementById(section);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}
</script>

<style scoped lang="scss">
@use "@/creators/kara/styles/karaTokens.scss" as *;

/* ===============================
   MAIN HEADER WRAPPER
=============================== */
.kara-header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 150;

  background: rgba(10, 15, 18, 0.55);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  padding: 1.1rem 0;

  transition: background 0.35s ease, backdrop-filter 0.35s ease,
    border-color 0.35s ease, padding 0.35s ease;
}

/* Stronger presence when scrolled */
.kara-header.scrolled {
  background: rgba(10, 15, 18, 0.82);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);

  padding: 0.8rem 0;
}

/* ===============================
   INNER CONTENT ALIGNMENT
   Now synced to 1300px layout
=============================== */
.header-inner {
  max-width: 1300px; /* ← Updated from 1180px */
  margin: 0 auto;
  padding: 0 2.2rem; /* Same side padding as layout */

  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* ===============================
   LOGO
=============================== */
.logo img {
  width: 46px;
  opacity: 0.95;
  cursor: pointer;
  transition: opacity 0.25s ease;
}

.logo img:hover {
  opacity: 1;
}

/* ===============================
   NAVIGATION
=============================== */
.nav .link {
  background: none;
  border: none;
  cursor: pointer;
  font: inherit;
  color: $color-text-primary;

  margin-left: 2rem;
  padding: 0 0 3px;

  letter-spacing: 0.04em;

  position: relative;
  transition: color 0.25s ease;
}

.nav .link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;

  width: 0%;
  height: 2px;
  background: $color-accent;

  transition: width 0.25s ease;
}

.nav .link:hover::after {
  width: 100%;
}
</style>
