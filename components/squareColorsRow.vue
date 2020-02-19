<template>
    <div class="five-colors-container">
      <div class="colored-square first"></div>
      <div class="colored-square second"></div>
      <div class="colored-square third"></div>
      <div class="colored-square fourth"></div>
      <div class="colored-square last"></div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.five-colors-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 2em;
}

.colored-square {
  height: 100px;
  width: 100px;
  border: 1px solid var(--secondary-color);
  &.first {
    background-color: var(--primary-color);
  }
  &.second {
    background-color: var(--secondary-color);
  }
  &.third {
    background-color: var(--font-color);
  }
  &.fourth {
    background-color: var(--bg-color);
  }
  &.last {
    background-color: var(--heading-color);
  }
}
</style>
