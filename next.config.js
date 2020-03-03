module.exports = {
  assetPrefix: process.env.BASE_PATH || '',
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  },
  publicRuntimeConfig: {
    basePath: process.env.BASE_PATH || '',
  },
};