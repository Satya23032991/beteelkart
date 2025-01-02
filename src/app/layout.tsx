

// import Head from 'next/head';
// import Script from 'next/script';  // Importing Script from Next.js
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
//   title: "IndianPaanSamrat - Rooted in Tradition, Crafted for Today",
//   description: "Rooted in Tradition, Crafted for Today",
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
//         <title>{metadata.title}</title>
//         <meta name="description" content={metadata.description} />
//         <meta name="robots" content="index, follow" />
        
//         {/* Canonical URL */}
//         <link rel="canonical" href={canonicalUrl} />
        
//         {/* Open Graph Meta Tags */}
//         <meta property="og:title" content={metadata.title} />
//         <meta property="og:description" content={metadata.description} />
//         <meta property="og:url" content={canonicalUrl} />
//         <meta property="og:image" content="https://www.indianpaansamrat.com/path-to-your-image.jpg" />
//         <meta property="og:type" content="website" />
        
//         {/* Twitter Card Meta Tags */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={metadata.title} />
//         <meta name="twitter:description" content={metadata.description} />
//         <meta name="twitter:image" content="https://www.indianpaansamrat.com/path-to-your-image.jpg" />

//         {/* Structured Data - Organization */}
//         <meta itemProp="name" content={metadata.title} />
//         <meta itemProp="url" content={canonicalUrl} />
//         <meta itemProp="logo" content="https://www.indianpaansamrat.com/logo.png" />

//         {/* Social Media Links */}
//         <meta property="sameAs" content="https://www.facebook.com/IndianPaanSamrat" />
//         <meta property="sameAs" content="https://www.instagram.com/IndianPaanSamrat" />
//         <meta property="sameAs" content="https://www.twitter.com/IndianPaanSamrat" />

//         {/* FontAwesome */}
//         <link
//           rel="stylesheet"
//           href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
//         />
//       </Head>

//       {/* Google Tag Manager */}
//       <Script
//         strategy="afterInteractive" // This will ensure the script loads only after page load
//         src="https://www.googletagmanager.com/gtag/js?id=G-HNX2LZFZBR"
//       />
//       <Script
//         id="google-analytics"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: `
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', 'G-HNX2LZFZBR');
//           `,
//         }}
//       />

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
import { Inter, Dancing_Script } from 'next/font/google'; // Importing Dancing Script font
import './globals.css';
import Navbar from '@/components/Navbar';

// Import and configure FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

// Add icons to the library
library.add(faFacebookF, faInstagram, faYoutube, faCoffee);

//const inter = Inter({ subsets: ["latin"] });
const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "400" }); // Cursive font configuration

export const metadata = {
  title: "IndianPaanSamrat - Rooted in Tradition, Crafted for Today",
  description: "Rooted in Tradition, Crafted for Today",
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
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://www.indianpaansamrat.com/path-to-your-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://www.indianpaansamrat.com/path-to-your-image.jpg" />
      </Head>
      <body className={`${dancingScript.className} ${process.env.NODE_ENV === "development" ? "debug-screens" : ""}`}>
        <div className={`relative w-full flex items-center justify-center shadow-xl ${dancingScript.className}`}>
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}



