<template>
  <div class="home">
    <!-- Background -->
    <div class="home__background" :style="backgroundStyle"></div>

    <main class="home__content">
      <!-- ================================ -->
      <!-- 1. HERO BANNER (RESPONSIVE)     -->
      <!-- ================================ -->
      <section id="hero" class="hero-banner">
        <picture>
          <!-- AVIF highest quality -->
          <source
            :srcset="`
              ${heroAvif1024} 1024w,
              ${heroAvif768} 768w
            `"
            type="image/avif"
          />

          <!-- WEBP fallback -->
          <source
            :srcset="`
              ${heroWebp1024} 1024w,
              ${heroWebp768} 768w
            `"
            type="image/webp"
          />

          <!-- Default fallback -->
          <img
            :src="heroFallback"
            alt="Whisperyn lodge surrounded by forest and the digital mesh"
            class="hero-banner__image"
            width="1600"
            height="700"
            loading="eager"
            decoding="async"
          />
        </picture>

        <div class="hero-banner__overlay">
          <h1 class="hero-banner__title">
            A Quiet Lodge on the Edge of the Mesh
          </h1>
          <p class="hero-banner__subtitle">
            A refuge for our people. A place of calm, craft, and camaraderie.
          </p>
        </div>
      </section>
      <!-- ================================ -->
      <!-- FOUNDATIONS (WITH ART PANELS)   -->
      <!-- ================================ -->
      <section id="foundations" class="foundations">
        <div class="foundations__container">
          <h2 class="section-title section-shelf">Foundations</h2>
          <div class="foundations__grid">
            <!-- Respect -->
            <article class="foundation-card reveal">
              <div class="foundation-card__art">
                <picture>
                  <source :srcset="respectArt" type="image/webp" />
                  <img
                    :src="respectArt"
                    alt="Glowing forest grove with intertwined trees, symbolizing Respect."
                    class="foundation-card__image"
                    loading="lazy"
                    width="480"
                    height="260"
                    decoding="async"
                  />
                </picture>
              </div>
              <div class="foundation-card__body">
                <h3>Respect</h3>
                <p>
                  We uphold a culture where every voice carries weight, space,
                  and humanity.
                </p>
              </div>
            </article>
            <!-- Integrity -->
            <article class="foundation-card reveal">
              <div class="foundation-card__art">
                <picture>
                  <source :srcset="integrityArt" type="image/webp" />
                  <img
                    :src="integrityArt"
                    alt="Forest monolith etched with faint cyan runes, symbolizing Integrity."
                    class="foundation-card__image"
                    loading="lazy"
                    width="480"
                    height="260"
                    decoding="async"
                  />
                </picture>
              </div>
              <div class="foundation-card__body">
                <h3>Integrity</h3>
                <p>
                  Consistency, honesty, and personal accountability define the
                  Whisperyn ethos.
                </p>
              </div>
            </article>
            <!-- Dignity -->
            <article class="foundation-card reveal">
              <div class="foundation-card__art">
                <picture>
                  <source :srcset="dignityArt" type="image/webp" />
                  <img
                    :src="dignityArt"
                    alt="Beam of light illuminating a quiet forest clearing, symbolizing Dignity."
                    class="foundation-card__image"
                    loading="lazy"
                    width="480"
                    height="260"
                    decoding="async"
                  />
                </picture>
              </div>
              <div class="foundation-card__body">
                <h3>Dignity</h3>
                <p>
                  Everyone deserves a place where they can exist without
                  judgment or diminishment.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <!-- ================================ -->
      <!-- CREATORS                        -->
      <!-- ================================ -->
      <section id="creators" class="creators">
        <div class="creators__container">
          <h2 class="section-title section-shelf">Creators</h2>

          <div class="creators__grid">
            <RouterLink
              class="creator-card reveal"
              to="/kara"
              itemprop="creator"
              itemscope
              itemtype="https://schema.org/Person"
            >
              <meta itemprop="name" content="Kara" />
              <meta itemprop="url" content="https://yourdomain.com/kara" />
              <meta itemprop="gender" content="Not Specified" />
              <meta itemprop="jobTitle" content="Developer / Designer" />
              <div class="creator-card__background">
                <img
                  :src="karaBanner"
                  alt="Background art for Kara"
                  class="creator-card__bg-image"
                  loading="lazy"
                  decoding="async"
                />
                <div class="creator-card__bg-overlay"></div>
                <div class="creator-card__mesh-lines"></div>
              </div>
              <div class="creator-card__content">
                <img
                  :src="karaLogo"
                  alt="Kara logo"
                  class="creator-card__logo"
                  loading="lazy"
                  decoding="async"
                />
                <h3 class="creator-card__name">Kara</h3>
                <p class="creator-card__desc">
                  Cutting through the noise. A quiet force of structure and
                  minimalism.
                </p>
              </div>
            </RouterLink>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { computed } from "vue";

import { onMounted } from "vue";
import { useScrollReveal } from "@/composables/useScrollReveal";

onMounted(() => {
  const { reveal } = useScrollReveal(".reveal");

  // Reveal these groups
  reveal(document.querySelector(".foundations__grid"));
  reveal(document.querySelector(".creators__grid"));
});

// BACKGROUND IMAGE
import forest from "../assets/images/backgrounds/whisperyn-forest-cyber-4096-1920w.webp";
import karaLogo from "../creators/kara/assets/logos/kara-logo-1024w-1024w.webp";
import karaBanner from "../creators/kara/assets/banners/kara-banner-1080w.webp";

// HERO IMAGE IMPORTS
import heroFallback from "../assets/images/banners/whisperyn-lodge-main-1024w.webp";
import heroAvif1024 from "../assets/images/banners/whisperyn-lodge-main-1024w.avif";
import heroAvif768 from "../assets/images/banners/whisperyn-lodge-main-768w.avif";
import heroWebp1024 from "../assets/images/banners/whisperyn-lodge-main-1024w.webp";
import heroWebp768 from "../assets/images/banners/whisperyn-lodge-main-768w.webp";
// FOUNDATIONS ARTWORK (Forest Sanctum style)
// Make sure these exist in src/assets/images/
import respectArt from "../assets/images/banners/foundation-respect-1024w.webp";
import integrityArt from "../assets/images/banners/foundation-integrity-1024w.webp";
import dignityArt from "../assets/images/banners/foundation-dignity-1024w.webp";

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

/* Background */
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

/* =============================== */
/* SCROLL REVEAL ANIMATIONS        */
/* =============================== */
.reveal {
  opacity: 0;
  transform: translateY(25px);
  transition: opacity 0.65s ease, transform 0.65s ease;
}

.reveal-active {
  opacity: 1;
  transform: translateY(0);
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  .reveal,
  .reveal-active {
    transition: none !important;
    transform: none !important;
    opacity: 1 !important;
  }
}

/* ======================== */
/* HERO BANNER              */
/* ======================== */
.hero-banner {
  position: relative;
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 16px 50px rgba(0, 0, 0, 0.48);
  height: clamp(280px, 42vh, 520px);
}

.hero-banner__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 38%;
  display: block;
  filter: brightness(0.9) contrast(1.05);
}

.hero-banner__overlay {
  position: absolute;
  bottom: 1.75rem;
  left: 1.75rem;
  right: 1.75rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0));
  padding: 1.3rem;
  border-radius: 14px;
}

.hero-banner__title {
  margin: 0;
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  text-shadow: 0 4px 22px rgba(0, 0, 0, 0.75);
}

.hero-banner__subtitle {
  margin-top: 0.6rem;
  font-size: 1rem;
  color: var(--color-muted);
  max-width: 40rem;
}

/* ======================== */
/* FOUNDATIONS SECTION      */
/* ======================== */
.foundations {
  width: 100%;
  display: flex;
  justify-content: center;
}

.foundations__container {
  width: 100%;
  max-width: 1080px;
  padding-top: 1rem;
}

.section-title {
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.9rem;
  opacity: 0.9;
  margin-bottom: 1.4rem;
}

.foundations__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.foundation-card {
  background: rgba(4, 14, 30, 0.9);
  border-radius: 20px;
  border: 1px solid rgba(200, 223, 255, 0.12);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.35),
    inset 0 0 40px rgba(80, 200, 255, 0.02);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* Artwork area */
.foundation-card__art {
  position: relative;
  height: 180px;
  overflow: hidden;
}

.foundation-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: saturate(1.05) brightness(0.96);
}

/* Text body */
.foundation-card__body {
  padding: 1.5rem 1.75rem;
}

.foundation-card h3 {
  margin: 0 0 0.6rem;
  font-size: 1rem;
}

.foundation-card p {
  margin: 0;
  font-size: 0.95rem;
  color: var(--color-muted);
  line-height: 1.55;
}

@media (max-width: 1020px) {
  .foundations__grid {
    grid-template-columns: 1fr;
  }
}

/* =========================== */
/* CREATORS SECTION (FIXED)    */
/* =========================== */

.creators {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
}

.creators__container {
  width: 100%;
  max-width: 1080px; /* matches hero + foundations */
  margin: 0 auto;
}

/* FIXED GRID — perfectly centered, will not push right */
.creators__grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  justify-items: center; /* TRUE centering */
  gap: 1.25rem;
  margin-top: 1.25rem;
}

/* =========================== */
/* COMPACT CREATOR CARD STYLES */
/* =========================== */

.creator-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 100%;
  max-width: 420px; /* ← NEW! Smaller card */
  height: 240px; /* ← Reduced height */

  border-radius: 18px;
  overflow: hidden;
  text-align: center;
  padding: 0;
  cursor: pointer;
  color: #fff;

  background: rgba(4, 14, 30, 0.78);
  border: 1px solid rgba(200, 223, 255, 0.12);
  backdrop-filter: blur(14px);

  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.35),
    inset 0 0 30px rgba(80, 200, 255, 0.02);

  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.creator-card:hover {
  transform: translateY(-4px) scale(1.01);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5),
    inset 0 0 40px rgba(80, 200, 255, 0.07);
}

/* Background */
.creator-card__background {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.creator-card__bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.28; /* slightly softer */
  transform: scale(1.08);
  filter: blur(2px);
  transition: opacity 0.3s ease, transform 0.5s ease;
}

.creator-card:hover .creator-card__bg-image {
  opacity: 0.42;
  transform: scale(1.12);
}

/* Dark overlay */
.creator-card__bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.35),
    rgba(0, 0, 0, 0.75)
  );
}

/* Mesh lines */
.creator-card__mesh-lines {
  position: absolute;
  inset: 0;
  opacity: 0.12;
  background-image: repeating-linear-gradient(
    90deg,
    rgba(80, 200, 255, 0.04) 0,
    rgba(80, 200, 255, 0.04) 1px,
    transparent 1px,
    transparent 6px
  );
  animation: meshShift 20s linear infinite;
}

@keyframes meshShift {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-240px);
  }
}

/* Text content */
.creator-card__content {
  position: relative;
  z-index: 3;
  padding: 0.9rem 0.8rem 1.2rem;
}

.creator-card__logo {
  width: 36px;
  height: 36px;
  margin-bottom: 0.45rem;
  object-fit: contain;
  filter: drop-shadow(0 0 5px rgba(80, 200, 255, 0.25)) brightness(1.15);
}

.creator-card__name {
  margin: 0.2rem 0 0.4rem;
  font-size: 0.95rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.creator-card__desc {
  margin: 0;
  opacity: 0.85;
  font-size: 0.78rem;
  line-height: 1.25;
}

/* Responsive */
@media (max-width: 900px) {
  .creator-card {
    height: 190px;
    max-width: 360px;
  }
}
</style>
