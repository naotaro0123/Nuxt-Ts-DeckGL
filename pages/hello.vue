<template>
  <section class="container">
    <div>
      <logo />
    </div>
    <canvas id="deckgl-canvas"></canvas>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Logo from '~/components/Logo.vue';
// eslint-disable-next-line no-unused-vars
import { Deck } from '@deck.gl/core';
// eslint-disable-next-line no-unused-vars
import { LineLayer, LineLayerDatum } from '@deck.gl/layers';

interface ViewState {
  longitude: number;
  latitude: number;
  zoom: number;
  pitch: 0;
  bearing: 0;
}

const viewState: ViewState = {
  longitude: -122.41699,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0
};

const data: LineLayerDatum[] = [
  {
    sourcePosition: [-122.41699, 37.7853],
    targetPosition: [-122.41699, 37.781]
  }
];

@Component({
  components: {
    Logo
  }
})
export default class Hello extends Vue {
  private layers = new LineLayer({ id: 'line-layer', data });
  private deck = new Deck({
    canvas: 'deckgl-canvas',
    viewState: viewState,
    layers: this.layers
  });
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
