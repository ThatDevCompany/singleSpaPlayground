const { merge } = require('webpack-merge')
const singleSpaDefaults = require('webpack-config-single-spa-react')

module.exports = webpackConfigEnv => {
	const defaultConfig = singleSpaDefaults({
		orgName: 'ssp',
		projectName: 'nav',
		webpackConfigEnv,
	})

	return merge(defaultConfig, {
		// customizations can go here
	})
}
