<template>
  <section id="kara-about" class="kara-about-section reveal">
    <div class="kara-about-card">
      <h2 class="kara-about__label">About</h2>

      <p>
        Kara is a mixed-discipline builder, developer, designer, and system
        crafter. His work blends monochrome minimalism, sharp structure, and
        controlled chaos.
      </p>
      <p>
        This space collects experiments, prototypes, and projects that orbit
        around clarity, precision, and deliberate, neutral aesthetics.
      </p>
    </div>
  </section>
</template>

<script setup></script>

<style scoped lang="scss">
.kara-about-section {
  display: flex;
  justify-content: center;
  padding: 0 2.4rem;
}

.kara-about-card {
  max-width: 900px;
  padding: 2.2rem 2rem;
  border-radius: 18px;
  background: radial-gradient(
      circle at top left,
      rgba(143, 212, 210, 0.08),
      transparent 60%
    ),
    rgba(19, 22, 27, 0.94);
  border: 1px solid rgba(255, 255, 255, 0.07);
  box-shadow: 0 18px 38px rgba(0, 0, 0, 0.7), 0 0 32px rgba(143, 212, 210, 0.08);
}

.kara-about__label {
  text-transform: uppercase;
  font-size: 0.86rem;
  letter-spacing: 0.16em;
  color: #b4bdc9;
  margin-bottom: 1.1rem;
}

.kara-about-card p {
  margin: 0 0 0.9rem;
  font-size: 0.98rem;
  color: #c3cad4;
  line-height: 1.7;
}

.kara-about-card p:last-of-type {
  margin-bottom: 0;
}
</style>
