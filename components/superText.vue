<template>
  <div>
    <p>{{ this.$store.state.langMode.Index.MainText }}</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 2em;
}

p {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
}
</style>

