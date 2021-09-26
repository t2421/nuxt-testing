import { mount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter Component', () => {
  test('Countup', async () => {
    const wrapper = mount(Counter)
    const button = wrapper.find('button')
    const countText = wrapper.find('.count')
    expect(countText.text()).toBe("0")
    await button.trigger('click')
    expect(countText.text()).toBe("1")
  })
})