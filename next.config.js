/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      domains: ['s3.amazonaws.com', 'imgur.com', "pbs.twimg.com", "tenor.com"],
    },
  }

const { withNextVideo } = require('next-video/process');
 
const nextConfig = {}; // Your current Next Config object
 
module.exports = withNextVideo(nextConfig);