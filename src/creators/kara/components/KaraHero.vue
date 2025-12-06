<template>
  <section class="kara-hero">
    <!-- Hero Image Container with Matching Polygon Cut -->
    <div class="hero-image"></div>

    <!-- Text Panel with Matching Polygon Cut -->
    <div class="hero-panel">
      <h1 class="title">Kara</h1>
      <p class="subtitle">Structured. Minimal. Intentional.</p>

      <div class="values">
        <span class="value">Precision</span>
        <span class="value">Clarity</span>
        <span class="value">Intention</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import heroImg from "@/creators/kara/assets/images/kara-hero.webp";
</script>

<style scoped lang="scss">
@use "@/creators/kara/styles/karaTokens.scss" as *;

/* -------------------------------------------------------------------------
   HERO WRAPPER
---------------------------------------------------------------------------*/
.kara-hero {
  position: relative;
  width: 100%;
  max-width: 1300px;
  height: 350px;
  margin: 6rem auto 3rem;
  display: flex;
  align-items: center;

  /* matching GITS cut shape for hero container */
  clip-path: polygon(0% 0%, 92% 0%, 100% 12%, 100% 100%, 0% 100%);

  border-radius: 20px;
  overflow: hidden;
}

/* -------------------------------------------------------------------------
   HERO IMAGE WITH MATCHING CUT
---------------------------------------------------------------------------*/
.hero-image {
  position: absolute;
  inset: 0;

  background-image: url("@/creators/kara/assets/images/kara-hero.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  filter: brightness(0.85) contrast(1.1);
}

/* -------------------------------------------------------------------------
   PANEL — ALSO MATCHES SAME CUT
---------------------------------------------------------------------------*/
.hero-panel {
  position: relative;
  z-index: 3;

  width: 320px;
  margin-left: 2rem;

  padding: 1.8rem 2rem;

  background: rgba(12, 14, 16, 0.52);
  backdrop-filter: blur(14px) contrast(1.08);
  border: 1px solid rgba($color-accent, 0.22);

  /* SAME CUT AS HERO CONTAINER */
  clip-path: polygon(0% 0%, 92% 0%, 100% 12%, 100% 100%, 0% 100%);

  border-radius: 14px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.35),
    inset 0 0 12px rgba($color-accent, 0.05);
}

/* PANEL TEXT */
.title {
  font-size: 2.4rem;
  margin-bottom: 0.3rem;
  color: $color-text-primary;
}

.subtitle {
  margin-bottom: 1.4rem;
  font-size: 1rem;
  color: $color-text-secondary;
  opacity: 0.9;
}

.values {
  display: flex;
  flex-direction: row;
  gap: 0.45rem;
}

.value {
  padding: 0.35rem 0.75rem;
  width: fit-content;

  border-radius: 8px;
  border: 1px solid rgba($color-accent, 0.26);
  background: rgba($color-accent, 0.1);

  color: $color-accent;
}

/* RESPONSIVE FIXES */
@media (max-width: 800px) {
  .hero-panel {
    width: 85%;
    margin-left: 1rem;
  }
}

@media (max-width: 600px) {
  .kara-hero {
    height: 300px;
  }

  .hero-panel {
    clip-path: none;
    border-radius: 14px;
    width: 90%;
    margin: 0 auto;
  }
}
</style>
