const {merge} = require('webpack-merge')
const singleSpaDefaults = require('webpack-config-single-spa-react')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (webpackConfigEnv, argv) => {
    const orgName = 'ssp'
    const defaultConfig = singleSpaDefaults({
        orgName,
        projectName: 'root',
        webpackConfigEnv,
        argv,
        disableHtmlGeneration: true,
    })

    return merge(
        defaultConfig,
        {
            plugins: [
                new HtmlWebpackPlugin({
                    inject: false,
                    template: 'src/index.ejs',
                    templateParameters: {
                        isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
                        orgName,
                    },
                }),
            ],
        },
        {
            // modify the webpack config however you'd like to by adding to this object
        }
    )
}
