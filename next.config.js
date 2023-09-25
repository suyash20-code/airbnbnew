/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pixabay.com', 
        port: '',
        pathname: '/photos/furniture-living-room-modern-998265/',
      },
    ],
  },
  env:{
    mapbox_key:'pk.eyJ1Ijoic3V5YXNoMjAiLCJhIjoiY2xteWtoMWFhMThzMjJzcWY3cHFyOWd1YyJ9.yG2uW72iYVF_ZNZm8hhP-Q'
  }

}

module.exports = nextConfig
// module.exports = {
//   images:{
//     domains:['pixabay.com'],
//   }
// }