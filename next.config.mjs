// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
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
  };
  
  export default nextConfig;
  