<template>
  <section id="projects" class="projects-wrapper">
    <!-- PANEL -->
    <div class="projects-panel">
      <div class="panel-header">
        <h2 class="section-title">Projects</h2>
        <p class="section-subtitle">
          Work shaped by clarity, structure, and deliberate execution.
        </p>
      </div>

      <!-- GRID INSIDE PANEL -->
      <div class="projects-grid">
        <div v-for="p in projects" :key="p.title" class="project-card">
          <h3 class="project-title">{{ p.title }}</h3>
          <p class="project-desc">{{ p.desc }}</p>

          <div class="project-line"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  { title: "Project 1", desc: "Coming soon." },
  { title: "Project 2", desc: "Coming soon." },
  { title: "Project 3", desc: "Coming soon." },
];
</script>

<style scoped lang="scss">
@use "@/creators/kara/styles/karaTokens.scss" as *;

/* ============================================================
   PROJECTS WRAPPER
============================================================ */
.projects-wrapper {
  margin-top: 6rem;
  display: flex;
  justify-content: center;
}

/* ============================================================
   PANEL — GITS CUT + GLASS BLUR
============================================================ */
.projects-panel {
  width: 100%;
  max-width: 1300px;
  padding: 3rem 2.5rem;

  background: rgba(15, 18, 22, 0.45);
  backdrop-filter: blur(18px) saturate(1.05);

  border: 1px solid rgba($color-accent, 0.22);
  border-radius: 22px;

  clip-path: polygon(0% 0%, 88% 0%, 100% 12%, 100% 100%, 0% 100%);

  position: relative;
  overflow: hidden;
}

/* Soft geometric overlay texture */
.projects-panel::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("@/creators/kara/assets/images/kara-background.webp");
  background-size: 180%;
  background-position: center;
  opacity: 0.08;
  mix-blend-mode: overlay;
  pointer-events: none;
}

/* ============================================================
   PANEL HEADER
============================================================ */
.panel-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.section-title {
  font-size: 2rem;
  color: $color-text-primary;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  color: $color-text-secondary;
  opacity: 0.9;
  font-size: 1.05rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.5;
}

/* ============================================================
   GRID
============================================================ */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.75rem;
}

/* ============================================================
   PROJECT CARD
============================================================ */
.project-card {
  padding: 1.5rem 1.75rem;

  background: rgba(16, 19, 22, 0.32);
  border: 1px solid rgba($color-accent, 0.12);
  border-radius: 16px;

  backdrop-filter: blur(10px) saturate(1.1);

  clip-path: polygon(0% 0%, 90% 0%, 100% 12%, 100% 100%, 0% 100%);

  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.5),
    inset 0 0 14px rgba($color-accent, 0.15);
}

/* ============================================================
   TEXT
============================================================ */
.project-title {
  color: $color-text-primary;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.project-desc {
  color: $color-text-secondary;
  opacity: 0.9;
  margin-bottom: 1rem;
}

/* Cyber line */
.project-line {
  width: 100%;
  height: 2px;
  background: linear-gradient(
    to right,
    rgba($color-accent, 0.5),
    rgba($color-accent, 0)
  );
  border-radius: 999px;
}
</style>
