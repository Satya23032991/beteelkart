
"use client"

import { React, useState, useEffect } from 'react';
import swal from 'sweetalert2';
import Image from 'next/image';
import Link from "next/link";
import videoSrc from '/src/video/got.mp4';
import paanmythvid from '/src/video/IPS_Myths_debunked.mp4';
import TraditionalPaan from "/src/images/tradpaanlatest.jpg";
import TraditionalSaada from "/src/images/trad-saada-latest.jpg";
import TraditionalMeetha from "/src/images/trad-meetha-lat.jpg";
import styles from './tpstyles.module.css';
import { FaHandPointRight } from 'react-icons/fa';
import 'animate.css';
import Footersection from "/src/components/FooterSection";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
// import { FaRegHandshake } from "react-icons/fa";
// import { RiSecurePaymentLine } from "react-icons/ri";
// import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaDelicious } from "react-icons/fa";
import { FaHandsWash } from "react-icons/fa";
// import { FiUserPlus } from "react-icons/fi";
import { FaGrinStars } from "react-icons/fa";
import 'animate.css';
import { Parisienne } from 'next/font/google';



const parisienne = Parisienne({
  subsets: ['latin'],
  weight: '400',
});





const Traditionalpaan = () => {

  const images = [
    {src: TraditionalPaan.src, alt: "Traditional Paan1", width: 1920, height: 900},
    {src: TraditionalSaada.src, alt: "Traditional Saada", width: 1920, height: 900},
    {src: TraditionalMeetha.src, alt: "Traditional Meetha", width: 1920, height: 900}
   ];

  const [currentImageIndex,setCurrentImageIndex] = useState(0);



const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const orderUrl = process.env.NEXT_PUBLIC_ORDER_URL;

console.log("Current Image Index",currentImageIndex);
console.log("Images Array",images);
  const videoId = 'dy2zB8bLSpk';


  const [hasShownPopup, setHasShownPopup] = useState(false);

  if (process.env.NODE_ENV === 'development'){
    console.log('Development mode')
    console.log("API URL",apiUrl);
    console.log("ORDER URL",orderUrl);
  } else {
    console.log('Production mode');
    console.log('API URL', apiUrl);
    console.log('ORDER URL', orderUrl);
  }

  useEffect(() => {
    if (images && images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000); 
    
      return () => clearInterval(interval); 
    }
  }, [images]);
  
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('wowjs').then(({ WOW }) => {
        new WOW({
          live: false,
        }).init();
      });
    }
  }, []);
  




  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 640;

  return (
    <>
      <main className={`ml-0 ${styles.tradpaanMainContainer}`}>
 

<div className={styles.sliderContainer}>
  {images.map((image, index) => (
    <div
      key={index}
      className={`${styles.sliderImage} ${currentImageIndex === index ? styles.active : styles.inactive}`}
    >

<Image
  src={image.src}
  alt={image.alt}
  className="object-cover"
  fill 
  style={{
    objectFit: "cover", 
    objectPosition: "center top", 
  }}
/>







    </div>
  ))}
</div>


        <div className={`mt-1 flex flex-col ${styles.tpflexContainer}`}>
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="w-full lg:w-1/2 lg:mr-5 mb-10 lg:mb-0">
             

              <div className="shadow-lg px-8 py-6 rounded-lg mb-8
                wow animate__animated animate__fadeInRight 
                data-wow-duration='1.5s' data-wow-delay='0.2s' 
              ">
                <p className="font-semibold text-[#0a402b]text-lg sm:text-2xl md:text-xl">
                  Experience the rich and authentic flavors of traditional paan, a cherished Indian delicacy celebrated for its refreshing and aromatic taste.
                  Our premium paan collection features two classic varieties: Saada Paan and Meetha Paan. Saada Paan, a simple yet delightful version,
                  offers a perfect blend of betel leaf, mint, and natural spices, providing a refreshing and invigorating chew.
                  For those with a sweeter palate, Meetha Paan combines the same traditional elements with sweetened ingredients like
                  gulkand (rose petal preserve), coconut flakes, and our specialised magic spices, delivering a mouth-watering treat.
                  Whether you seek a quick refreshment or a delectable after-meal indulgence, our traditional paan and its variants
                  cater to every taste and preference.
                </p>
              </div>

              <div className=" text-[#0a402b] p-4 rounded-lg mb-auto ">
                <p className="font-semibold text-lg sm:text-2xl md:text-lg">
                  <FaHandPointRight className="inline-block mr-2" />Enjoy the Authentic Taste of Traditional Paan
                </p>
              </div>

              <div className=" text-[#0a402b] p-4 rounded-lg mb-1">
                <p className="font-semibold text-lg sm:text-2xl md:text-lg">
                  <FaHandPointRight className="inline-block mr-2" />Special Offer: Get Special Offers on Saada Paan & Meetha Paan
                </p>
              </div>

              <div className=" text-[#0a402b] p-4 rounded-lg mb-1">
                <p className="font-semibold text-lg sm:text-2xl md:text-lg">
                  <FaHandPointRight className="inline-block mr-2" />Saada Paan: A Classic Delight for Every Occasion
                </p>
              </div>

              <div className=" text-[#0a402b] p-4 rounded-lg mb-4">
                <p className="font-semibold text-lg sm:text-2xl md:text-lg">
                  <FaHandPointRight className="inline-block mr-2" />Meetha Paan: A Specific Flavour for the Taste Buds
                </p>
              </div>

              <div className="text-[#0a402b] mt-3 px-3">
                <p className='font-semibold text-lg text-[#0a402b] mb-2 flex items-center'>
                  ✓ Fresh and Premium Ingredients
                </p>

                <p className='font-semibold text-lg text-[#0a402b] mb-2 flex items-center'>
                  ✓ More than 1 Lakh Happy Customers & Increasing
                </p>

                <p className="font-semibold text-lg text-[#0a402b] mb-2 flex items-center">
                  ✓ Expertly Crafted for Authentic Flavour
                </p>

                <p className="font-semibold text-lg text-[#0a402b]mb-2 flex items-center">
                  ✓ Available for Quick Delivery
                </p>

                <p className="font-semibold text-lg text-[#0a402b] mb-2 flex items-center">
                  ✓ Special Discounts for Bulk Orders
                </p>

                <p className="font-semibold text-lg text-[#0a402b] mb-2 flex items-center">
                  ✓ 100% Quality Tested and Assured Dessert
                </p>
              </div>
            </div>



            <div className="w-full lg:w-1/2 mb-0 mt-1 py-20 lg:ml-5 font-serif tracking-wider leading-snug">
              
            <div className='relative'>
                <video controls className="w-full rounded-lg mt-8"
                  style={{ height: '400px' }}>
                  <source src={paanmythvid} type="video/mp4" />
                  Your Browser does not support the video tag
                </video>
              </div>
            </div>


          </div>
        </div>

        <div className={styles.tradpaanMainContainer}>
          <div className="w-full p-4 bg-creamypink">
            <h1 className="text-4xl text-[#6f0f1e] text-center py-8 font-extrabold font-cursive">
              Our Handcrafted Buffet of Traditional Paan for You
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-center">

              <div
                className="bg-cover bg-center wow animate__animated animate__fadeInRight
                 data-wow-duration='1.5s' data-wow-delay='0.2s'
                 transition-transform ease-in-out"
                style={{
                  backgroundImage: `url(${TraditionalSaada})`,
                  minHeight: '400px',
                }}
              >
                <Image src={TraditionalSaada} alt="Saada Paan" className="w-140 h-140 object-cover mx-auto my-5" />
              </div>

              <div className="p-4">
                <h1 className="lg:text-4xl md:text-4xl sm:text-4xl font-extrabold text-[#6f0f1e] font-serif tracking-wider leading-snug">
                  Traditional Saada Paan:
                </h1>


                <p className="p-6 text-[#0a402b] text-2xl sm:text-2xl md:text-2xl 

               

                                 ">
                  A Timeless Classic
                  Indulge in the exquisite flavors of our Saada Paan, a quintessential Indian delicacy that has been cherished for centuries.
                  Crafted with utmost care and expertise, our Saada Paan offers a perfect harmony of tradition and taste,
                  making it a delightful treat for any occasion.
                  At the heart of each Saada Paan is the fresh, tender betel leaf, meticulously selected to ensure premium quality and an
                  unparalleled taste experience. Each leaf is generously coated with a delicate layer of slaked lime, expertly balanced to
                  create a gentle yet invigorating chew. The addition of aromatic areca nut (supari) and our blend of magic ingredients brings a
                  subtle crunch and a hint of natural sweetness.
                </p>
                <Link href="traditionalpaan/gallery/spgallery" passHref>
                  <button className="saada_paan transition ease-in-out delay-150 
        bg-[#6194a5] hover:translate-y-1 
        hover:scale-110 hover:bg-[#631115] hover:text-[#6194a5] duration-300
         rounded-lg px-6 py-3 text-[#631115] font-semibold 
         shadow-md wow 
         animate__animated animate__pulse font-serif tracking-wider leading-snug"
                    data-wow-duration="1s" data-wow-delay="1.5s">
                    Traditional Saada Gallery
                  </button>
                </Link>
              </div>

              <div className="bg-cover  bg-center wow animate__animated animate__fadeInLeft
                 data-wow-duration='1.5s' data-wow-delay='0.2s'
                 transition-transform ease-in-out"
                style={{
                  backgroundImage: `url($(TraditionalMeetha))`,
                  minHeight: '400px'
                }}
              >
                <Image src={TraditionalMeetha} alt="Meetha Paan"
                  className="w-140 h-140 object-cover mx-auto my-5"
                />
              </div>

              <div className="p-4">

                <h1 className="lg:text-4xl md:text-4xl sm:text-4xl font-extrabold text-[#6f0f1e] font-serif tracking-wider leading-snug">
                  Meetha Paan: A Sweet Symphony of Flavors
                </h1>


                <p className="p-6 text-[#0a402b] text-2xl sm:text-2xl md:text-2xl ">

             

                  Delight in the enchanting sweetness of Our Meetha Paan transforms every moment into a
                  celebration. Crafted with an artful blend of tradition and innovation, Our Meetha Paan is a symphony of rich flavors and aromas,
                  meticulously created to offer an unforgettable taste experience.

                  Our Meetha Paan is a pristine betel leaf, chosen for its freshness and superior quality. This lush leaf is adorned
                  with a layer of carefully selected sweet fillings and spices, creating a harmonious blend.
                  We infuse our Meetha Paan with a luxurious combination of rose petals, saffron, cardamom, a touch of gulkand (rose petal jam)
                  & our magic ingredient.
                 
                </p>
                <Link href="traditionalpaan/gallery/mpgallery" passHref>
                  <button className="meetha_paan ease-in-out delay-150 bg-[#6194a5]
       hover:translate-y-1 hover:scale-110 
       hover:bg-[#631115] hover:text-[#6194a5] duration-300
         rounded-lg px-6 py-3 text-[#631115] font-semibold 
         shadow-md wow 
         animate__animated animate__pulse font-serif tracking-wider leading-snug"
                    data-wow-duration="1s" data-wow-delay="1.5s">
                    Traditional Meetha Gallery
                  </button>
                </Link>
              </div>

              <div className="p-4">
                <h2 className="lg:text-4xl font-extrabold md:text-4xl text-[#6f0f1e] font-serif tracking-wider leading-snug">
                  Fun Facts about Saada Paan
                </h2>
                <p className="p-6 text-[#0a402b] text-justify text-lg sm:text-2xl md:text-xl font-serif tracking-wider leading-snug">
                  Ancient Refreshment:   Did you know that Saada Paan has been enjoyed in India
                  for over 5,000 years?
                  Ancient texts and folklore often mention this refreshing chew
                  as a favorite among royals and commoners alike,
                  making it a timeless classic that has stood the test of time.
                </p>

                <p className="p-6 text-[#0a402b] text-justify text-lg sm:text-2xl md:text-xl font-serif tracking-wider leading-snug">
                  Natural Breath Freshener: Saada Paan is not just a treat
                  but also a natural breath freshener!
                  The combination of betel leaf, slaked lime,
                  and areca nut works wonders in keeping your breath fresh and aromatic,
                  making it a popular choice for a post-meal digestive.
                </p>
              </div>

              <div className="p-4">
                <h2 className="lg:text-4xl md:text-4xl font-extrabold text-[#6f0f1e] font-serif tracking-wider leading-snug">
                  Fun Facts about Meetha Paan
                </h2>
                <p className="p-6 text-[#0a402b] text-justify text-lg sm:text-2xl md:text-xl font-serif tracking-wider leading-snug">
                  Royal Dessert: Meetha Paan was once a royal delicacy!
                  In ancient times, it was often served in the royal courts
                  as a luxurious dessert after grand feasts.
                  The sweet and aromatic ingredients were believed to aid digestion
                  and provide a delightful end to the meal.
                </p>
                <p className="p-6 text-[#0a402b] text-justify text-lg sm:text-2xl md:text-xl font-serif tracking-wider leading-snug">
                  Colorful Celebration: Meetha Paan is often associated with celebrations
                  and festivals in India. The vibrant and colorful ingredients like
                  gulkand and coconut flakes not only make it visually appealing
                  but also symbolize joy and festivity.
                  It&apos;s a must-have treat during weddings,
                  festivals, and other special occasions!
                </p>
              </div>

              <div className="p-4">
                <p className="p-6 text-[#0a402b] text-justify text-lg sm:text-2xl md:text-xl font-serif tracking-wider leading-snug">
                  Welcome to Indianpaansamrat, the Ultimate Destination for Traditional Paan

                  At Indianpaansamrat, we take immense pride in offering an authentic taste of tradition with our exquisite range of paan
                  varieties, including the classic Saada Paan and the indulgent Meetha Paan.

                  Our Saada Paan: Crafted from the finest betel leaves and a blend of aromatic spices and our signature ingredient,
                  our Saada Paan provides a refreshing and invigorating experience. This traditional paan is known for its balanced flavor
                  profile, ideal for those who appreciate a genuine taste of heritage. Experience the best in taste with our unique,
                  expertly crafted Saada Paan, designed to delight every customer.

                  Our Meetha Paan: For those with a sweet tooth, our Meetha Paan is a delightful treat. We infuse our betel leaves with a medley
                  of sweet
                  and aromatic ingredients, including saffron, cardamom, and rose petals, creating a rich and flavorful paan that’s both
                  satisfying and indulgent.
                </p>
              </div>

              {/* <div className>
                {" "}
                <iframe
                  width="100%"
                  height="100%"
                  src={embedUrl}
                  title='Traditional Paan'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;picture-in-hand'
                  allowfullscreen></iframe>
              </div> */}

              <div className='relative'>
                <video 
                controls 
                muted
                className="w-full rounded-lg mt-8"
                  style={{ height: '400px' }}>
                  <source src={videoSrc} type="video/mp4" />
                  Your Browser does not support the video tag
                </video>
              </div>



              <div className="bg-[#7c1918] text-black font-extrabold py-4 px-8 m-auto
       rounded-lg shadow-md text-center">
                <h2 className="lg:text-6xl md:text-4xl text-[#f2c070]">
                  Our Promise
                </h2>
              </div> *

              <div className="bg-[#7c1918] text-black font-extrabold py-4 px-8 m-auto
       rounded-lg shadow-md text-center">
                <p className="p-6 text-[#f2c070] font-serif tracking-wider leading-snug">
                  &quot;At IndianPaanSamrat, we promise to deliver the finest Saada Paan
                  and Meetha Paan, crafted with the highest quality ingredients and utmost care.
                  Each bite is a journey through tradition, ensuring an authentic, delightful,
                  and refreshing experience every time. Taste the legacy,
                  savor the freshness,
                  and celebrate the flavors with us Our commitment to quality and
                  customer service has earned us thousands of satisfied customers
                  who keep coming back for the delightful flavors and impeccable service..&quot;
                </p>
              </div>


            </div>
          </div>

        </div>


      </main>

      <div className="bg-[#1b3336]">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Why Choose Us
        </h2>
        <div className="flex flex-wrap justify-center ">
          <div className="bg-[#1b3336] text-white p-6 m-2 rounded-lg flex flex-col items-center">
            <HiOutlineOfficeBuilding size={50} className="mb-4" />
            <p className="text-center">5-Star Rating on our Products and Services</p>
          </div>
          <div className="bg-[#1b3336] text-white p-6 m-2 rounded-lg flex flex-col items-center">
            <FaDelicious size={50} className="mb-4" />
            <p className="text-center">Decades of Trusted Expertise</p>
          </div>
          <div className="bg-[#1b3336] text-white p-6 m-2 rounded-lg flex flex-col items-center">
            <FaHandsWash size={50} className="mb-4" />
            <p className="text-center">Strict Hygiene from Prep to Pack</p>
          </div>
          <div className="bg-[#1b3336] text-white p-6 m-2 rounded-lg flex flex-col items-center">
            <FaGrinStars size={50} className="mb-4" />
            <p className="text-center">1 Lakh+ Happy Customers & Increasing Up </p>
          </div>
        </div>
      </div>
      <Footersection />
    </>
  );
};

export default Traditionalpaan;










