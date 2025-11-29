<template>
  <section class="kara-hero reveal">
    <h1 class="title">KARA</h1>

    <p class="subtitle">
      Cutting through the noise.<br />
      Minimal systems. Monochrome logic.<br />
      A showcase of structured chaos.
    </p>
  </section>
</template>

<style scoped lang="scss">
.kara-hero {
  text-align: center;
  padding: 5rem 2rem 3rem;
}

.title {
  font-size: clamp(3.2rem, 6vw, 4.6rem);
  color: #f2f2f2;
  letter-spacing: 0.07em;
  margin-bottom: 1.2rem;
}

.subtitle {
  color: #bfbfbf;
  font-size: 1.2rem;
  line-height: 1.7;
  opacity: 0;
  animation: fadeIn 1.4s ease forwards;
  animation-delay: 0.4s;
}
@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>
