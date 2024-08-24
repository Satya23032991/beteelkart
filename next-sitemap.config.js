
/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://indianpaansamrat.com',
  generateRobotsTxt: true,
  generateIndexSitemap: true, // Generates sitemap index file
};
module.exports = config;

  

// /** @type {import('next-sitemap').IConfig} */
// const config = {
//   siteUrl: 'https://indianpaansamrat.com',
//   generateRobotsTxt: true, // Generate robots.txt file
//   sitemapSize: 10000, // Maximum URLs per sitemap
//   changefreq: 'daily', // Change frequency for pages
//   priority: 0.7, // Default priority for pages
//   generateIndexSitemap: true, // Generate sitemap index file
//   exclude: ['/private/**', '/admin/**'], // Paths to exclude from sitemap
//   robotsTxtOptions: {
//     additionalSitemaps: [
//       'https://indianpaansamrat.com/sitemap.xml',
//     ],
//     policies: [
//       {
//         userAgent: '*',
//         allow: '/',
//       },
//       {
//         userAgent: 'Googlebot',
//         disallow: '/private/',
//       },
//     ],
//   },
// };
// module.exports = config;

// /** @type {import('next-sitemap').IConfig} */
// const config = {
//   siteUrl: 'https://indianpaansamrat.com',
//   generateRobotsTxt: true, // Generates robots.txt file
//   sitemapSize: 10000, // Number of URLs per sitemap
//   changefreq: 'daily', // Change frequency for pages
//   priority: 0.7, // Default priority for pages
//   generateIndexSitemap: true, // Generate sitemap index file
// };
// module.exports = config;

