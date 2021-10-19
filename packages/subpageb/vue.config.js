module.exports = {
	lintOnSave: false,
	configureWebpack: {
		devServer: {
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
			disableHostCheck: true,
			sockPort: 9008,
			sockHost: 'localhost',
		},
		externals: ['vue', /^@ssp\/.+/],
	},
	filenameHashing: false,
}
