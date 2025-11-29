<template>
  <!-- Whisperyn global header only on main site routes -->
  <MainHeader v-if="!isCreatorRoute" layout="center" />

  <router-view />

  <!-- Whisperyn footer only on main site routes -->
  <MainFooter v-if="!isCreatorRoute" />
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";

const route = useRoute();

// Any route starting with /kara, /okami, /slaynagrey, etc.
const creatorPrefixes = ["/kara"];

// detect if this page is a creator microsite
const isCreatorRoute = computed(() =>
  creatorPrefixes.some((prefix) => route.path.startsWith(prefix))
);
</script>
