module.exports = {
     lintOnSave: false,
     productionSourceMap: false,
     devServer:{
          proxy:{
               '^/api':{
                    target:'http://182.92.128.115/'
               }
          },
          historyApiFallback: true,
          watchOptions: { aggregateTimeout: 300, poll: 1000 },
          disableHostCheck: true,
     }
}
