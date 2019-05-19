<template>
  <div>
    {{ greeting }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Greeting extends Vue {
  data() {
    return {
      greeting: 'Vue without TDD'
    };
  }
}
</script>
