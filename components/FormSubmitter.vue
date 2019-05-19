<template>
  <div>
    <form>
      <input v-model="username" type="text" data-username />
      <input type="submit" @click="handleSubmit" />
    </form>
    <div v-if="submitted" class="message">
      {{ username }}さん、お問い合わせ、ありがとうございます。
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class FormSubmitter extends Vue {
  public username: string = '';
  public submitted: boolean = false;

  public handleSubmit() {
    this.submitted = true;
  }
}
</script>
