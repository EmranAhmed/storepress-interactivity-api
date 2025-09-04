import { store, getContext, init } from '@wordpress/interactivity'

// Define store
const { state } = store('counter', {
	state: {
		get count () {
			return getContext().count
		},
		count2: 0,
	},
	actions: {
		increment () {
			const context = getContext()
			context.count++
			state.count2++
		},
		decrement () {
			const context = getContext()
			context.count--

			state.count2--
		},
	},
})

// Initialize
document.addEventListener('DOMContentLoaded', () => {
	// init();
})
