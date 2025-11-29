<template>
  <footer class="footer">
    <div class="footer__inner">
      <span class="footer__primary">© {{ year }} Whisperyn</span>
      <span class="footer__secondary">Respect • Integrity • Dignity</span>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>

<style scoped lang="scss">
@use "@/assets/styles/variables" as *;

.footer {
  width: 100%;
  margin-top: 3rem;
  padding: 1.1rem 2rem;

  border-top: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(4, 14, 30, 0.82);
  backdrop-filter: blur(12px);

  display: flex;
  justify-content: center;
}

.footer__inner {
  width: 100%;
  max-width: 1600px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  font-size: 0.82rem;
  color: var(--color-muted);
  opacity: 0.9;
}

.footer__secondary {
  opacity: 0.75;
}

/* Mobile / small screen stack */
@media (max-width: $bp-small) {
  .footer__inner {
    flex-direction: column;
    gap: 0.35rem;
    text-align: center;
  }
}
</style>
