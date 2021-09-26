import { mount } from "@vue/test-utils";
import HelloWorld from '@/components/HelloWorld.vue';

describe('Component', () => {
  test('is a VueInstance', () => {
    const wrapper = mount(HelloWorld)
    expect(wrapper.vm).toBeTruthy()
  })
})