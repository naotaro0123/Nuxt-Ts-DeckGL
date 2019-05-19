<template>
  <di>
    {{ numbers }}
  </di>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class NumberRenderer extends Vue {
  private get numbers() {
    const evens: number[] = [];
    for (let i = 1; i < 10; i++) {
      if (i % 2 === 0) {
        evens.push(i);
      }
    }
    return evens.join(', ');
  }
  @Prop() even?: boolean;
}
</script>
