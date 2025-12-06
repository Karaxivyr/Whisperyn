<template>
  <div class="kara-layout">
    <!-- TRUE BACKGROUND IMAGE LAYER -->
    <div
      class="kara-bg"
      :style="{
        backgroundImage: `url(${karaBg})`,
      }"
    ></div>

    <!-- BLUR & DARKEN OVERLAY -->
    <div class="kara-bg-blur"></div>

    <!-- CONTENT -->
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
import KaraHeader from "../components/KaraHeader.vue";
import KaraHero from "../components/KaraHero.vue";
import KaraAbout from "../views/KaraAbout.vue";
import KaraProjects from "../views/KaraProjects.vue";
import KaraFooter from "../components/KaraFooter.vue";

/* Guaranteed absolute import */
import karaBg from "@/creators/kara/assets/images/kara-background.webp";
</script>

<style scoped lang="scss">
@use "@/creators/kara/styles/karaFrame.scss";

/* WRAPPER */
.kara-layout {
  position: relative;
  min-height: 100vh;
  overflow: hidden; /* Needed for blur edge control */
}

/* ===========================================
   1. RAW BACKGROUND IMAGE (no blur here)
=========================================== */
.kara-bg {
  position: fixed;
  inset: 0;
  z-index: 0;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

/* ===========================================
   2. BLUR + DARKEN LAYER
   (This affects the bg image but NOT content)
=========================================== */
.kara-bg-blur {
  position: fixed;
  inset: 0;
  z-index: 1;

  background: rgba(10, 10, 12, 0.45); /* mesh tone — adjust as needed */

  /* BLUR THE BACKGROUND ONLY */
  backdrop-filter: blur(10px) brightness(0.8);

  pointer-events: none;
}

/* ===========================================
   CONTENT AREA
=========================================== */
.kara-main {
  position: relative;
  z-index: 5;
  margin: 0 auto;
  padding: 6rem 2rem 4rem;
  max-width: 1080px;
}
</style>
