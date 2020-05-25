require('dotenv').config()

module.exports = {
  env: {
    STRIPE_PUBLISHABLE_KEY: 'pk_live_TnUIpUWRe1U7TmaxjBtx4Ztr00IZdwf5Ds',
    STRIPE_PLAN_ID: 'plan_GqPN5mTu3Y9sTI',
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    JWT_SECRET: process.env.JWT_SECRET
  }
};