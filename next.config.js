/** @type {import("next").NextConfig} */
require('dotenv').config();

module.exports = {
  env: {
    API_KEY: process.env.API_KEY,
    PRIVATE_KEY: process.env.PRIVATE_KEY
  },
  reactStrictMode: true,
  experimental: {
    reactRoot: true
  }
};
