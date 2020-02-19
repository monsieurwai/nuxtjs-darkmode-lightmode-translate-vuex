<template>
  <div class="main-container" v-bind:data-theme="themeMode">
    <nuxt />
  </div>
</template>

<script>
export default {
  computed: {
    themeMode() {
      return this.$store.state.themeMode;
    },
    langMode() {
      return this.$store.state.langMode;
    }
  }
};
</script>

<style lang="scss">
.main-container {
  height: 100vh;
  width: 100%;
  background-color: var(--bg-color);
  color: var(--font-color);
}
</style>
