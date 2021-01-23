require('dotenv').config()

module.exports = {
  env: {
    STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_PLAN: process.env.STRIPE_PLAN,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    JWT_SECRET: process.env.JWT_SECRET
  }
};