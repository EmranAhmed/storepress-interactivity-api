const [
	defaultJSConfig,
	defaultModuleConfig,
] = require('@wordpress/scripts/config/webpack.config')
const {
	requestToExternal,
	requestToHandle,
	requestToExternalModule,
	getFile,
	getRootFile,
	getWebPackAlias,
} = require('./tools/webpack-helpers')

const scriptConfig = {
	...defaultJSConfig,

	entry: {},

	resolve: {
		...defaultJSConfig.resolve,
		alias: {
			...defaultJSConfig.resolve.alias,
			...getWebPackAlias(),
		},
	}
}

const moduleConfig = {
	...defaultModuleConfig,

	entry: {
		'wp-interactivity': {
			import: '@wordpress/interactivity/build-module/index.js',
			library: {
				type: 'module',
			},
		},
	},

	resolve: {
		...defaultModuleConfig.resolve,
		alias: {
			...defaultModuleConfig.resolve.alias,
			...getWebPackAlias(),
		},
	},
}

module.exports = [scriptConfig, moduleConfig]
