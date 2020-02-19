<template>
  <div>
    <switcherThemeMode />
    <squareColorsRow />
    <switcherLangMode />
    <superText />
  </div>
</template>

<script>
import switcherThemeMode from "../components/switcherThemeMode";
import squareColorsRow from "../components/squareColorsRow";
import switcherLangMode from "../components/switcherLangMode";
import superText from "../components/superText";

export default {
  components: {
    squareColorsRow,
    switcherThemeMode,
    switcherLangMode,
    superText
  }
};
</script>
