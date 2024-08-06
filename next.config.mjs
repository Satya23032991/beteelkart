// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     async headers() {
//       return [
//         {
//           source: '/(.*)',
//           headers: [
//             {
//               key: 'Content-Security-Policy',
//               value: "frame-src 'self' https://www.youtube.com/ https://m.youtube.com/;",
//             },
//           ],
//         },
//       ];
//     },
//   };
  
//   export default nextConfig;

// next.config.mjs

const nextConfig = {
  images: {
    domains: ['upload.wikimedia.org'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-src 'self' https://www.youtube.com/ https://m.youtube.com/;",
          },
        ],
      },
    ];
  },

  webpack(config) {
    
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|mpe?g)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static/videos/',
            publicPath: '/_next/static/videos/',
            esModule: false,
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;


  