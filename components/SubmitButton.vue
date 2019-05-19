<template>
  <div>
    <span v-if="isAdmin">管理者権限を実行する</span>
    <span v-else>権限がありません</span>
    <button>
      {{ msg }}
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class SubmitButton extends Vue {
  @Prop() msg?: string;
  @Prop() isAdmin?: boolean;
}
</script>
