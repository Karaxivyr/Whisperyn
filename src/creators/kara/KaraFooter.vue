<template>
  <footer class="kara-footer reveal">
    <div class="kara-footer__inner">
      <div class="kara-footer__accent">
        <!-- placeholder for a tiny sigil or glyph later -->
      </div>

      <div class="kara-footer__text">
        <span>© {{ year }} Kara</span>
        <span class="kara-footer__subtitle"
          >Monochrome systems. Quiet precision.</span
        >
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>

<style scoped lang="scss">
.kara-footer {
  padding: 1.6rem 2.4rem 2.4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  background: radial-gradient(
    circle at top,
    rgba(143, 212, 210, 0.06),
    #0b0d10
  );
}

.kara-footer__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.9rem;
  flex-wrap: wrap;
}

/* small accent node */
.kara-footer__accent {
  width: 16px;
  height: 16px;
  border-radius: 999px;
  border: 1px solid rgba(143, 212, 210, 0.65);
  box-shadow: 0 0 18px rgba(143, 212, 210, 0.55);
  background: radial-gradient(circle, #ffffff 0, #cdeeed 32%, #0b0f11 100%);
}

.kara-footer__text {
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 0.84rem;
  color: #c1c7d0;
}

.kara-footer__subtitle {
  margin-top: 0.1rem;
  font-size: 0.78rem;
  color: #969eaa;
}

@media (max-width: 640px) {
  .kara-footer__inner {
    flex-direction: column;
    text-align: center;
  }
}
</style>
