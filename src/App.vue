<template>
  <!-- Accessibility shortcut -->
  <a class="skip-link" href="#main">Skip to content</a>

  <!-- Whisperyn global header (only on main site) -->
  <MainHeader v-if="!isCreatorRoute" />

  <main id="main">
    <router-view />
  </main>

  <!-- Whisperyn global footer (only on main site) -->
  <MainFooter v-if="!isCreatorRoute" />
</template>

<script setup>
import { computed, watch } from "vue";
import { useRoute } from "vue-router";

import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";

const route = useRoute();

/* Detect creator microsites */
const creatorPrefixes = ["/kara"];

const isCreatorRoute = computed(() =>
  creatorPrefixes.some((prefix) => route.path.startsWith(prefix))
);

/* Dynamic SEO injection */
watch(
  () => route.meta,
  (meta) => {
    if (meta.title) document.title = meta.title;

    if (meta.description) {
      let tag = document.querySelector('meta[name="description"]');

      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }

      tag.setAttribute("content", meta.description);
    }
  },
  { immediate: true }
);
</script>

<style scoped lang="scss">
.skip-link {
  position: absolute;
  top: 0;
  left: -999px;
  padding: 8px 12px;
  background: #ffffff;
  color: #000;
  z-index: 9999;
  border-radius: 4px;
  transition: left 0.25s ease;

  &:focus {
    left: 10px;
  }
}
</style>
