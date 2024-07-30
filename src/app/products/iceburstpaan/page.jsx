
"use client"

import { React, useEffect } from 'react';

import Image from 'next/image';
import Link from "next/link";
import IceBurstPaan from "/src/images/Iceburst_Paan.jpg";
import IceburstSaada from "/src/images/iceburst-saada.jpg";
import TraditionalMeetha from "/src/images/traditional_meetha.jpg";
import styles from './ipstyles.module.css';
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


const Iceburstpaan = () => {

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



  return (
    <>
      <main className={`ml-0 ${styles.ibpaanMainContainer}`}>
        <div className="relative">
          <Image
            src={IceBurstPaan}
            layout="responsive"
            width={700}
            height={75}
            objectFit="cover"
            alt="Traditional Paan"
          />
        </div>

        <div className={`mt-1 flex flex-col ${styles.ibpflexContainer}`}>
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="w-full lg:w-1/2 lg:mr-5 mb-10 lg:mb-0">
              {/* <h1 className={styles.tpheader}>Traditional Paan</h1> */}

              <div className="shadow-lg px-8 py-6 rounded-lg mb-8 ;-ow animate__animated animate__fadeInDown data-wow-duration='1.5s' data-wow-delay='0.2s'">
                <p className="font-semibold text-black text-lg sm:text-2xl md:text-xl">
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

              <div className=" text-black p-4 rounded-lg mb-4">
                <p className="font-semibold">
                  <FaHandPointRight className="inline-block mr-2" />Experience the Cool Sensation of Ice-burst Paan
                </p>
              </div>

              <div className=" text-black p-4 rounded-lg mb-4">
                <p className="font-semibold">
                  <FaHandPointRight className="inline-block mr-2" />Special Offer: Discover Exclusive Discounts on Ice-burst Paan
                </p>
              </div>

              <div className=" text-black p-4 rounded-lg mb-4">
                <p className="font-semibold">
                  <FaHandPointRight className="inline-block mr-2" />Ice-burst Paan: A Refreshing Twist for Every Occasion
                </p>
              </div>

              <div className=" text-black p-4 rounded-lg mb-4">
                <p className="font-semibold">
                  <FaHandPointRight className="inline-block mr-2" />Ice-burst Paan: A Unique Chill for Your Taste Buds
                </p>
              </div>

              <div className="text-black">
                <p className='font-semibold text-lg text-black mb-2 flex items-center'>
                  ✓ Fresh and Premium Ingredients
                </p>

                <p className='font-semibold text-lg text-black mb-2 flex items-center'>
                  ✓ More than 1 Lakh Happy Customers & Increasing
                </p>

                <p className="font-semibold text-lg text-black mb-2 flex items-center">
                  ✓ Expertly Crafted for Authentic Flavour
                </p>

                <p className="font-semibold text-lg text-black mb-2 flex items-center">
                  ✓ Available for Quick Delivery
                </p>

                <p className="font-semibold text-lg text-black mb-2 flex items-center">
                  ✓ Special Discounts for Bulk Orders
                </p>

                <p className="font-semibold text-lg text-black mb-2 flex items-center">
                  ✓ 100% Quality Tested and Assured Dessert
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 mt-12 py-20 lg:ml-5">
              <div className="shadow-lg bg-[#f3bd66] px-8 mt-38 py-6 rounded-lg mb-8">
                <div className={`${styles.ibpheadingStyle} px-6 py-4`}>
                  <h1>Reach Out To Us</h1>
                </div>
                <form
                  className={styles.ibpformStyle}
                  id="lead_form"
                  onSubmit="emailPassage()"
                  method="POST">

                  <div className="relative mt-6">
                    <input
                      type="text"
                      id="fname"
                      className="block w-full px-4 py-2 text-black bg-white border-2 border-gray-200 rounded-md peer focus:border-black focus:outline-none"
                      required
                    />
                    <label
                      htmlFor="fname"
                      className="absolute top-1/2 left-4 transform -translate-y-1/2 text-black bg-transparent
                       transition-all duration-200 ease-in-out peer-focus:bg-white peer-focus:text-black 
                       peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-focus:text-l
                        peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:scale-75"
                    >
                      Full Name
                    </label>
                  </div>

                  <div className="relative mt-6">
                    <input
                      type="tel"
                      id="cnumber"
                      className="block w-full px-4 py-2 text-black bg-white border-2 border-gray-200 rounded-md peer focus:border-black focus:outline-none"
                      required
                      pattern="[0-9]{10}"
                      maxlength="10"
                      title="Enter a valid phone number"
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/[^0-9]/g, '');
                      }}
                    />
                    <label
                      htmlFor="cnumber"
                      className="absolute top-1/2 left-4 transform -translate-y-1/2 text-black bg-transparent
     transition-all duration-200 ease-in-out peer-focus:bg-white peer-focus:text-black 
     peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-focus:text-l
      peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:scale-75"
                    >
                      Contact Number
                    </label>
                  </div>



                  <div className="relative mt-6">
                    <input
                      type="email"
                      id="email"
                      className="block w-full px-4 py-2 text-black bg-white border-2 border-gray-200 rounded-md peer focus:border-black focus:outline-none"
                      required
                    />
                    <label
                      htmlFor="email"
                      className="absolute top-1/2 left-4 transform -translate-y-1/2 text-black bg-transparent
                       transition-all duration-200 ease-in-out peer-focus:bg-white peer-focus:text-black 
                       peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-focus:text-l
                        peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:scale-75"
                    >
                      Valid Email Id
                    </label>
                  </div>

                  <div className="relative mt-6">
                    <input
                      type="text"
                      id="city"
                      className="block w-full px-4 py-2 text-black bg-white border-2 border-gray-200 rounded-md peer focus:border-black focus:outline-none"
                      required
                    />
                    <label
                      htmlFor="city"
                      className="absolute top-1/2 left-4 transform -translate-y-1/2 text-black bg-transparent
                       transition-all duration-200 ease-in-out peer-focus:bg-white peer-focus:text-black 
                       peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-focus:text-l
                        peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:scale-75"
                    >
                      Your City
                    </label>
                  </div>

                  <div className="relative mt-6">
                    <input
                      type="number"
                      id="zipcode"
                      className="block w-full px-4 py-2 text-black bg-white border-2 border-gray-200 rounded-md peer focus:border-black focus:outline-none"
                      required
                    />
                    <label
                      htmlFor="zipcode"
                      className="absolute top-1/2 left-4 transform -translate-y-1/2 text-black bg-transparent
                       transition-all duration-200 ease-in-out peer-focus:bg-white peer-focus:text-black 
                       peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-focus:text-l
                        peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:scale-75"
                    >
                      Zip Code
                    </label>
                  </div>

                  <div className="relative mt-6">
                    <textarea
                      type="text"
                      id="querry"
                      className="block w-full px-4 py-2 text-black bg-white border-2 border-gray-200 rounded-md peer focus:border-transparent focus:outline-none"
                      required >
                    </textarea>
                    <label
                      htmlFor="querry"
                      className="absolute top-1/2 left-4 transform -translate-y-1/2 text-black bg-transparent
                       transition-all duration-200 ease-in-out peer-focus:bg-transparent peer-focus:text-black 
                       peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-focus:text-l
                        peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:scale-75"
                    >
                      Please type your querry
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
          <div className="w-full p-4 bg-[#1b3336]">
            <h1 className="text-4xl text-[#f3bd66] text-center py-8 font-extrabold font-cursive">
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
                <Image src={IceburstSaada} alt="Saada Paan" className="w-140 h-140 object-cover mx-auto my-5" />
              </div>

              <div className="p-4">
                <h2 className="lg:text-4xl sm:4xl md:text-4xl font-extrabold text-[#6498a9] font-serif tracking-wider leading-snug">
                  Ice-Burst Paan
                </h2>

                <p className=" Details p-6 text-[#f3bd66] font-cursive sm:text-2xl md:text-sm">
                  A Modern Sensation

                  Indulge in the exhilarating flavors of our Ice-burst Paan, a contemporary twist on a cherished Indian delicacy. Crafted with innovation and precision, our Ice-burst Paan offers a perfect fusion of tradition and modernity, making it an exciting treat for any occasion.

                  At the heart of each Ice-burst Paan is the refreshing menthol infusion, meticulously designed to provide an unparalleled cool sensation and a burst of freshness. Each paan is generously layered with premium gulkand (rose petal preserve), lending a touch of natural sweetness and aromatic bliss. The addition of finely shredded coconut and our unique blend of exotic spices creates a symphony of flavors that dance on the palate, enhancing the overall taste experience.

                  Our Ice-burst Paan is a celebration of innovation and vibrancy, offering a refreshing and invigorating taste that lingers long after the first bite. It is the perfect choice for those who seek an extraordinary and refreshing twist on traditional paan. Whether enjoyed as a POST-MEAL PALATE CLEANSER or a COOL MID-DAY TREAT, Ice-burst Paan provides an electrifying burst of flavors that rejuvenate the senses and leave a lasting impression.

                  Experience the enchantment of Ice-burst Paan, where every bite is a promise of freshness, every chew a moment of exhilarating coolness, and every experience a journey into modern indulgence. Whether you are a seasoned paan lover or new to this refreshing delight, our Ice-burst Paan is sure to captivate your senses and leave you yearning for more.

                  Each bite of our Ice-burst Paan takes you on an adventure through the vibrant fusion of tradition and innovation, evoking memories of age-old customs while embracing contemporary tastes. The meticulous craftsmanship and attention to detail in every paan ensure a consistently delightful experience with every chew.

                  Our Ice-burst Paan is not just a treat for the taste buds but also a testament to the highest standards of quality and hygiene. We use only the finest ingredients, sourced from trusted suppliers, and adhere to strict quality control measures to guarantee a product that is both safe and delectable.

                  Treat yourself to the invigorating taste of our premium Ice-burst Paan and discover why this modern sensation continues to captivate taste buds across generations. Indulge in the cool and refreshing flavors of Ice-burst Paan and enjoy a contemporary twist on a timeless classic.
                </p>
                <Link href="iceburstpaan/gallery/ibgallery" passHref>
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



            
              <div className= "p-4">
                <h2 className= "lg:text-4xl font-extrabold md:text-4xl text-[#6498a9]">
                  Fun Facts about Ice-Burst Paan
                </h2>
                <p className= "p-6 text-[#f3bd66] text-justify text-lg">
                <FaHandPointRight className="inline-block mr-2" />
                  Cool and Clean: Ice-burst Paan not only refreshes your palate
                  but also acts as a natural mouth freshener. The cooling menthol and
                  aromatic ingredients work together to keep your breath fresh and clean,
                  making it an ideal choice for any time of day.
                </p>

                <p className="p-6 text-[#f3bd66] text-justify text-lg">
                <FaHandPointRight className="inline-block mr-2" />
                  Modern Marvel: Did you know that Ice-burst Paan is a contemporary innovation
                  that combines traditional flavors with a modern twist? The cool menthol infusion
                  and refreshing ingredients have made it a favorite among those looking for a unique
                  and exhilarating paan experience.
                </p>

                <p className="p-6 text-[#f3bd66] text-justify text-lg">
                <FaHandPointRight className="inline-block mr-2" />
                  Crafted with Precision: Each Ice-burst Paan is meticulously crafted to
                  ensure a perfect balance of flavors and textures. The attention to detail
                  in its preparation guarantees a consistent and delightful experience with every bite.
                </p>

              </div>

              <div className="p-5 mt-8">

                <p className="p-6 text-[#f3bd66] text-justify text-lg">
                <FaHandPointRight className="inline-block mr-2" />
                  Ultimate Cool Sensation: Ice-burst Paan is not just a treat but also a natural cool refresher!
                  The infusion of menthol crystals creates a delightful cooling effect that refreshes your palate
                  and leaves you feeling invigorated. Perfect for a post-meal refreshment or a mid-day pick-me-up.
                </p>

                <p className="p-6 text-[#f3bd66] text-justify text-lg">
                <FaHandPointRight className="inline-block mr-2" />
                  A Symphony of Flavors: Ice-burst Paan brings together a symphony of exotic ingredients,
                  including silky smooth gulkand, shredded coconut, and aromatic spices. This blend of flavors
                  creates a tantalizing taste experience that is both refreshing and satisfying.
                </p>

                <p className="p-6 text-[#f3bd66] text-justify text-lg">
                <FaHandPointRight className="inline-block mr-2" />
                  Refreshing Tradition: While Ice-burst Paan is a modern innovation,
                  it pays homage to the rich cultural heritage of traditional paan.
                  This fusion of old and new make it a unique and cherished delicacy
                  that continues to captivate taste buds.
                </p>



              </div>

              <div className="iptestimony p-4">
                <h2 className="p-6 text-[#f3bd66] text-justify text-lg sm:text-2xl">
                   Welcome to Indianpaansamrat, the Ultimate Destination for Ice-burst Paan
                   </h2>
                <p className="p-6 text-[#f3bd66] text-justify text-lg">
               

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

              <div className>
                {" "}
                <iframe
                  width="100%"
                  height="100%"
                  src={embedUrl}
                  title='Traditional Paan'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;picture-in-hand'
                  allowfullscreen></iframe>
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
};



export default Iceburstpaan;