module.exports = {
  env: {
    STRIPE_PUBLISHABLE_KEY: 'pk_test_5MGDERXIR4WnCr35c7PEGukz00VeBYdvuQ',
    STRIPE_PLAN_ID: 'plan_Gq9Kjnk0NQTsJS'
  },
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  },
};