<template>
  <footer class="kara-footer reveal">
    <div class="kara-footer__inner">
      <div class="kara-footer__logo">
        <!-- Placeholder for Kara sigil / icon -->
      </div>

      <div class="kara-footer__info">
        © {{ year }} Kara — All systems reserved.
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>

<style scoped lang="scss">
.kara-footer {
  background: #0f0f0f;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 2.2rem 1rem;
  text-align: center;
}

.kara-footer__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.kara-footer__logo {
  width: 46px;
  height: 46px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
}

.kara-footer__info {
  color: #9e9e9e;
  font-size: 0.85rem;
}
</style>
