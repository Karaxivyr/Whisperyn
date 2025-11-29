<template>
  <section id="kara-work" class="kara-projects-section reveal">
    <h2 class="kara-projects__label">Work</h2>

    <div class="kara-projects__grid">
      <!-- Placeholder card to be replaced with live GitHub data later -->
      <article class="kara-project-card kara-project-card--placeholder">
        <h3>Coming Soon</h3>
        <p>
          Repository highlights, pinned projects, and open-source systems will
          appear here. This grid is designed for live GitHub data.
        </p>
      </article>
    </div>
  </section>
</template>

<script setup></script>

<style scoped lang="scss">
.kara-projects-section {
  padding: 0 2.4rem 1.2rem;
}

.kara-projects__label {
  text-align: center;
  text-transform: uppercase;
  font-size: 0.86rem;
  letter-spacing: 0.16em;
  color: #b4bdc9;
  margin-bottom: 1.5rem;
}

.kara-projects__grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.kara-project-card {
  border-radius: 16px;
  padding: 1.8rem;
  background: radial-gradient(
      circle at top left,
      rgba(143, 212, 210, 0.08),
      transparent 70%
    ),
    rgba(19, 22, 27, 0.98);
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.7), 0 0 22px rgba(143, 212, 210, 0.09);
  transition: transform 0.24s ease, box-shadow 0.24s ease, opacity 0.24s ease;
}

.kara-project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 26px 60px rgba(0, 0, 0, 0.85),
    0 0 32px rgba(143, 212, 210, 0.16);
  opacity: 1;
}

.kara-project-card h3 {
  margin: 0 0 0.6rem;
  font-size: 1.05rem;
  color: #e7ecf3;
}

.kara-project-card p {
  margin: 0;
  font-size: 0.95rem;
  color: #c2cad5;
  line-height: 1.7;
}

/* subtle float animation */
.kara-project-card--placeholder {
  animation: karaFloat 6s ease-in-out infinite alternate;
}

@keyframes karaFloat {
  0% {
    transform: translateY(0);
    opacity: 0.95;
  }
  100% {
    transform: translateY(-8px);
    opacity: 1;
  }
}
</style>
