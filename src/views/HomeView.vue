<template>
  <div class="home">
    <!-- Background (forest mesh) -->
    <div class="home__background" :style="backgroundStyle"></div>

    <main class="home__content">
      <!-- ================================ -->
      <!-- 1. HERO BANNER WITH LODGE IMAGE -->
      <!-- ================================ -->
      <section id="hero" class="hero-banner">
        <img
          :src="lodgeBanner"
          alt="Whisperyn Lodge"
          class="hero-banner__image"
        />

        <div class="hero-banner__overlay">
          <h1 class="hero-banner__title">
            A Quiet Lodge on the Edge of the Mesh
          </h1>
          <p class="hero-banner__subtitle">
            A refuge for our people. A place of calm, craft, and camaraderie.
          </p>
        </div>
      </section>

      <section class="foundations">
        <div class="foundations__container">
          <h2 class="section-title">Foundations</h2>

          <div class="foundations__grid">
            <article class="foundation-card">
              <h3>Respect</h3>
              <p>
                We uphold a culture where every voice carries weight, space, and
                humanity.
              </p>
            </article>

            <article class="foundation-card">
              <h3>Integrity</h3>
              <p>
                Consistency, honesty, and personal accountability define the
                Whisperyn ethos.
              </p>
            </article>

            <article class="foundation-card">
              <h3>Dignity</h3>
              <p>
                Everyone deserves a place where they can exist without judgment
                or diminishment.
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- ================================ -->
      <!-- 3. CREATORS (MATCH HERO + FOUNDATIONS) -->
      <!-- ================================ -->
      <section id="creators" class="creators">
        <div class="creators__container">
          <h2 class="section-title">Creators</h2>

          <div class="creators__grid">
            <RouterLink class="creator-card" to="/kara">
              <img :src="logoLight" class="creator-card__icon" />
              <h3>Kara</h3>
              <p>The first of the Whisperyn line.</p>
            </RouterLink>

            <!-- More creators go here -->
            <!-- Copy/paste <RouterLink> blocks as needed -->
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { computed } from "vue";

import forest from "@/assets/images/whisperyn-forest-cyber-4096.webp";
import lodgeBanner from "@/assets/images/whisperyn-lodge-main.webp"; // NEW
import logoLight from "@/assets/images/whisperyn-logo-light-1024.webp";

const backgroundStyle = computed(() => ({
  backgroundImage: `linear-gradient(to bottom, rgba(2,7,20,0.88), rgba(2,7,20,0.96)), url(${forest})`,
}));
</script>

<style scoped lang="scss">
@use "@/assets/styles/variables" as *;

.home {
  position: relative;
  min-height: 100vh;
}

/* Background forest */
.home__background {
  position: fixed;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: saturate(1.05);
  z-index: 0;
}

.home__content {
  position: relative;
  z-index: 1;
  padding: 2rem clamp(1.5rem, 4vw, 4rem);
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
}

/* ===================== */
/* HERO BANNER SECTION   */
/* ===================== */
.hero-banner {
  position: relative;

  /* NEW: reduce total width + center it */
  max-width: 1080px; /* adjust freely: try 1500px or 1400px if you want it even smaller */
  margin: 0 auto; /* centers the banner */
  width: 100%;

  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 16px 50px rgba(0, 0, 0, 0.48);

  /* Height stays balanced */
  height: clamp(280px, 42vh, 520px);
}

.hero-banner__image {
  width: 100%;
  height: 100%;
  object-fit: cover;

  /*
    NEW: adjust focal point so the logo + lodge stay centered
    while giving top/bottom more image presence
  */
  object-position: center 38%;

  display: block;
  filter: brightness(0.88);
}

.hero-banner__overlay {
  position: absolute;
  bottom: 1.75rem;
  left: 1.75rem;
  right: 1.75rem;

  background: linear-gradient(to top, rgba(0, 0, 0, 0.38), rgba(0, 0, 0, 0));

  padding: 1.3rem;
  border-radius: 14px;
}

.hero-banner__title {
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  margin: 0;
  text-shadow: 0 4px 22px rgba(0, 0, 0, 0.75);
}

.hero-banner__subtitle {
  margin-top: 0.6rem;
  font-size: 1rem;
  color: var(--color-muted);
  max-width: 40rem;
}

/* ===================== */
/* FOUNDATIONS SECTION   */
/* ===================== */

.foundations {
  width: 100%;

  /* Matches hero-banner width + centering */
  display: flex;
  justify-content: center;
}

.foundations__container {
  width: 100%;
  max-width: 1080px; /* Matches hero banner container */
  padding-top: 1rem;
}

.section-title {
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.9rem;
  opacity: 0.9;
  margin-bottom: 1.4rem;
  padding-left: 0.25rem;
}

/* Grid for 3 pillars */
.foundations__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

/* Pillar Cards (match Hero aesthetic) */
.foundation-card {
  background: rgba(4, 14, 30, 0.78); /* Glass-like dark */
  border-radius: 20px;
  border: 1px solid rgba(200, 223, 255, 0.12);

  padding: 1.5rem 1.75rem;

  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.35),
    inset 0 0 40px rgba(80, 200, 255, 0.02); /* Subtle cyber glow */
}

.foundation-card h3 {
  margin: 0 0 0.6rem;
  font-size: 1rem;
  color: #ffffff;
}

.foundation-card p {
  margin: 0;
  font-size: 0.95rem;
  color: var(--color-muted);
  line-height: 1.55;
}

/* Responsive behavior */
@media (max-width: 1020px) {
  .foundations__grid {
    grid-template-columns: 1fr;
  }
}

/* ===================== */
/* CREATORS SECTION      */
/* ===================== */

.creators {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
}

.creators__container {
  width: 100%;
  max-width: 1080px; /* MATCHES HERO + FOUNDATIONS */
}

.creators__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(260px, 1fr));
  gap: 1.25rem;
  margin-top: 1.25rem;
}

/* Creator Card Style (matches Foundations) */
.creator-card {
  background: rgba(4, 14, 30, 0.78); /* same tone */
  backdrop-filter: blur(14px);

  border-radius: 20px;
  border: 1px solid rgba(200, 223, 255, 0.12);

  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.35),
    inset 0 0 40px rgba(80, 200, 255, 0.02);

  padding: 1.75rem 1.5rem;
  text-align: center;

  transition: transform 0.25s ease, opacity 0.25s ease;
}

.creator-card:hover {
  transform: translateY(-4px);
  opacity: 0.95;
}

/* Creator icon */
.creator-card__icon {
  width: 50px;
  height: 50px;
  margin-bottom: 0.75rem;

  filter: brightness(1.2) drop-shadow(0 0 6px rgba(80, 200, 255, 0.28));
}

.creator-card h3 {
  margin: 0.4rem 0;
  font-size: 1.1rem;
}

.creator-card p {
  font-size: 0.95rem;
  color: var(--color-muted);
  margin: 0;
}

/* Responsive */
@media (max-width: 900px) {
  .creators__grid {
    grid-template-columns: 1fr;
  }
}
</style>
