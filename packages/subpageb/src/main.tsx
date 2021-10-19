import './set-public-path'
import Vue from 'vue'
import SubPageBApp from './SubPageBApp.vue'
import singleSpaVue from 'single-spa-vue'

const vueLifecycles = singleSpaVue({
	Vue,
	appOptions: {
		render(h) {
			return h(SubPageBApp)
		},
	},
})

export const bootstrap = vueLifecycles.bootstrap
export const mount = vueLifecycles.mount
export const unmount = vueLifecycles.unmount
