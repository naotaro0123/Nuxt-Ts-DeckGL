import { shallowMount } from '@vue/test-utils';
import SubmitButton from '~/components/SubmitButton.vue';

const msg = '送信する';
const factory = propsData => {
  return shallowMount(SubmitButton, {
    propsData: {
      msg,
      ...propsData
    }
  });
};

describe('SubmitButton.vue', () => {
  it('権限がない', () => {
    const wrapper = factory({});

    // eslint-disable-next-line no-console
    console.log(wrapper.html());
    expect(wrapper.find('span').text()).toBe('権限がありません');
    expect(wrapper.find('button').text()).toBe('送信する');
  });

  it('権限がある状態のメッセージを表示する', () => {
    const wrapper = factory({ isAdmin: true });

    // eslint-disable-next-line no-console
    console.log(wrapper.html());
    expect(wrapper.find('span').text()).toBe('管理者権限を実行する');
    expect(wrapper.find('button').text()).toBe('送信する');
  });
});
