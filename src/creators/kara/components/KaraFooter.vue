<template>
  <footer class="kara-footer">
    <div class="word-cloud">
      <span v-for="(w, i) in words" :key="i" class="wc-word">{{ w }}</span>
    </div>

    <div class="copyright">© 2025 Karaxivyr — Whisperyn Network</div>
  </footer>
</template>

<script setup></script>

<style scoped lang="scss">
@use "@/creators/kara/styles/karaTokens.scss" as *;

.kara-footer {
  position: relative;
  width: 100%;
  padding: 2.6rem 1rem;
  margin-top: 6rem;
  z-index: 150;

  background: rgba(10, 14, 16, 0.55);
  backdrop-filter: blur(4px);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  text-align: center;
  overflow: hidden;
}

/* COPYRIGHT TEXT */
.copyright {
  position: relative;
  z-index: 10;
  color: $text-secondary;
  opacity: 1;
  font-size: 1rem;
}
</style>
