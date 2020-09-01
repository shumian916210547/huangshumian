module.exports = {
  publicPath: './',
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        common: "@/common",
        network: "@/network",
        components: "@/components",
        views: "@/views",
      },
    },
  },
}