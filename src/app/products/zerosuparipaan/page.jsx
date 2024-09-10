
"use client"

import { React, useEffect } from 'react';

import Image from 'next/image';
import Link from "next/link";
import ZerosupariPaan from "/src/images/Zero-Supari-lat.jpg";
import IceburstSaada from "/src/images/iceburst-saada.jpg";
import TraditionalMeetha from "/src/images/traditional_meetha.jpg";
import styles from './zpstyles.module.css';
import { FaHandPointRight } from 'react-icons/fa';
import 'animate.css';
import Footersection from "/src/components/FooterSection";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import videoSrc from '/src/video/got.mp4';
import { FaDelicious } from "react-icons/fa";
import { FaHandsWash } from "react-icons/fa";
// import { FiUserPlus } from "react-icons/fi";
import { FaGrinStars } from "react-icons/fa";
import 'animate.css';

const Zerosuparipaan = () => {



  const videoId = 'dy2zB8bLSpk';
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;


  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('wowjs').then(({ WOW }) => {
        new WOW({
          live: false,
        }).init();
      });
    }
  }, []);

  const zsubmit = () => {
    alert('Form Submitted');
  }



  return (
    <>
      <main className={`ml-0 ${styles.zspaanMainContainer}`}>
        <div className="relative">
          <Image
            src={ZerosupariPaan}
            layout="responsive"

            width={700}
            height={75}
            // objectFit="cover"
            style={{ objectFit: 'cover' }}
            alt="Traditional Paan"
          />
        </div>

        <div className={`mt-1 flex flex-col ${styles.zspflexContainer}`}>
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="w-full lg:w-1/2 lg:mr-5 mb-10 lg:mb-0">
              {/* <h1 className={styles.tpheader}>Traditional Paan</h1> */}

              <div className="shadow-lg px-8 py-6 rounded-lg mb-8 ;-ow 
                            animate__animated animate__fadeInDown 
                            data-wow-duration='1.5s' data-wow-delay='0.2s'">
                <p className="font-semibold text-[#0a402b] text-lg 
                                sm:text-2xl md:text-xl">
                  Dive into a refreshing experience with our ZeroSupari Paan, a guilt-free take on the timeless Indian treat.
                  This innovative creation is designed to offer you the same delightful flavors without the supari.
                  The ingredients in our ZeroSupari Paan also offer numerous health benefits. Gulkand is known for its cooling
                  properties and
                  digestive benefits, while cardamom and fennel seeds aid in digestion and freshen breath.
                  Perfect for those who prioritize health
                  without compromising on taste, our ZeroSupari Paan is a true culinary masterpiece.

                  Indulge in the harmonious blend of creamy gulkand (rose petal preserve), fragrant elaichi (cardamom),
                  and a touch of sweet fennel seeds. Each bite is an explosion
                  of flavors, featuring a mix of shredded coconut and aromatic spices that dance on your palate.
                  The absence of supari allows you to enjoy this treat with peace of mind,
                  making it a perfect choice for any occasion.

                  Whether you&apos;re looking for a light, refreshing snack or a unique after-meal delight,
                  our ZeroSupari Paan is crafted to please every palate. Experience the perfect
                  combination of tradition and health-conscious innovation with this exquisite paan variant,
                  offering a taste that&apos;s both familiar and refreshingly new.
                </p>
              </div>

              <div className=" text-[#6f0f1e] p-4 rounded-lg mb-4">
                <p className="font-semibold">
                  <FaHandPointRight className="inline-block mr-2" />
                  Experience the Pure Delight of Zero Supari Paan
                </p>
              </div>

              <div className=" text-[#6f0f1e] p-4 rounded-lg mb-4">
                <p className="font-semibold">
                  <FaHandPointRight className="inline-block mr-2" />
                  Special Offer: Enjoy Exclusive Discounts on Zero Supari Paan
                </p>
              </div>

              <div className=" text-[#6f0f1e] p-4 rounded-lg mb-4">
                <p className="font-semibold">
                  <FaHandPointRight className="inline-block mr-2" />
                  Zero Supari Paan: A Guilt-Free Treat for Every Occasion
                </p>
              </div>

              <div className=" text-[#6f0f1e] p-4 rounded-lg mb-4">
                <p className="font-semibold">
                  <FaHandPointRight className="inline-block mr-2" />
                  Zero Supari Paan: Pure Flavor, No Supari
                </p>
              </div>

              <div className="text-[#6f0f1e]">
                <p className='font-semibold text-lg text-[#6f0f1e] mb-2 flex items-center'>
                  ✓ Fresh and Premium Ingredients
                </p>

                <p className='font-semibold text-lg text-[#6f0f1e] mb-2 flex items-center'>
                  ✓ More than 1 Lakh Happy Customers & Increasing
                </p>

                <p className="font-semibold text-lg text-[#6f0f1e] mb-2 flex items-center">
                  ✓ Expertly Crafted for Authentic Flavour
                </p>

                <p className="font-semibold text-lg text-[#6f0f1e] mb-2 flex items-center">
                  ✓ Available for Quick Delivery
                </p>

                <p className="font-semibold text-lg text-[#6f0f1e] mb-2 flex items-center">
                  ✓ Special Discounts for Bulk Orders
                </p>

                <p className="font-semibold text-lg text-[#6f0f1e] mb-2 flex items-center">
                  ✓ 100% Quality Tested and Assured Dessert
                </p>
              </div>
            </div>



            <div className="w-full lg:w-1/2 mt-12 py-20 lg:ml-5">
              <div className="shadow-lg bg-[#fdc9a9] px-8 mt-38 py-6 rounded-lg mb-8">
                <div className={`${styles.tpheadingStyle} px-6 py-4`}>
                  <h1>Reach Out To Us</h1>
                </div>
                <form className={styles.tpformStyle} id="lead_form" onSubmit="emailPassage()" method="POST">

                  {/* Full Name */}
                  <div className="relative mt-6">
                    <input
                      type="text"
                      id="fname"
                      className="block w-full px-4 py-2 text-black bg-transparent border-2 border-gray-200 rounded-md peer focus:outline-none focus:border-black"
                      required
                    />
                    <label
                      htmlFor="fname"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black bg-transparent
                     transition-all duration-200 ease-in-out peer-focus:-translate-y-8 peer-focus:scale-75
                     peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:scale-100
                     peer-placeholder-shown:text-base peer-focus:bg-white peer-valid:-translate-y-8 peer-valid:scale-75"
                    >
                      Full Name
                    </label>
                  </div>

                  {/* Contact Number */}
                  <div className="relative mt-6">
                    <input
                      type="tel"
                      id="cnumber"
                      className="block w-full px-4 py-2 text-black bg-white border-2 border-gray-200 rounded-md peer focus:outline-none focus:border-black"
                      required
                      pattern="[0-9]{10}"
                      maxLength="10"
                      title="Enter a valid phone number"
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/[^0-9]/g, '');
                      }}
                    />
                    <label
                      htmlFor="cnumber"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black bg-transparent
                     transition-all duration-200 ease-in-out peer-focus:-translate-y-8 peer-focus:scale-75
                     peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:scale-100
                     peer-placeholder-shown:text-base peer-focus:bg-white peer-valid:-translate-y-8 peer-valid:scale-75"
                    >
                      Contact Number
                    </label>
                  </div>

                  {/* Email */}
                  <div className="relative mt-6">
                    <input
                      type="email"
                      id="email"
                      className="block w-full px-4 py-2 text-black bg-white border-2 border-gray-200 rounded-md peer focus:outline-none focus:border-black"
                      required
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black bg-transparent
                     transition-all duration-200 ease-in-out peer-focus:-translate-y-8 peer-focus:scale-75
                     peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:scale-100
                     peer-placeholder-shown:text-base peer-focus:bg-white peer-valid:-translate-y-8 peer-valid:scale-75"
                    >
                      Valid Email Id
                    </label>
                  </div>

                  {/* City */}
                  <div className="relative mt-6">
                    <input
                      type="text"
                      id="city"
                      className="block w-full px-4 py-2 text-black bg-white border-2 border-gray-200 rounded-md peer focus:outline-none focus:border-black"
                      required
                    />
                    <label
                      htmlFor="city"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black bg-transparent
                     transition-all duration-200 ease-in-out peer-focus:-translate-y-8 peer-focus:scale-75
                     peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:scale-100
                     peer-placeholder-shown:text-base peer-focus:bg-white peer-valid:-translate-y-8 peer-valid:scale-75"
                    >
                      Your City
                    </label>
                  </div>

                  {/* Zip Code */}
                  <div className="relative mt-6">
                    <input
                      type="number"
                      id="zipcode"
                      className="block w-full px-4 py-2 text-black bg-white border-2 border-gray-200 rounded-md peer focus:outline-none focus:border-black"
                      required
                    />
                    <label
                      htmlFor="zipcode"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black bg-transparent
                     transition-all duration-200 ease-in-out peer-focus:-translate-y-8 peer-focus:scale-75
                     peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:scale-100
                     peer-placeholder-shown:text-base peer-focus:bg-white peer-valid:-translate-y-8 peer-valid:scale-75"
                    >
                      Zip Code
                    </label>
                  </div>

                  {/* Query */}
                  <div className="relative mt-6">
                    <textarea
                      id="querry"
                      className="block w-full px-4 py-2 text-black bg-white border-2 border-gray-200 rounded-md peer focus:outline-none focus:border-black"
                      required
                    />
                    <label
                      htmlFor="querry"
                      className="absolute left-4 top-4 transform -translate-y-0 text-black bg-transparent
               transition-all duration-200 ease-in-out peer-focus:-translate-y-7 peer-focus:scale-75
               peer-placeholder-shown:translate-y-4 peer-placeholder-shown:scale-100
               peer-placeholder-shown:text-base peer-focus:bg-white peer-valid:-translate-y-8 peer-valid:scale-75"
                    >
                      Please type your query
                    </label>
                  </div>

                  <button
                    className="bg-[#0a402b] text-yellow-500 px-4 mt-5 py-2 rounded-lg font-semibold"
                    type="submit"
                    onClick={zsubmit}
                  >
                    Submit
                  </button>

                </form>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.tradpaanMainContainer}>
          <div className="w-full p-4 bg-[#ffeee2]">
            <h1 className="text-4xl text-[#6f0f1e] text-center py-8 font-extrabold font-cursive">
              Our Buffet of Ice-Burst Paan for You  (Feel The winter in every bite..)
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-center">

              <div
                className="bg-cover bg-center wow animate__animated animate__fadeInDown data-wow-duration='1.5s' data-wow-delay='0.2s'"
                style={{
                  backgroundImage: `url(${IceburstSaada})`,
                  minHeight: '400px',
                }}
              >
                <Image src={ZerosupariPaan} alt="Saada Paan" className="w-140 h-140 object-cover mx-auto my-5" />
              </div>

              <div className="p-4">
                <h2 className="lg:text-4xl md:text-4xl font-extrabold text-[#6f0f1e] font-serif tracking-wider leading-snug">
                  Ice-Burst Paan
                </h2>

                <p className={`p-6 text-[#6f0f1e] font-cursive text-lg sm:text-xl md:text-sm ${styles.wipeIn}`}>
                  A Fresh Take on Tradition

                  Dive into the exhilarating world of our Zerosupari Paan, where tradition meets innovation in a sensational new way.
                  This contemporary twist on a classic Indian delight is meticulously crafted to offer a refreshing and exciting taste experience.

                  Each Zerosupari Paan is infused with a cooling menthol essence that delivers an unmatched burst of freshness and a cool,
                  invigorating sensation. Without the traditional supari, this paan features a generous layer of premium gulkand (rose petal preserve)
                  for a naturally sweet and aromatic touch. We blend this with finely shredded coconut and a distinctive mix of exotic spices,
                  creating a vibrant symphony of flavors that tantalize and refresh the palate.

                  Our Zerosupari Paan is a true celebration of modern creativity, designed for those who crave a refreshing twist on classic flavors.
                  Ideal as a POST-MEAL PALATE CLEANSER or a COOL MID-DAY TREAT, it offers a revitalizing flavor burst that energizes and delights.

                  Immerse yourself in the allure of Zerosupari Paan, where every bite promises an explosion of freshness and every chew delivers a
                  moment of cooling pleasure. Perfect for seasoned paan enthusiasts or newcomers alike, our Zerosupari Paan captivates with its unique
                  blend of old and new.

                  Every Zerosupari Paan is a masterpiece, reflecting a harmonious balance of traditional craftsmanship and contemporary innovation.
                  The dedication to quality and detail ensures that each paan provides a consistently delightful and satisfying experience.

                  Our commitment to excellence means that each Zerosupari Paan meets the highest standards of quality and hygiene. We source only the
                  finest ingredients and adhere to rigorous quality control, ensuring a product that is both delicious and safe.

                  Treat yourself to the exceptional taste of our Zerosupari Paan and discover why this modern marvel is captivating taste buds and
                  setting new standards. Experience the refreshing, cool flavors of Zerosupari Paan and enjoy a bold new take on a cherished classic.
                </p>
                <Link href="zerosuparipaan/gallery/zsgallery" passHref>
                  <button className="saada_paan transition ease-in-out delay-150 
        bg-[#6194a5] hover:translate-y-1 
        hover:scale-110 hover:bg-[#631115] hover:text-[#6194a5] duration-300
         rounded-lg px-6 py-3 text-[#631115] font-semibold 
         shadow-md wow 
         animate__animated animate__pulse"
                    data-wow-duration="1s" data-wow-delay="1.5s">
                    Iceburst Paan Gallery
                  </button>
                </Link>
              </div>




              <div className="p-4">
                <h2 className="lg:text-4xl font-extrabold md:text-4xl text-[#6f0f1e]">
                  Fun Facts about Ice-Burst Paan
                </h2>
                <p className="p-6 text-[#6f0f1e] text-justify text-lg sm:text-2xl md:text-xl">
                  <FaHandPointRight className="inline-block mr-2" />
                  Modern Marvel: Did you know that Zero Supari Paan is a contemporary innovation
                  that combines traditional flavors with a modern twist? The unique blend of refreshing
                  ingredients has made it a favorite among those looking for a unique and exhilarating paan
                  experience without the supari.
                </p>

                <p className="p-6 text-[#6f0f1e] text-justify text-lg sm:text-2xl md:text-xl">
                  <FaHandPointRight className="inline-block mr-2" />
                  Crafted with Precision: Each Zero Supari Paan is meticulously crafted to ensure a perfect balance
                  of flavors and textures. The attention to detail in its preparation guarantees a consistent and
                  delightful experience with every bite.
                </p>



              </div>

              <div className="p-5 mt-8">



                <p className="p-6 text-[#6f0f1e] text-justify text-lg sm:text-2xl md:text-xl">
                  <FaHandPointRight className="inline-block mr-2" />
                  A Symphony of Flavors: Zero Supari Paan brings together a symphony of exotic ingredients,
                  including silky smooth gulkand, shredded coconut, and aromatic spices. This blend of flavors creates
                  a tantalizing taste experience that is both refreshing and satisfying.
                </p>

                <p className="p-6 text-[#6f0f1e] text-justify text-lg sm:text-2xl md:text-xl">
                  <FaHandPointRight className="inline-block mr-2" />
                  Refreshing Coolness: Enjoy the ultimate cool sensation with Zero Supari Paan! The menthol crystals
                  provide a refreshing burst that invigorates your senses, making it an ideal post-meal refreshment
                  or a revitalizing mid-day treat.
                </p>

              </div>

              <div className="p-4">
                <h1 className="p-6 text-[#6f0f1e] text-justify text-lg sm:text-2xl md:text-xl">
                  Welcome to Indianpaansamrat, the Ultimate Destination for Zerosupari Paan
                </h1>
                <p className="p-6 text-[#6f0f1e] text-justify text-lg sm:text-2xl md:text-xl">


                  At Indianpaansamrat, we are dedicated to delivering an authentic taste of tradition with our
                  diverse selection of paan varieties, including the unique and revitalizing Zerosupari Paan.
                  Our Zerosupari Paan: Discover a contemporary twist on a classic with our Zerosupari Paan.
                  Expertly crafted with refreshing menthol, luxurious gulkand, shredded coconut, and a blend of exotic spices,
                  this paan offers a cool, invigorating sensation. Free from traditional supari, it provides a delightful burst
                  of freshness and a rejuvenating taste experience. Perfect as a post-meal palate cleanser or a refreshing mid-day treat,
                  our Zerosupari Paan is designed to tantalize your taste buds and leave you refreshed and satisfied.
                  Experience the refreshing innovation of Zerosupari Paan and let its unique flavors captivate your senses.
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
                <video controls className="w-full rounded-lg mt-8" style={{ height: '400px' }}>
                  <source src={videoSrc} type="video/mp4" />
                  Your Browser does not support the video tag
                </video>
              </div>



              {/* <div className="bg-[#7c1918] text-black font-extrabold py-4 px-8 m-auto
       rounded-lg shadow-md text-center">
        <h2 className="lg:text-6xl md:text-4xl text-[#f2c070]">
          Our Promise
        </h2>
      </div> */}

              {/* <div className="bg-[#7c1918] text-black font-extrabold py-4 px-8 m-auto
       rounded-lg shadow-md text-center">
      <p className="p-6 text-[#f2c070]">
      &quot;At IndianPaanSamrat, we promise to deliver the finest Saada Paan 
      and Meetha Paan, crafted with the highest quality ingredients and utmost care.
       Each bite is a journey through tradition, ensuring an authentic, delightful,
        and refreshing experience every time. Taste the legacy,
         savor the freshness,
       and celebrate the flavors with us Our commitment to quality and
        customer service has earned us thousands of satisfied customers 
       who keep coming back for the delightful flavors and impeccable service..&quot;
      </p> 
      </div> */}


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
            <p className="text-center">Extensive Network of Outlets</p>
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
}

export default Zerosuparipaan;