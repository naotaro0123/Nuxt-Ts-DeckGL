import { shallowMount } from '@vue/test-utils';
import Emitter from '~/components/Emitter.vue';

describe('Emitter', () => {
  it('２つの引数があるイベントを発火する', () => {
    const wrapper = shallowMount(Emitter);
    (wrapper.vm as any).emitEvent();

    // eslint-disable-next-line no-console
    console.log(wrapper.emitted());
    expect(wrapper.emitted().myEvent[0]).toEqual(['name', 'password']);
  });
});
