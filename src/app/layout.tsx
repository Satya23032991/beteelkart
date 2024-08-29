// import Head from 'next/head';
// import { Inter } from 'next/font/google';
// import './globals.css';
// import Navbar from '@/components/Navbar';

// // Import and configure FontAwesome
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

// // Add icons to the library
// library.add(faFacebookF, faInstagram, faYoutube, faCoffee);

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "IndianPaanSamrat - Delivering the Authentic Taste & Goodness of Paan",
//   description: "Rooted in Tradition, Crafted for Today – A Modern Take on Authentic Paan",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <Head>
//         <title>IndianPaanSamrat - Delivering the Authentic Taste & Goodness of Paan</title>
//         <meta name="description" content="Experience the widest range of Paans from IndianPaanSamrat. Order now for fast, authentic Paan delivery to your door!" />
//         <meta name="context" content="http://schema.org"/>
//         <meta name="type" content="organization"/>
//         <meta name="url" content="https://www.indianpaansamrat.com"/>
//         <meta name="logo" content="www.indianpaansamrat.com/logo.png"/>
//         <meta name="sameAs" content="https://www.facebook.com/IndianPaanSamrat" />
//         <meta name="sameAs" content="https://www.instagram.com/IndianPaanSamrat" />
//         <meta name="sameAs" content="https://www.twitter.com/IndianPaanSamrat" />
        
//         <link
//           rel="stylesheet"
//           href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
//         />
//       </Head>
//       <body className={`${inter.className} ${process.env.NODE_ENV === "development" ? "debug-screens" : "" }`}>
//         <div className="relative w-full flex item-center justify-center shadow-xl">
//           <Navbar />
//         </div>
//         {children}
//       </body>
//     </html>
//   );
// }

// import Head from 'next/head';
// import { Inter } from 'next/font/google';
// import './globals.css';
// import Navbar from '@/components/Navbar';

// // Import and configure FontAwesome
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

// // Add icons to the library
// library.add(faFacebookF, faInstagram, faYoutube, faCoffee);

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "IndianPaanSamrat - Delivering the Authentic Taste & Goodness of Paan",
//   description: "Rooted in Tradition, Crafted for Today – A Modern Take on Authentic Paan",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const canonicalUrl = `https://www.indianpaansamrat.com`;

//   return (
//     <html lang="en">
//       <Head>
//         <title>IndianPaanSamrat - Delivering the Authentic Taste & Goodness of Paan</title>
//         <meta name="description" content="Experience the widest range of Paans from IndianPaanSamrat. Order now for fast, authentic Paan delivery to your door!" />
//         <meta name="robots" content="index, follow" />
//         <meta property="og:title" content="IndianPaanSamrat - Delivering the Authentic Taste & Goodness of Paan" />
//         <meta property="og:description" content="Experience the widest range of Paans from IndianPaanSamrat. Order now for fast, authentic Paan delivery to your door!" />
//         <meta property="og:url" content={canonicalUrl} />
//         <meta property="og:image" content="https://www.indianpaansamrat.com/path-to-your-image.jpg" />
//         <meta property="og:type" content="website" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="IndianPaanSamrat - Delivering the Authentic Taste & Goodness of Paan" />
//         <meta name="twitter:description" content="Experience the widest range of Paans from IndianPaanSamrat. Order now for fast, authentic Paan delivery to your door!" />
//         <meta name="twitter:image" content="https://www.indianpaansamrat.com/path-to-your-image.jpg" />
//         <link rel="canonical" href={canonicalUrl} />
//         <meta name="context" content="http://schema.org" />
//         <meta name="type" content="organization" />
//         <meta name="url" content="https://www.indianpaansamrat.com" />
//         <meta name="logo" content="https://www.indianpaansamrat.com/logo.png" />
//         <meta name="sameAs" content="https://www.facebook.com/IndianPaanSamrat" />
//         <meta name="sameAs" content="https://www.instagram.com/IndianPaanSamrat" />
//         <meta name="sameAs" content="https://www.twitter.com/IndianPaanSamrat" />
//         <link
//           rel="stylesheet"
//           href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
//         />
//       </Head>
//       <body className={`${inter.className} ${process.env.NODE_ENV === "development" ? "debug-screens" : ""}`}>
//         <div className="relative w-full flex items-center justify-center shadow-xl">
//           <Navbar />
//         </div>
//         {children}
//       </body>
//     </html>
//   );
// }

import Head from 'next/head';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

// Import and configure FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

// Add icons to the library
library.add(faFacebookF, faInstagram, faYoutube, faCoffee);

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IndianPaanSamrat - Rooted in Tradition, Crafted for Today, A Modern Take on Authentic Paan",
  description: "Rooted in Tradition, Crafted for Today – A Modern Take on Authentic Paan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const canonicalUrl = `https://www.indianpaansamrat.com`;

  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="robots" content="index, follow" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://www.indianpaansamrat.com/path-to-your-image.jpg" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://www.indianpaansamrat.com/path-to-your-image.jpg" />

        {/* Structured Data - Organization */}
        <meta itemProp="name" content={metadata.title} />
        <meta itemProp="url" content={canonicalUrl} />
        <meta itemProp="logo" content="https://www.indianpaansamrat.com/logo.png" />

        {/* Social Media Links */}
        <meta property="sameAs" content="https://www.facebook.com/IndianPaanSamrat" />
        <meta property="sameAs" content="https://www.instagram.com/IndianPaanSamrat" />
        <meta property="sameAs" content="https://www.twitter.com/IndianPaanSamrat" />
        
        {/* FontAwesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </Head>
      <body className={`${inter.className} ${process.env.NODE_ENV === "development" ? "debug-screens" : ""}`}>
        <div className="relative w-full flex items-center justify-center shadow-xl">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}


