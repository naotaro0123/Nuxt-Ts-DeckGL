import { shallowMount } from '@vue/test-utils';
import NumberRenderer from '~/components/NumberRenderer.vue';

describe('NumberRenderer', () => {
  it('偶数をレンダー', () => {
    const wrapper = shallowMount(NumberRenderer, {
      propsData: {
        event: true
      }
    });
    expect(wrapper.text()).toBe('2, 4, 6, 8');
  });
});
