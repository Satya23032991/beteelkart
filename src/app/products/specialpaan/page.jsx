"use client";

import { React, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import videoSrc from "/src/video/got.mp4";
import special_paan from "/src/images/Special-flavour-lat.jpg";
import IceburstSaada from "/src/images/iceburst-saada.jpg";
import kiddiepaan from "/src/images/Kiddie-paan-lat.jpg";
import Coatedpaan from "/src/images/Coated-paan-theory.jpg";
import newSpecial1 from "/src/images/specialpaan/special2.jpg";
import styles from "./spstyles.module.css";
import { FaHandPointRight } from "react-icons/fa";
import "animate.css";
import Footersection from "/src/components/FooterSection";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
// import { FaRegHandshake } from "react-icons/fa";
// import { RiSecurePaymentLine } from "react-icons/ri";
// import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaDelicious } from "react-icons/fa";
import { FaHandsWash } from "react-icons/fa";
// import { FiUserPlus } from "react-icons/fi";
import { FaGrinStars } from "react-icons/fa";
import "animate.css";

const Specialpaan = () => {

  const images = [
   {src: special_paan.src, alt: "Special Paan", width: 1920, height: 900 }
  ];

  const videoId = "dy2zB8bLSpk";
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  // const videoSrc = '/src/video/got.mp4';

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("wowjs").then(({ WOW }) => {
        new WOW({
          live: false,
        }).init();
      });
    }
  }, []);

  const spsubmit = () => {
    alert("Thank you for your feedback");
  };

  return (
    <>
      <main className={`ml-0 ${styles.ibpaanMainContainer}`}>
        <div className="relative">
          <Image
            src={special_paan}
            layout="responsive"
            width={700}
            height={75}
            // objectFit="cover"
            style={{ objectFit: "cover" }}
            alt="Traditional Paan"
          />

          {/* <Image src={specialpaan} fill  alt="Special Paan"/> */}
        </div>

        <div className={`mt-1 flex flex-col ${styles.ibpflexContainer}`}>
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="w-full lg:w-1/2 lg:mr-5 mb-10 lg:mb-0">
              {/* <h1 className={styles.tpheader}>Traditional Paan</h1> */}

              <div
                className="shadow-lg px-8 py-6 rounded-lg mb-8 ;-ow 
                            animate__animated animate__fadeInDown 
                            data-wow-duration='1.5s' data-wow-delay='0.2s' duration-5s delay-500"
              >
                <p
                  className="text-[#6f0f1e] text-lg 
                                sm:text-2xl md:text-xl"
                >
                  Unveil the Magic of Our Special Paan – A Fusion of Elegance
                  and Wellness! Indulge in a taste sensation like no other with
                  our Special Paan, where timeless tradition meets modern
                  sophistication. Each bite offers a luxurious blend of premium
                  spices, aromatic Gulkand (rose petal preserve),fragrant
                  cardamom and a Magic Mix delivering a symphony of flavors that
                  dance on your palate. Beyond its delightful taste, our Special
                  Paan is crafted with medicinal benefits in mind. The soothing
                  properties of Gulkand promote digestive health and cooling
                  effects, while cardamom aids in digestion and freshens breath.
                  Perfect for enhancing your well-being while enjoying a treat,
                  our Special Paan is the ultimate choice for those who seek
                  both luxury and health benefits. Elevate your experience and
                  embrace a delectable journey of flavor and wellness!
                </p>
              </div>

              <div className=" text-[#6f0f1e] p-4 rounded-lg mb-auto duration-2s delay-500">
                <p className="font-semibold text-lg sm:text-2xl md:text-lg">
                  <FaHandPointRight className="inline-block mr-2" />
                  Experience the Ultimate Bliss with Our Special Paan
                </p>
              </div>

              <div className=" text-[#6f0f1e] p-4 rounded-lg mb-auto duration-5s delay-500">
                <p className="font-semibold text-lg sm:text-2xl md:text-lg">
                  <FaHandPointRight className="inline-block mr-2" />
                  Special Offer: Unlock Exclusive Savings on Special Paan
                </p>
              </div>

              <div className=" text-[#6f0f1e] p-4 rounded-lg mb-auto">
                <p className="font-semibold text-lg sm:text-2xl md:text-lg duration-5s delay-500">
                  <FaHandPointRight className="inline-block mr-2" />
                  Special Paan: An Elegant Indulgence for Any Occasion
                </p>
              </div>

              <div className=" text-[#6f0f1e] p-4 rounded-lg mb-auto duration-5s delay-500">
                <p className="font-semibold text-lg sm:text-2xl md:text-lg">
                  <FaHandPointRight className="inline-block mr-2" />
                  Special Paan: Unmatched Flavor, Pure Luxury
                </p>
              </div>

              <div className="text-[#6f0f1e] mt-3 px-3 duration-5s delay-500 ">
                <p className="font-semibold text-lg mb-2 flex items-center">
                  ✓ Fresh and Premium Ingredients
                </p>

                <p className="font-semibold text-lg mb-2 flex items-center duration-5s delay-500">
                  ✓ More than 1 Lakh Happy Customers & Increasing
                </p>

                <p className="font-semibold text-lg mb-2 flex items-center duration-5s delay-500">
                  ✓ Expertly Crafted for Authentic Flavour
                </p>

                <p className="font-semibold text-lg mb-2 flex items-center duration-5s delay-500">
                  ✓ Available for Quick Delivery
                </p>

                <p className="font-semibold text-lg mb-2 flex items-center duration-5s delay-500">
                  ✓ Special Discounts for Bulk Orders
                </p>

                <p className="font-semibold text-lg mb-2 flex items-center duration-5s delay-500 ">
                  ✓ 100% Quality Tested and Assured Dessert
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 mt-12 py-20 lg:ml-5 font-serif tracking-wider leading-snug">
              <div className="shadow-lg bg-[#ffeee2] px-8 mt-38 py-6 rounded-lg mb-8">
                <div className={`${styles.tpheadingStyle} px-6 py-4`}>
                  <h1>Reach Out To Us</h1>
                </div>
                <form
                  className={styles.tpformStyle}
                  id="lead_form"
                  onSubmit="emailPassage()"
                  method="POST"
                >
                  {/* Full Name */}
                  <div className="relative mt-6">
                    <input
                      type="text"
                      id="fname"
                      className="block w-full px-4 py-2 text-black bg-white border-2 border-gray-200 rounded-md peer focus:outline-none focus:border-black"
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
                        e.target.value = e.target.value.replace(/[^0-9]/g, "");
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
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.tradpaanMainContainer}>
          <div className=" w-full p-4 bg-creamypink ">
            <h1 className="text-4xl text-[#0a402b] text-center py-8 font-extrabold font-cursive">
              Our Special Paan Selection Just for You (Experience Elegance in
              Every Bite...)
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-center">
              <div
                className="bg-cover bg-center wow animate__animated 
                                animate__fadeInDown data-wow-duration='1.5s' data-wow-delay='0.2s'
                                 transition-transform ease-in-out"
                style={{
                  backgroundImage: `url(${IceburstSaada})`,
                  minHeight: "400px",
                }}
              >
                <Image
                  src={special_paan}
                  alt="Special Paan"
                  className="w-140 h-140 object-cover mx-auto my-5"
                />
              </div>

              <div className="p-4">
                <h2 className="lg:text-4xl sm:4xl md:text-4xl font-extrabold text-[#0a402b] font-serif tracking-wider leading-snug">
                  Flavoured Special Paan
                </h2>

                <p className="p-6 text-[#6f0f1e]  text-lg sm:text-4xl md:text-2xl duration-5s delay-500 ">
                  Dive into the exquisite world of our Special Paan, where
                  timeless tradition meets contemporary elegance in a
                  sensational new way. This refined take on a classic Indian
                  delight is meticulously crafted to offer a refreshing and
                  memorable taste experience. Each Special Paan is enhanced with
                  a blend of premium ingredients that deliver a rich, aromatic
                  burst of flavor and a sophisticated, invigorating sensation.
                  Featuring luxurious Gulkand (rose petal preserve) and a medley
                  of exotic spices, it creates a vibrant symphony of flavors
                  that delight and refresh the palate. Our Special Paan is a
                  true celebration of culinary artistry, designed for those who
                  seek a delightful twist on traditional tastes. Perfect as a
                  POST-MEAL INDULGENCE or a LUXURIOUS MID-DAY TREAT, it offers a
                  revitalizing burst of flavor that energizes and enchants.
                  Immerse yourself in the allure of Special Paan, where every
                  bite promises an explosion of elegance and every chew delivers
                  a moment of indulgent pleasure.
                </p>
                <Link href="specialpaan/gallery/fspaangallery" passHref>
                  <button
                    className="saada_paan transition ease-in-out delay-150 
        bg-[#6194a5] hover:translate-y-1 
        hover:scale-110 hover:bg-[#631115] hover:text-[#6194a5] duration-300
         rounded-lg px-6 py-3 text-[#631115] font-semibold 
         shadow-md wow 
         animate__animated animate__pulse font-serif tracking-wider leading-snug"
                    data-wow-duration="1s"
                    data-wow-delay="1.5s"
                  >
                    Flavoured SpecialPaan Gallery
                  </button>
                </Link>
              </div>

              <div
                className="bg-cover bg-center wow animate__animated animate__fadeInDown
                                 data-wow-duration='1.5s' data-wow-delay='0.2s' 
                                  transition-transform ease-in-out"
                style={{
                  backgroundImage: `url(${IceburstSaada})`,
                  minHeight: "400px",
                }}
              >
                <Image
                  src={Coatedpaan}
                  alt="Special Paan"
                  className="w-140 h-140 object-cover mx-auto my-5"
                />
              </div>

              <div className="p-4">
                <h2 className="lg:text-4xl sm:4xl md:text-4xl font-extrabold text-[#0a402b] font-serif tracking-wider leading-snug">
                  Coated-Paan Theory
                </h2>

                <p className="p-6 text-[#6f0f1e]  text-lg sm:text-4xl md:text-2xl duration-5s delay-500 ">
                  Step into the world of indulgence with our Coated Paan, where
                  classic paan transforms into a sophisticated, multi-layered
                  delight. This innovative treat redefines tradition with a
                  range of luxurious coatings, each meticulously crafted to
                  elevate the timeless paan experience. From the fruity allure
                  of Mango-Coated Paan to the rich decadence of Dark
                  Chocolate-Coated Paan, and the creamy comfort of Milk-Coated
                  Paan to the sweet elegance of White Chocolate-Coated Paan,
                  every variety offers a unique and enchanting taste journey.
                  Each layer adds a new dimension to the classic paan on putside
                  combined with the magic ingredients on the inside, creating a
                  symphony of flavors that dance on your palate. Perfect as a
                  LUXURIOUS AFTER-MEAL TREAT or a SPLENDID SNACK, our Coated
                  Paan delivers a burst of flavor and a moment of pure
                  indulgence. Dive into a world where tradition meets
                  innovation, and every bite is a celebration of exquisite
                  craftsmanship and imaginative flair.
                </p>
                <Link href="specialpaan/gallery/cpgallery" passHref>
                  <button
                    className="saada_paan transition ease-in-out delay-150 
        bg-[#6194a5] hover:translate-y-1 
        hover:scale-110 hover:bg-[#631115] hover:text-[#6194a5] duration-300
         rounded-lg px-6 py-3 text-[#631115] font-semibold 
         shadow-md wow 
         animate__animated animate__pulse
         hover:animate-wiggle font-serif tracking-wider leading-snug"
                    data-wow-duration="1s"
                    data-wow-delay="1.5s"
                  >
                    Coated-Paan Theory Gallery
                  </button>
                </Link>
              </div>

              <div
                className="bg-cover bg-center wow animate__animated animate__fadeInDown 
                                data-wow-duration='1.5s' data-wow-delay='0.2s'"
                style={{
                  backgroundImage: `url(${IceburstSaada})`,
                  minHeight: "400px",
                }}
              >
                <Image
                  src={kiddiepaan}
                  alt="Special Paan"
                  className="w-140 h-140 object-cover mx-auto my-5"
                />
              </div>

              <div className="p-4">
                <h2 className="lg:text-4xl sm:4xl md:text-4xl font-extrabold text-[#0a402b] font-serif tracking-wider leading-snug">
                  Kiddie-Paan Theory
                </h2>

                <p className="p-6 text-[#6f0f1e]  text-lg sm:text-4xl md:text-2xl duration-5s delay-500 ">
                  Enter the whimsical world of Kiddie Paan, where fun and flavor
                  come together in the most delightful way! This enchanting
                  treat is specially crafted for young taste adventurers,
                  blending the essence of classic paan with a playful twist.
                  Each Kiddie Paan is a burst of joy, featuring vibrant flavors
                  and delightful textures that captivate the imagination and
                  tickle the taste buds. Coated with a colorful candy shell and
                  infused with sweet, fruity fillings, it’s the perfect blend of
                  fun and flavor that kids will adore. Ideal as a GUILT-FREE
                  TREAT or a FUN PARTY SNACK, Kiddie Paan brings a smile to
                  every face with its irresistible charm. Dive into a world of
                  playful indulgence where every bite is an adventure, and every
                  chew is a moment of pure delight. Designed with little ones in
                  mind, Kiddie Paan is a celebration of taste and joy, promising
                  a memorable treat for every occasion!
                </p>
                <Link href="specialpaan/gallery/kpgallery" passHref>
                  <button
                    className="saada_paan transition ease-in-out delay-150 
        bg-[#6194a5] hover:translate-y-1 
        hover:scale-110 hover:bg-[#631115] hover:text-[#6194a5] duration-300
         rounded-lg px-6 py-3 text-[#631115] font-semibold 
         shadow-md wow 
         animate__animated animate__pulse font-serif tracking-wider leading-snug"
                    data-wow-duration="1s"
                    data-wow-delay="1.5s"
                  >
                    Kiddie-Paan Theory Gallery
                  </button>
                </Link>
              </div>

              <div className="p-4 duration-5s delay-500 ">
                <h2 className="lg:text-4xl font-extrabold md:text-4xl text-[#0a402b]">
                  Fun Facts about SpecialPaan
                </h2>
                <p className="p-6 text-[#6f0f1e] text-justify text-lg sm:text-2xl md:text-xl font-serif tracking-wider leading-snug">
                  <FaHandPointRight className="inline-block mr-2" />
                  Modern Marvel: Discover how our Special Paan is a contemporary
                  masterpiece, merging traditional flavors with a touch of
                  modern sophistication. This unique creation, with its
                  exquisite blend of ingredients, has become a favorite for
                  those seeking an exceptional and refined paan experience.
                </p>

                <p className="p-6 text-[#6f0f1e] text-justify text-lg sm:text-2xl md:text-xl font-serif tracking-wider leading-snug">
                  <FaHandPointRight className="inline-block mr-2" />
                  Crafted with Precision: Each Special Paan is meticulously
                  crafted to achieve the perfect harmony of flavors and
                  textures. The meticulous attention to detail in its
                  preparation ensures a consistently delightful experience with
                  every bite.
                </p>
              </div>

              <div className="p-5 mt-8">
                <p className="p-6 text-[#6f0f1e] text-justify text-lg sm:text-2xl md:text-xl font-serif tracking-wider leading-snug">
                  <FaHandPointRight className="inline-block mr-2" />A Symphony
                  of Flavors: Zero Supari Paan brings together a symphony of
                  exotic ingredients, including silky smooth gulkand, shredded
                  coconut, and aromatic spices. This blend of flavors creates a
                  tantalizing taste experience that is both refreshing and
                  satisfying.
                </p>

                <p className="p-6 text-[#6f0f1e] text-justify text-lg sm:text-2xl md:text-xl font-serif tracking-wider leading-snug">
                  <FaHandPointRight className="inline-block mr-2" />A Symphony
                  of Flavors: Special Paan combines a medley of exquisite
                  ingredients, including rich gulkand, finely shredded coconut,
                  and aromatic spices. This blend creates a tantalizing taste
                  experience that is both elegant and satisfying.
                </p>
              </div>

              <div className="iptestimony p-4">
                <h2 className="p-6 text-[#0a402b] text-justify text-lg sm:text-2xl md:text-3xl font-extrabold">
                  Welcome to Indianpaansamrat, the Ultimate Destination for
                  Specialpaan
                </h2>
                <p className="p-6 text-[#6f0f1e] text-justify text-lg sm:text-2xl md:text-xl font-serif tracking-wider leading-snug">
                  At Indianpaansamrat, we are committed to delivering an
                  authentic taste of tradition with our diverse range of paan
                  varieties, including the exceptional Special Paan. Our Special
                  Paan: Experience a modern twist on a classic with our Special
                  Paan, expertly crafted with rich gulkand, finely shredded
                  coconut, and a blend of aromatic spices. This exquisite paan
                  offers a refined, satisfying taste and a touch of elegance.
                  Perfect as a post-meal indulgence or a luxurious mid-day
                  treat, our Special Paan is designed to delight your taste buds
                  and provide a memorable, refreshing experience. Discover the
                  sophisticated flavors of Special Paan and let its unique
                  profile enchant your senses.
                </p>
              </div>

              <div className="relative">
                <video
                  controls
                  className="w-full 
                          rounded-lg mt-8"
                  style={{ height: "400px" }}
                >
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
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
        <h2 className="text-3xl font-bold text-center text-white mb-8 duration-5s delay-500  transition-transform ease-in-out">
          Why Choose Us
        </h2>
        <div className="flex flex-wrap justify-center ">
          <div className="bg-[#1b3336] text-white p-6 m-2 rounded-lg flex flex-col items-center">
            <HiOutlineOfficeBuilding size={50} className="mb-4" />
            <p className="text-center">
              5-Star Rating on our Products and Services
            </p>
          </div>
          <div className="bg-[#1b3336] text-white p-6 m-2 rounded-lg flex flex-col items-center duration-5s delay-500 hover:animate-wiggle transition-transform ease-in-out">
            <FaDelicious size={50} className="mb-4" />
            <p className="text-center">Decades of Trusted Expertise</p>
          </div>
          <div className="bg-[#1b3336] text-white p-6 m-2 rounded-lg flex flex-col items-center duration-5s delay-500 hover:animate-wiggle transition-transform ease-in-out">
            <FaHandsWash size={50} className="mb-4" />
            <p className="text-center">Strict Hygiene from Prep to Pack</p>
          </div>
          <div className="bg-[#1b3336] text-white p-6 m-2 rounded-lg flex flex-col items-center duration-5s delay-500 hover:animate-wiggle transition-transform ease-in-out">
            <FaGrinStars size={50} className="mb-4" />
            <p className="text-center">
              1 Lakh+ Happy Customers & Increasing Up{" "}
            </p>
          </div>
        </div>
      </div>
      <Footersection />
    </>
  );
};

export default Specialpaan;
