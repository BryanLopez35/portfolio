require('dotenv').config({ path: '.env.local' });

module.exports = {
  reactStrictMode: true,
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
};
