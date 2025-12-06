<template>
  <section id="about" class="about-section">
    <div class="about-card">
      <h2 class="title">About</h2>

      <p class="text">
        I build with calm structure, efficient hierarchy, and intentional
        design. I prefer clarity over noise, pattern over chaos, and quiet
        refinement over spectacle.
      </p>

      <div class="traits">
        <span class="trait">Structure</span>
        <span class="trait">Hierarchy</span>
        <span class="trait">Refinement</span>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "@/creators/kara/styles/karaTokens.scss" as *;

/* ============================================================
   SECTION SPACING + CENTERING
============================================================ */
.about-section {
  position: relative;
  margin: 6rem auto 3rem;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1300px;
  height: 350px;
}

/* ============================================================
   ABOUT CARD — MATCHES HERO CUT
============================================================ */
.about-card {
  position: relative;
  width: 100%;
  max-width: 1300px;

  padding: 2.5rem 2.8rem;

  background: rgba(16, 19, 22, 0.45);
  backdrop-filter: blur(14px) saturate(1.08);

  border: 1px solid rgba($color-accent, 0.22);

  /* SAME EXACT CUT AS HERO PANEL */
  clip-path: polygon(0% 0%, 92% 0%, 100% 12%, 100% 100%, 0% 100%);

  border-radius: 16px;
  animation: aboutFade 0.6s ease-out forwards;
  opacity: 0;
}

/* Soft fade-in */
@keyframes aboutFade {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

/* ============================================================
   CARD TEXT
============================================================ */
.title {
  color: $color-text-primary;
  font-size: 1.9rem;
  margin-bottom: 1rem;
  letter-spacing: 0.03em;
}

.text {
  color: $color-text-secondary;
  line-height: 1.6;
  max-width: 750px;
  font-size: 1.05rem;
  margin-bottom: 1.7rem;
  opacity: 0.95;
}

/* ============================================================
   TRAITS TAGS — MATCH HERO STYLE
============================================================ */
.traits {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.trait {
  padding: 0.45rem 0.95rem;
  border-radius: 10px;

  border: 1px solid rgba($color-accent, 0.25);
  background: rgba($color-accent, 0.1);

  color: $color-accent;
  font-size: 0.9rem;

  box-shadow: inset 0 0 12px rgba($color-accent, 0.12),
    0 2px 8px rgba(0, 0, 0, 0.25);
}

/* ============================================================
   RESPONSIVE
============================================================ */
@media (max-width: 700px) {
  .about-card {
    padding: 2rem;
    clip-path: none;
    border-radius: 14px;
  }
}
</style>
