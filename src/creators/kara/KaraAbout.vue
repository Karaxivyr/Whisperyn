<template>
  <section class="kara-about-section reveal">
    <div class="kara-about-card">
      <h2 class="label">ABOUT</h2>

      <p>
        Kara is a mixed-discipline builder, developer, designer, and system
        crafter. His work blends monochrome minimalism, sharp structure, and
        controlled chaos.
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.kara-about-section {
  display: flex;
  justify-content: center;
  padding: 0 2rem;
}

.kara-about-card {
  max-width: 900px;
  padding: 2rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(6px);
}

.label {
  font-size: 0.85rem;
  letter-spacing: 0.15em;
  color: #b0b0b0;
  text-transform: uppercase;
  margin-bottom: 1rem;
}
</style>
