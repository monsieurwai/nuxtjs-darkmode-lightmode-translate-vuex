<template>
  <div>
    <button v-on:click="changeTheme">Switch theme</button>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {
    themeMode() {
      return this.$store.state.themeMode;
    }
  },
  methods: {
    changeTheme() {
      this.$store.commit("changeTheme");
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 2em;
}

button {
  text-transform: uppercase;
  padding: 1em 2em;
  background-color: var(--bg-color);
  font-family: 'Roboto', sans-serif;
  border: 1px solid var(--secondary-color);
}
</style>

