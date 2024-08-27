
//  "use client"

//  import { useEffect } from 'react';
//  import Link from 'next/link';
//  import Image from 'next/image';
//  import about from '/src/images/OUR_TIMETRAVEL.jpg';
//  import './about-Us.css';
//  import 'animate.css';
//  import Footersection from '/src/components/FooterSection'
 
//  const Aboutsection = () => {
 
//     useEffect(() => {
//      if (typeof window !== 'undefined') {
//        import('wowjs').then(({ WOW }) => {
//          new WOW({
//            live: false,
//          }).init();
//        });
//      }
//    }, []);
 
//    return (
//     <>
//      <div className="about_sec bg-[#075156] h-auto w-full flex 
//      flex-col items-center justify-center 
//      relative overflow-hidden mx-auto py-30 p-5">
//        <div className="section-title bg-[#075156] text-center text-[#ebf08c] mt-5">
//          <span className="wow animate__animated 
//          animate__fadeIn about-text" 
//          data-wow-duration="1.5s" 
//          data-wow-delay="0.2s"
//          >
//            <h1 className="text-[#ebf08c] font-cursive">
//            Our Journey
//            </h1>
//          </span>
//          {/* <h2 className="md:mt-0 text-4xl md:text-5xl font-bold bg-clip-text text-black"></h2> */}
//        </div>
//        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 py-5"
//          style={{ transition: 'transform 0.3s ease-in-out' }}
//          // onMouseEnter={(e) => {
//          //   e.currentTarget.style.transform = 'translateY(0)';
//          //   e.currentTarget.style.boxShadow = `
           
//          //     inset 0 0 60px whitesmoke,
//          //     inset 20px 0 80px #f0f,
//          //     inset -20px 0 80px #0ff,
//          //     inset 20px 0 300px #f0f,
//          //     inset -20px 0 300px #0ff,
//          //     0 0 50px #fff,
//          //     -10px 0 80px #f0f,
//          //     10px 0 80px #0ff
//          //     `;
//          // }}
//          // onMouseLeave={(e) => {
//          //   e.currentTarget.style.transform = '';
//          //   e.currentTarget.style.boxShadow = '';
//          // }}
//          onMouseEnter={(e) => {
//            e.currentTarget.style.transform = 'translateY(0)';
//            e.currentTarget.style.boxShadow = `
//              0 0 30px 10px rgba(255, 255, 255, 0.6),   /* Outer soft glow */
//              0 0 60px 20px rgba(255, 255, 255, 0.4),   /* Middle softer glow */
//              0 0 100px 40px rgba(255, 255, 255, 0.2)   /* Innermost subtle glow */
//            `;
//          }}
//          onMouseLeave={(e) => {
//            e.currentTarget.style.transform = '';
//            e.currentTarget.style.boxShadow = '';
//          }}
         
//        >
//          <div className='flex-auto text-center py-2 m-0 practice-single wow animate__animated
//           animate__fadeInRight data-wow-duration="1.5s" data-wow-delay="0.2s"'>
//            <Image
//              src={about}
//              width={600}
//              height={450}
//              alt="Our Journey"
//            />
//          </div>
//          <div className="flex-auto text-left py-2 m-2">
//            <h3 className="md:mt-0 text-3xl font-bold bg-clip-text text-[#ebf08c] font-serif tracking-wider leading-snug">
//              The Natural Goodness of Betel & an Array of Flavours for your taste buds all in one
//            </h3>
//            <p className="typewriter pt-10 text-justify font-cursive" style={{ color: '#ebf08c' }}>
//              Indian Paan Samrat (IPS) is built on a rich legacy of excellence, dating back to the 1960s when our grandfathers 
//              operated kiosks in prominent locations in Bengaluru. Established in 2022, we are dedicated to providing paan 
//              connoisseurs with an authentic taste of tradition, using only premium-quality, tobacco-free, and spit-free ingredients.
 
//              Our Vision
 
//              We are committed to hygiene and quality, using FSSAI-approved ingredients to ensure the safety and health of our customers. 
//              Our objective is to establish ourselves as a leading global brand in the paan industry,
//               characterized by a commitment to premium quality ingredients and rigorous hygiene standards.
 
//              Our Approach
 
//              As FSSAI-certified Paan Masters, we have revamped traditional Paan with zzz ingredients and unique methods,
//               ensuring high-quality standards for a consistently delicious taste. We promote 100% tobacco-free and spit-free paan,
//                offering a diverse array of paan varieties to provide consumers with an enhanced and unique experience.
 
//              Our Mission
 
//              To rediscover the authentic taste of India, we are dedicated to delivering exceptional paan experiences that exceed expectations.
//               Explore our range of premium paan offerings, from traditional to gourmet varieties, and indulge in the pinnacle of indulgence.
//            </p>
 
