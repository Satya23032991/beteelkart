/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://indianpaansamrat.com',
  generateRobotsTxt: true,
  sitemapSize: 10000, // Maximum URLs per sitemap
  changefreq: 'daily', // Change frequency for pages
  priority: 0.7, // Default priority for pages
  generateIndexSitemap: true, // Generate sitemap index file
  exclude: ['/private/**', '/admin/**'], 
  robotsTxtOptions: {
    additionalSitemaps: [
      // 'https://indianpaansamrat.com/sitemap.xml',
      'https://indianpaansamrat.com/sitemap-0.xml', 
      
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        disallow: '/private/',
      },
    ],
  },
};
module.exports = config;


