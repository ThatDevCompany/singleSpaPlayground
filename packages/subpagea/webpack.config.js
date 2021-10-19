const { merge } = require('webpack-merge')
const singleSpaDefaults = require('webpack-config-single-spa-react')

module.exports = webpackConfigEnv => {
	const defaultConfig = singleSpaDefaults({
		orgName: 'ssp',
		projectName: 'subpagea',
		webpackConfigEnv,
	})

	return merge(defaultConfig, {
		resolve: {
			...defaultConfig.resolve,
			modules: ['../../node_modules', './node_modules'],
			extensions: ['.js', '.jsx'],
		},
		// customizations can go here
	})
}
