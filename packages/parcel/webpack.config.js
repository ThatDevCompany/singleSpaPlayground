const {merge} = require('webpack-merge')
const singleSpaDefaults = require('webpack-config-single-spa-react')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (webpackConfigEnv, argv) => {
    const defaultConfig = singleSpaDefaults({
        orgName: 'ssp',
        projectName: 'parcel',
        webpackConfigEnv,
    })

    return merge(defaultConfig, {})
}
