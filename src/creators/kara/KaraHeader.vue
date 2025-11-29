<template>
  <header class="kara-header reveal">
    <div class="kara-header__inner">
      <!-- Placeholder for Kara sigil logo -->
      <div class="kara-logo-slot">
        <!-- drop-in Kara SVG later -->
      </div>

      <RouterLink to="/" class="kara-return">
        ← Return to Whisperyn
      </RouterLink>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped lang="scss">
.kara-header {
  padding: 1.4rem 2rem;
  background: #0f0f0f;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  position: sticky;
  top: 0;
  z-index: 50;
}

.kara-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.kara-logo-slot {
  width: 42px;
  height: 42px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
}

.kara-return {
  color: #b5b5b5;
  font-size: 0.9rem;
  text-decoration: none;
}
.kara-return:hover {
  color: #ffffff;
}
</style>
