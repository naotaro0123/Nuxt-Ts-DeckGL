import { shallowMount } from '@vue/test-utils';
import FormSubmitter from '~/components/FormSubmitter.vue';

describe('FormSubmitter', () => {
  it('フォームを更新するとお知らせを表示', () => {
    const wrapper = shallowMount(FormSubmitter);
    const username = wrapper.find('input[data-username]');
    username.setValue('alice');
    wrapper.find('input[type="submit"]').trigger('click');

    // eslint-disable-next-line no-console
    console.log(wrapper.html());

    expect(wrapper.find('.message').text()).toBe(
      'aliceさん、お問い合わせ、ありがとうございます。'
    );
  });
});
