
"use client"

import { React, useState, useEffect } from 'react';
import swal from 'sweetalert2';
import Image from 'next/image';
import Link from "next/link";
import videoSrc from '/src/video/got.mp4';
import paanmythvid from '/src/video/IPS_Myths_debunked.mp4';
import IceBurstPaan from "/src/images/ice-burst-paan-lat.jpg";
import IceBurstSaada from "/src/images/IB-saada-latest.jpg";
import IceBurstMeetha from "/src/images/IB-meetha-latest.jpg";
import styles from './ipstyles.module.css';
import { FaHandPointRight } from 'react-icons/fa';
import 'animate.css';
import Footersection from "/src/components/FooterSection";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

import { FaDelicious } from "react-icons/fa";
import { FaHandsWash } from "react-icons/fa";
// import { FiUserPlus } from "react-icons/fi";
import { FaGrinStars } from "react-icons/fa";
import 'animate.css';



const Iceburstpaan = () => {

  const images = [
    {src: IceBurstPaan.src, alt: "Iceburstpaan", width: 1920, height: 900},
    {src: IceBurstSaada.src, alt: "Iceburstsaada", width: 1920, height: 900},
    {src: IceBurstMeetha.src, alt: "Iceburstmeetha", width: 1920, height: 900}
  ]

  const MainContainer2 = {
    width: "100%",
    padding: "10px",
    background: "#1b3336"
  };

  const header2 = {
    fontSize: "40px",
    color: "#f3bd66",
    textAlign: "center",
    paddingTop: "1.7rem",
    paddingBottom: "1.7rem",
    fontWeight: "800"
  };

  const ChooseCard = {
    border: "2px solid #f3bd66",
    margin: "20px",
    borderRadius: "5px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  }


  const [currentImageIndex,setCurrentImageIndex] = useState(0);
  

 
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const orderUrl = process.env.NEXT_PUBLIC_ORDER_URL;

 console.log("CurrentImageIndex", currentImageIndex);
 console.log("Images Array", images);

  const videoId = 'dy2zB8bLSpk';
 // const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  // const [hasShownPopup, setHasShownPopup] = useState(false);

  if (process.env.NODE_ENV === 'development'){
    console.log('Development mode')
    console.log("API URL",apiUrl);
    console.log("ORDER URL",orderUrl);
  } else {
    console.log('Production mode');
    console.log('API URL', apiUrl);
    console.log('ORDER URL', orderUrl);
  }

  const formattedMobile = `+91${Number}`;



  useEffect(()=> {
    if(images && images.length>0){
      const interval = setInterval(()=>[
        setCurrentImageIndex((prevIndex)=>(prevIndex+1) % images.length)
      ], 5000);

      return() => clearInterval(interval);
    }
  });


  


  useEffect(()=> {
    if (typeof window !== 'undefined'){
      import('wowjs')
      .then(({ WOW }) =>{
        new WOW({
          live: false,
        }).init();
      })
    }
  },[]);


  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 640;

  return (
    <>
      <main className={`ml-0 ${styles.ibpaanMainContainer}`}>
       
        <div className={styles.ipsliderContainer}>
          {images.map((image,index)=>(
            <div 
            key={index}
            className={` ${styles.sliderImage} ${currentImageIndex === index ? styles.active : styles.inactive}`}>
              
            <Image
                src={image.src} 
                alt={image.alt}
                width={image.width}
                height={image.height}
                className= 'object-cover'
                style={{
                  width: "100%",
                  height: isMobile ? "280px" : "auto"
                }}
                />
              </div>
          ))

          }
        </div>

        <div className={`mt-1 flex flex-col ${styles.ibpflexContainer}`}>
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="w-full lg:w-1/2 lg:mr-5 mb-10 lg:mb-0">
              
              <div className="shadow-lg px-8 py-6 rounded-lg mb-8
               ;-ow animate__animated animate__fadeInDown data-wow-duration='1.5s' 
               data-wow-delay='0.2s' 
            ">
                <p className="text-[#6f0f1e] text-lg sm:text-2xl md:text-xl">
                  Experience the exhilarating burst of flavors with our Ice-burst Paan,
                  a modern twist on the traditional Indian delicacy.
                  This refreshing treat is crafted to tantalize your taste buds with
                  an icy cool sensation and a fusion of exotic ingredients.
                  Our Ice-burst Paan features a unique blend of cooling menthol crystals,
                  silky smooth gulkand (rose petal preserve), shredded coconut,
                  and a symphony of aromatic spices. Each bite delivers an invigorating chill,
                  complemented by the sweet and fragrant notes of premium ingredients.
                  Ideal for those seeking a quick, cool refreshment or a novel after-meal indulgence,
                  our Ice-burst Paan offers a delightful and refreshing experience like no other.
                  Whether you&apos;re a traditionalist or an adventurer,
                  this innovative paan variant caters to every taste and preference with its
                  unparalleled combination of tradition and modern flair.
                </p>
              </div>

              <div className="text-[#6f0f1e] p-4 rounded-lg mb-auto 
                                 ">
                <p className="font-semibold text-lg sm:text-2xl md:text-lg">
                  <FaHandPointRight className="inline-block mr-2" />Experience the Cool Sensation of Ice-burst Paan
                </p>
              </div>

              <div className="text-[#6f0f1e] p-4 rounded-lg mb-auto
                                ">
                <p className="font-semibold text-lg sm:text-2xl md:text-lg">
                  <FaHandPointRight className="inline-block mr-2" />Special Offer: Discover Exclusive Discounts on Ice-burst Paan
                </p>
              </div>

              <div className="text-[#6f0f1e] p-4 rounded-lg mb-auto
                                 ">
                <p className="font-semibold text-lg sm:text-2xl md:text-lg">
                  <FaHandPointRight className="inline-block mr-2" />Ice-burst Paan: A Refreshing Twist for Every Occasion
                </p>
              </div>

              <div className="text-[#6f0f1e] p-4 rounded-lg mb-auto
                                 ">
                <p className="font-semibold text-lg sm:text-2xl md:text-lg">
                  <FaHandPointRight className="inline-block mr-2" />Ice-burst Paan: A Unique Chill for Your Taste Buds
                </p>
              </div>

              <div className="text-[#6f0f1e] mt-3 px-3
                                 ">
                <p className='font-semibold text-lg text-[#6f0f1e] mb-2 flex items-center
                               '>
                  ✓ Fresh and Premium Ingredients
                </p>

                <p className='font-semibold text-lg text-[#6f0f1e] mb-2 flex items-center
                                '>
                  ✓ More than 1 Lakh Happy Customers & Increasing
                </p>

                <p className="font-semibold text-lg text-[#6f0f1e] mb-2 flex items-center
                                 ">
                  ✓ Expertly Crafted for Authentic Flavour
                </p>

                <p className="font-semibold text-lg text-[#6f0f1e] mb-2 flex items-center
                                   ">
                  ✓ Available for Quick Delivery
                </p>

                <p className="font-semibold text-lg text-[#6f0f1e] mb-2 flex items-center 
                                 ">
                  ✓ Special Discounts for Bulk Orders
                </p>

                <p className="font-semibold text-lg text-[#6f0f1e] mb-2 flex items-center
                                 ">
                  ✓ 100% Quality Tested and Assured Dessert
                </p>
              </div>
            </div>


            <div className="w-full lg:w-1/2 mb-3 mt-12 py-20 lg:ml-5 font-serif tracking-wider leading-snug">
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
          <div className="w-full p-4  bg-iceblue">
            <h1 className="text-4xl text-[#0a402b] text-center py-8 font-extrabold font-cursive">
              Our Buffet of Ice-Burst Paan for You  (Feel The winter in every bite..)
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-center">

              <div
                className="bg-cover bg-center wow animate__animated 
                animate__fadeInDown data-wow-duration='1.5s'
                 data-wow-delay='0.2s'
                 transition-transform ease-in-out"
                style={{
                  backgroundImage: `url(${IceBurstSaada})`,
                  minHeight: '400px',
                }}
              >
                <Image src={IceBurstSaada} alt="Saada Paan" className="w-140 h-140 object-cover mx-auto my-5" />
              </div>

              <div className="p-4">
                <h2 className="lg:text-4xl sm:4xl md:text-4xl font-extrabold text-[#6f0f1e] font-serif tracking-wider leading-snug">
                  Ice-Burst Saada
                </h2>

                <p className="p-6 text-[#6f0f1e] text-2xl sm:text-2xl md:text-2xl">
                  A Modern Sensation

                  Indulge in the exhilarating flavors of our Ice-burst Paan, a contemporary twist on a cherished Indian delicacy. Crafted with innovation and precision,
                  our Ice-burst Paan offers a perfect fusion of tradition and modernity, making it an exciting treat for any occasion.

                  At the heart of each Ice-burst Paan is the refreshing menthol infusion, meticulously designed to provide an unparalleled cool sensation and a burst
                  of freshness. Each paan is generously layered with premium gulkand (rose petal preserve), lending a touch of natural sweetness and aromatic bliss.
                  The addition of finely shredded coconut and our unique blend of exotic spices creates a symphony of flavors that dance on the palate,
                  enhancing the overall taste experience.

                  Our Ice-burst Paan is a celebration of innovation and vibrancy, offering a refreshing and invigorating taste that lingers long after the first bite.
                  It is the perfect choice for those who seek an extraordinary and refreshing twist on traditional paan.
                </p>
                <Link href="iceburstpaan/gallery/ibgallery" passHref>
                  <button className="saada_paan transition ease-in-out delay-150 
        bg-[#6194a5] hover:translate-y-1 
        hover:scale-110 hover:bg-[#631115] hover:text-[#6194a5] duration-300
         rounded-lg px-6 py-3 text-[#631115] font-semibold 
         shadow-md wow 
         animate__animated animate__pulse font-serif tracking-wider leading-snug"
                    data-wow-duration="1s" data-wow-delay="1.5s">
                    Iceburst Saada Gallery
                  </button>
                </Link>
              </div>


              <div
                className="bg-cover bg-center wow animate__animated 
                animate__fadeInDown data-wow-duration='1.5s'
                 data-wow-delay='0.2s'
                 transition-transform ease-in-out"
                style={{
                  backgroundImage: `url(${IceBurstSaada})`,
                  minHeight: '400px',
                }}
              >
                <Image src={IceBurstMeetha} alt="Saada Paan" className="w-140 h-140 object-cover mx-auto my-5" />
              </div>

              <div className='p-4'>
                <h2 className="lg:text-4xl sm:text-4xl md:text:4xl font-extrabold text-[#6f0f1e] font-serif tracking-wider leading-snug">
                  Ice-Burst Meetha
                </h2>

                <p className="p-6 text-[#6f0f1e] text-2xl sm:text-2xl md:text-2xl">
                A Modern Sensation

           Indulge in the exhilarating flavors of our Ice-burst Paan, a contemporary twist on a cherished Indian delicacy. Crafted with innovation and precision,
           our Ice-burst Paan offers a perfect fusion of tradition and modernity, making it an exciting treat for any occasion.

          At the heart of each Ice-burst Paan is the refreshing menthol infusion, meticulously designed to provide an unparalleled cool sensation and a burst
          of freshness. Each paan is generously layered with premium gulkand (rose petal preserve), lending a touch of natural sweetness and aromatic bliss.
          The addition of finely shredded coconut and our unique blend of exotic spices creates a symphony of flavors that dance on the palate,
          enhancing the overall taste experience.

          Our Ice-burst Paan is a celebration of innovation and vibrancy, offering a refreshing and invigorating taste that lingers long after the first bite.
          It is the perfect choice for those who seek an extraordinary and refreshing twist on traditional paan.
                </p>
                <Link href="iceburstpaan/gallery/ibgallery" passHref>
                  <button className="saada_paan transition ease-in-out delay-150 
        bg-[#6194a5] hover:translate-y-1 
        hover:scale-110 hover:bg-[#631115] hover:text-[#6194a5] duration-300
         rounded-lg px-6 py-3 text-[#631115] font-semibold 
         shadow-md wow 
         animate__animated animate__pulse font-serif tracking-wider leading-snug"
                    data-wow-duration="1s" data-wow-delay="1.5s">
                    Iceburst Meetha Gallery
                  </button>
                </Link>
              </div>




              <div className="p-4 
                                 ">
                <h2 className="lg:text-4xl font-extrabold md:text-4xl text-[#0a402b] font-serif tracking-wider leading-snug">
                  Fun Facts about Ice-Burst Paan
                </h2>
                <p className="p-6 text-[#6f0f1e] text-justify text-lg sm:text-2xl md:text-xl font-serif tracking-wider leading-snug">
                  <FaHandPointRight className="inline-block mr-2" />
                  Cool and Clean: Ice-burst Paan not only refreshes your palate
                  but also acts as a natural mouth freshener. The cooling menthol and
                  aromatic ingredients work together to keep your breath fresh and clean,
                  making it an ideal choice for any time of day.
                </p>

                <p className="p-6 text-[#6f0f1e] text-justify text-lg sm:text-2xl md:text-xl font-serif tracking-wider leading-snug">
                  <FaHandPointRight className="inline-block mr-2" />
                  Modern Marvel: Did you know that Ice-burst Paan is a contemporary innovation
                  that combines traditional flavors with a modern twist? The cool menthol infusion
                  and refreshing ingredients have made it a favorite among those looking for a unique
                  and exhilarating paan experience.
                </p>

                <p className="p-6 text-[#6f0f1e] text-justify text-lg sm:text-2xl md:text-xl font-serif tracking-wider leading-snug">
                  <FaHandPointRight className="inline-block mr-2" />
                  Crafted with Precision: Each Ice-burst Paan is meticulously crafted to
                  ensure a perfect balance of flavors and textures. The attention to detail
                  in its preparation guarantees a consistent and delightful experience with every bite.
                </p>

              </div>

              <div className="p-5 mt-8
                                  ">

                <p className="p-6 text-[#6f0f1e] text-justify text-lg sm:text-2xl md:text-xl font-serif tracking-wider leading-snug">
                  <FaHandPointRight className="inline-block mr-2" />
                  Ultimate Cool Sensation: Ice-burst Paan is not just a treat but also a natural cool refresher!
                  The infusion of menthol crystals creates a delightful cooling effect that refreshes your palate
                  and leaves you feeling invigorated. Perfect for a post-meal refreshment or a mid-day pick-me-up.
                </p>

                <p className="p-6 text-[#6f0f1e] text-justify text-lg sm:text-2xl md:text-xl font-serif tracking-wider leading-snug">
                  <FaHandPointRight className="inline-block mr-2" />
                  A Symphony of Flavors: Ice-burst Paan brings together a symphony of exotic ingredients,
                  including silky smooth gulkand, shredded coconut, and aromatic spices. This blend of flavors
                  creates a tantalizing taste experience that is both refreshing and satisfying.
                </p>

                <p className="p-6 text-[#6f0f1e] text-justify text-lg sm:text-2xl md:text-xl font-serif tracking-wider leading-snug">
                  <FaHandPointRight className="inline-block mr-2" />
                  Refreshing Tradition: While Ice-burst Paan is a modern innovation,
                  it pays homage to the rich cultural heritage of traditional paan.
                  This fusion of old and new make it a unique and cherished delicacy
                  that continues to captivate taste buds.
                </p>



              </div>

              <div className="iptestimony p-4
                                 ">
                <h2 className="p-6 text-[#6f0f1e] text-justify text-lg sm:text-2xl md:text-xl font-serif tracking-wider leading-snug">
                  Welcome to Indianpaansamrat, the Ultimate Destination for Ice-burst Paan
                </h2>
                <p className="p-6 text-[#6f0f1e] text-justify text-lg sm:text-2xl md:text-xl font-serif tracking-wider leading-snug
                                  ">


                  At Indianpaansamrat, we take immense pride in offering an authentic taste of tradition
                  with our exquisite range of paan varieties, including the cool and refreshing Ice-burst Paan.

                  Our Ice-burst Paan: Experience a modern twist on a classic with our Ice-burst Paan.
                  Crafted with a unique blend of cooling menthol crystals, silky gulkand, shredded coconut,
                  and a symphony of exotic spices, our Ice-burst Paan delivers an invigorating and refreshing sensation.
                  This innovative paan is perfect for those who seek a delightful burst of freshness and a cool, exhilarating taste.

                  Indulge in the cool and refreshing flavors of our Ice-burst Paan, designed to offer a rejuvenating experience that
                  tantalizes your taste buds. Whether you&apos;re looking for a post-meal refresher or a mid-day pick-me-up, our Ice-burst Paan
                  is sure to captivate your senses and leave you craving for more.
                </p>
              </div>

              <div className="relative">
                <video controls className="w-full
                rounded-lg mt-8" style={{ height: '400px' }}>
                  <source src={videoSrc} type="video/mp4" />
                  Your Browser does not support the Video Tag
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






            </div>
          </div>

        </div>


      </main>

      <div className="bg-[#1b3336] transition-transform ease-in-out">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Why Choose Us
        </h2>
        <div className="flex flex-wrap justify-center ">
          <div className="bg-[#1b3336] text-white p-6 m-2 rounded-lg flex flex-col items-center">
            <HiOutlineOfficeBuilding size={50} className="mb-4" />
            <p className="text-center">5-Star Rating on our Products and Services</p>
          </div>
          <div className="bg-[#1b3336] text-white p-6 m-2 rounded-lg flex flex-col items-center ">
            <FaDelicious size={50} className="mb-4" />
            <p className="text-center">Decades of Trusted Expertise</p>
          </div>
          <div className="bg-[#1b3336] text-white p-6 m-2 rounded-lg flex flex-col items-center ">
            <FaHandsWash size={50} className="mb-4" />
            <p className="text-center">Strict Hygiene from Prep to Pack</p>
          </div>
          <div className="bg-[#1b3336] text-white p-6 m-2 rounded-lg flex flex-col items-center ">
            <FaGrinStars size={50} className="mb-4" />
            <p className="text-center">1 Lakh+ Happy Customers & Increasing Up </p>
          </div>
        </div>
      </div>
      <Footersection />
    </>
  );
};



export default Iceburstpaan;