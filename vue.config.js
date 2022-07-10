const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
module.exports = {
    devServer: {
        proxy:{
            "/api": {
                target: "https://www.hehe.com"
            }
        },
        hot: true
    },
    configureWebpack: {
        /* plugins: [
            new BundleAnalyzerPlugin()
        ],
        externals: {
            vue: "Vue",
            vuex: "Vuex",
            "vue-router": "VueRouter",
            axios: "axios"
        } */
    }
}