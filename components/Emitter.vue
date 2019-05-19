<template>
  <div></div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';

@Component
export default class Emitter extends Vue {
  @Emit()
  public emitEvent() {
    this.$emit('myEvent', 'name', 'password');
  }
}
</script>
