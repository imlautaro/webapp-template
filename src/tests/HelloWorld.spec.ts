import { mount } from '@vue/test-utils'
import HelloWorld from '~/components/HelloWorld.vue'

describe('HelloWorld', () => {
	it('should display a heading that greets with the default message', () => {
		const msg = 'Hello world from Vite!'
		const wrapper = mount(HelloWorld)

		expect(wrapper.find('h1').text()).toEqual(msg)
	})
	it('should display a heading that greets with a custom message', () => {
		const msg = 'Hello world from Jest!'
		const wrapper = mount(HelloWorld, { props: { from: 'Jest' } })

		expect(wrapper.find('h1').text()).toEqual(msg)
	})
})
