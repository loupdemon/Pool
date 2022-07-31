// vue.config.js
module.exports = {
  configureWebpack: {
      output: {
          publicPath: '/static/'
      },
      css: {
        loaderOptions: {
            sass: {
                data: `
                    @import "./src/assets/main.scss";
                `,
            },
        },
    },
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'jquery': 'jquery/src/jquery.js'
    }
  }
}