//            <div className='mt-4'>
//              <Link href={'/contact'}>
//                <button className="all_products transition ease-in-out delay-150 bg-yellow-500 hover:-translate-y-1 hover:scale-110 hover:bg-[#091e3e] duration-300 rounded-lg px-6 py-3 text-white font-semibold shadow-md">
//                  Learn More
//                </button>
//              </Link>
//            </div>
//          </div>
//        </div>
//      </div>
//      <Footersection/>
//      </>
//    );
//  }
 
//  export default Aboutsection;

"use client"

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import about from '/src/images/OUR_TIMETRAVEL.jpg';
import './about-Us.css';
import 'animate.css';
import Footersection from '/src/components/FooterSection'

const Aboutsection = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('wowjs').then(({ WOW }) => {
        new WOW({
          live: false,
        }).init();
      });
    }
  }, []);

  return (
    <>
      <div className="about_sec bg-[#075156] h-auto w-full flex 
      flex-col items-center justify-center 
      relative overflow-hidden mx-auto py-30 p-5">
        <div className="section-title bg-[#075156] text-center text-[#ebf08c] mt-5">
          <span className="wow animate__animated 
          animate__fadeIn about-text" 
          data-wow-duration="1.5s" 
          data-wow-delay="0.2s"
          >
            <h1 className="text-[#ebf08c] font-cursive">
              Our Journey
            </h1>
          </span>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 py-5"
          style={{ transition: 'transform 0.3s ease-in-out' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = `
              0 0 30px 10px rgba(255, 255, 255, 0.6),   /* Outer soft glow */
              0 0 60px 20px rgba(255, 255, 255, 0.4),   /* Middle softer glow */
              0 0 100px 40px rgba(255, 255, 255, 0.2)   /* Innermost subtle glow */
            `;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = '';
            e.currentTarget.style.boxShadow = '';
          }}
        >
          <div className='flex-auto text-center py-2 m-0 practice-single wow animate__animated
            animate__fadeInRight data-wow-duration="1.5s" data-wow-delay="0.2s"'>
            <Image
              src={about}
              width={600}
              height={450}
              alt="Our Journey"
            />
          </div>
          <div className="flex-auto text-left py-2 m-2">
            <h3 className="md:mt-0 text-3xl font-bold bg-clip-text text-[#ebf08c] font-serif tracking-wider leading-snug">
              The Natural Goodness of Betel & an Array of Flavours for your taste buds all in one
            </h3>
            <div className="typewriter pt-10 text-justify font-cursive" style={{ color: '#ebf08c' }}>
              Indian Paan Samrat (IPS) is built on a rich legacy of excellence, dating back to the 1960s when our grandfathers 
              operated kiosks in prominent locations in Bengaluru. Established in 2022, we are dedicated to providing paan 
              connoisseurs with an authentic taste of tradition, using only premium-quality, tobacco-free, and spit-free ingredients.
            </div>
            <div className="typewriter pt-10 text-justify font-cursive" style={{ color: '#ebf08c' }}>
              <h4 className="md:mt-0 text-1xl font-bold bg-clip-text text-[#ebf08c] font-serif tracking-wider leading-snug">
                Our Vision
              </h4>
              We are committed to hygiene and quality, using FSSAI-approved ingredients to ensure the safety and health of our customers. 
              Our objective is to establish ourselves as a leading global brand in the paan industry, characterized by a commitment to 
              premium quality ingredients and rigorous hygiene standards.
            </div>
            <div className="typewriter pt-10 text-justify font-cursive" style={{ color: '#ebf08c' }}>
              <h4 className="md:mt-0 text-1xl font-bold bg-clip-text text-[#ebf08c] font-serif tracking-wider leading-snug">
                Our Approach
              </h4>
              As FSSAI-certified Paan Masters, we have revamped traditional Paan with our in-demand signature ingredients and unique methods,
              ensuring high-quality standards for a consistently delicious taste. We promote 100% tobacco-free and spit-free paan,
              offering a diverse array of paan varieties to provide consumers with an enhanced and unique experience.
            </div>
            <div className="typewriter pt-10 text-justify font-cursive" style={{ color: '#ebf08c' }}>
              <h4 className="md:mt-0 text-1xl font-bold bg-clip-text text-[#ebf08c] font-serif tracking-wider leading-snug">
                Our Mission
              </h4>
              To rediscover the authentic taste of India, we are dedicated to delivering exceptional paan experiences that exceed expectations.
              Explore our range of premium paan offerings, from traditional to gourmet varieties, and indulge in the pinnacle of indulgence.
            </div>
            <div className='mt-4'>
              <Link href={'/contact'}>
                <button className="all_products transition ease-in-out delay-150 bg-yellow-500 hover:-translate-y-1 hover:scale-110 hover:bg-[#091e3e] duration-300 rounded-lg px-6 py-3 text-white font-semibold shadow-md">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footersection />
    </>
  );
}

export default Aboutsection;

 