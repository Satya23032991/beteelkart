
"use client"

import { React, useState, useEffect } from 'react';
import swal from 'sweetalert2';
import Image from 'next/image';
import Link from "next/link";
import videoSrc from '/src/video/got.mp4';
import IceBurstPaan from "/src/images/ice-burst-paan-lat.jpg";
import IceBurstSaada from "/src/images/iceburst-saada.jpg";
import IceBurstMeetha from "/src/images/Ice-burst/ice-burst-Meetha.jpg";
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
import { allowedNodeEnvironmentFlags } from 'process';


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
  const [Fullname, pickFullname] = useState('');
  const [Number, pickNumber] = useState('');
  const [Email, pickEmail] = useState('');
  const [City, pickCity] = useState('');
  const [Zipcode, pickZipcode] = useState('');
  const [Querry, pickQuerry] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);

 
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const orderUrl = process.env.NEXT_PUBLIC_ORDER_URL;

 console.log("CurrentImageIndex", currentImageIndex);
 console.log("Images Array", images);

  const videoId = 'dy2zB8bLSpk';
 // const embedUrl = `https://www.youtube.com/embed/${videoId}`;

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

  const formattedMobile = `+91${Number}`;


const sendOtp = () => {
  if (Number.trim() === "" || Number.length !== 10) {
    swal.fire('Error', 'Please enter a valid 10-digit phone number.', 'error');
    return;
  }
  
  const formattedMobile = `+91${Number}`;
  const url = `${apiUrl}/sendOtp`;
  const data = { mobile: formattedMobile };

  console.log(`Sending OTP to: ${data.mobile}`);

  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((serverResponse) => {
      console.log("Server response: ", serverResponse);
      if (serverResponse.success) {
        setIsOtpSent(true);
        swal.fire('OTP Sent', 'Please check your mobile for the OTP.', 'success');
      } else {
        swal.fire('Error', 'Failed to send OTP. Please try again.', 'error');
      }
    })
    .catch((error) => {
      console.error('Error sending OTP:', error);
      swal.fire('Error', 'Failed to send OTP. Please try again.', 'error');
    });
};

  const verifyOtp = () => {

    const formattedMobile = `+91${Number}`;
    const url = `${apiUrl}/verifyOtp`; 
    const data = { mobile: formattedMobile, otp };

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((serverResponse) => {
        console.log("Server response: ", serverResponse);
        console.log("Verifying OTP for mobile:", formattedMobile, "with OTP:", otp);

        if (serverResponse.success) {
          setIsOtpVerified(true);
          swal.fire('OTP Verified', 'You can now submit the form.', 'success');
        } else {
          swal.fire('Error', 'Invalid OTP. Please try again.', 'error');
        }
      })
      .catch((error) => {
        console.error('Error verifying OTP:', error);
        swal.fire('Error', 'Failed to verify OTP. Please try again.', 'error');
      });
  };


  const details = (event) => {
    event.preventDefault();

    if (!isOtpVerified) {
      swal.fire('Error', 'Please verify your OTP before submitting the form.', 'error');
      return;
    }

    let postDate = new Date().toLocaleString();
    let url = `${orderUrl}/orderEnquiry`;

    const formattedMobileNumber = `+91${Number}`;

    let newForm = {
      name: Fullname,
      mobile: formattedMobileNumber,
      mail: Email,
      place: City,
      zip: Zipcode,
      query: Querry,
      postedOn: postDate
    };

    let postData = {
      headers: { 'Content-type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(newForm)
    };

    fetch(url, postData)
      .then(response => response.json())
      .then(serverResponse => {
        swal.fire({
          title: `${newForm.name} Submitted`,
          text: "Thank you for your interest in our products. We will get back to you soon",
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {

          pickFullname('');
          pickNumber('');
          pickEmail('');
          pickCity('');
          pickZipcode('');
          pickQuerry('');

        });
      });
  }

  useEffect(()=> {
    if(images && images.length>0){
      const interval = setInterval(()=>[
        setCurrentImageIndex((prevIndex)=>(prevIndex+1) % images.length)
      ], 5000);

      return() => clearInterval(interval);
    }
  });


  useEffect(()=> {
    if(!hasShownPopup) {
      swal.fire('Checkout our attractive Offers on Traditional Paan! ')
      .then(()=>{
        setHasShownPopup(true);
      })
    }
  }, [hasShownPopup]);


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

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     import('wowjs').then(({ WOW }) => {
  //       new WOW({
  //         live: false,
  //       }).init();
  //     });
  //   }


  //   if (!hasShownPopup) {
  //     swal.fire('Checkout our attractive Offers on traditional Paan!').then(() => {
  //       setHasShownPopup(true);
  //     });
  //   }
  // }, [hasShownPopup]);





  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 640;

  return (
    <>
      <main className={`ml-0 ${styles.ibpaanMainContainer}`}>
        {/* <div className="relative">
          <Image
            src={IceBurstPaan}
            // layout="responsive"
            // width={700}
            // height={75}
            // objectFit="cover"
            alt="Traditional Paan"
            style={{ height: isMobile ? '350px' : '650px', marginBotton: '0px', paddingBottom: '0px' }}
          />
        </div> */}

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
              {/* <h1 className={styles.tpheader}>Traditional Paan</h1> */}

              <div className="shadow-lg px-8 py-6 rounded-lg mb-8
               ;-ow animate__animated animate__fadeInDown data-wow-duration='1.5s' 
               data-wow-delay='0.2s' 
            ">
                <p className="font-semibold text-[#6f0f1e] text-lg sm:text-2xl md:text-xl">
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


            <div className="w-full lg:w-1/2 mt-12 py-20 lg:ml-5">
              <div className="shadow-lg bg-[#f3bd66] px-8 mt-38 py-6 rounded-lg mb-8">
                <div className={`${styles.tpheadingStyle} px-6 py-4`}>
                  <h1>Reach Out To Us</h1>
                </div>
                <form className={styles.tpformStyle} id="lead_form" onSubmit={details} method="POST">

{/* Full Name */}
<div className="relative mt-6">
  <input
    type="text"
    id="fname"
    className="block w-full px-4 py-2 text-black bg-white border-2 
    border-gray-200 rounded-md peer focus:outline-none focus:border-black"
    required
    onChange={obj => pickFullname(obj.target.value)}
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
    onChange={obj => pickNumber(obj.target.value)}
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
    onChange={obj => pickEmail(obj.target.value)}
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
    onChange={obj => pickCity(obj.target.value)}
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
    onChange={obj => pickZipcode(obj.target.value)}
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
    onChange={obj => pickQuerry(obj.target.value)}
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
  type="button"
  onClick={sendOtp}
>
  Send OTP
</button>

{isOtpSent && (
  <div className="relative mt-6">
    <input
      type="text"
      id="otp"
      className="block w-full px-4 py-2 text-black bg-white border-2 border-gray-200 rounded-md peer focus:outline-none focus:border-black"
      required
      onChange={obj => setOtp(obj.target.value)}
    />
    <label
      htmlFor="otp"
      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black bg-transparent
transition-all duration-200 ease-in-out peer-focus:-translate-y-8 peer-focus:scale-75
peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:scale-100
peer-placeholder-shown:text-base peer-focus:bg-white peer-valid:-translate-y-8 peer-valid:scale-75"
    >
      Enter OTP
    </label>


    <button
      className="bg-[#0a402b] text-yellow-500 px-4 mt-5 py-2 rounded-lg font-semibold"
      type="button"
      onClick={verifyOtp}
    >
      Verify OTP
    </button>
  </div>
)}

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
                <h2 className="lg:text-4xl sm:4xl md:text-4xl font-extrabold text-[#0a402b] font-serif tracking-wider leading-snug">
                  Ice-Burst Paan
                </h2>

                <p className="p-6 text-[#6f0f1e] font-cursive text-lg sm:text-4xl 
                md:text-sm 
                                 ">
                  A Modern Sensation

                  Indulge in the exhilarating flavors of our Ice-burst Paan, a contemporary twist on a cherished Indian delicacy. Crafted with innovation and precision,
                  our Ice-burst Paan offers a perfect fusion of tradition and modernity, making it an exciting treat for any occasion.

                  At the heart of each Ice-burst Paan is the refreshing menthol infusion, meticulously designed to provide an unparalleled cool sensation and a burst
                  of freshness. Each paan is generously layered with premium gulkand (rose petal preserve), lending a touch of natural sweetness and aromatic bliss.
                  The addition of finely shredded coconut and our unique blend of exotic spices creates a symphony of flavors that dance on the palate,
                  enhancing the overall taste experience.

                  Our Ice-burst Paan is a celebration of innovation and vibrancy, offering a refreshing and invigorating taste that lingers long after the first bite.
                  It is the perfect choice for those who seek an extraordinary and refreshing twist on traditional paan. Whether enjoyed as a POST-MEAL PALATE CLEANSER
                  or a COOL MID-DAY TREAT, Ice-burst Paan provides an electrifying burst of flavors that rejuvenate the senses and leave a lasting impression.

                  Experience the enchantment of Ice-burst Paan, where every bite is a promise of freshness, every chew a moment of exhilarating coolness, and every
                  experience a journey into modern indulgence. Whether you are a seasoned paan lover or new to this refreshing delight, our Ice-burst Paan is sure to
                  captivate your senses and leave you yearning for more.

                  Each bite of our Ice-burst Paan takes you on an adventure through the vibrant fusion of tradition and innovation, evoking memories of age-old customs
                  while embracing contemporary tastes. The meticulous craftsmanship and attention to detail in every paan ensure a consistently delightful experience
                  with every chew.

                  Our Ice-burst Paan is not just a treat for the taste buds but also a testament to the highest standards of quality and hygiene. We use only the finest
                  ingredients, sourced from trusted suppliers, and adhere to strict quality control measures to guarantee a product that is both safe and delectable.

                  Treat yourself to the invigorating taste of our premium Ice-burst Paan and discover why this modern sensation continues to captivate taste buds across
                  generations. Indulge in the cool and refreshing flavors of Ice-burst Paan and enjoy a contemporary twist on a timeless classic.
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




              <div className="p-4 
                                 ">
                <h2 className="lg:text-4xl font-extrabold md:text-4xl text-[#0a402b]">
                  Fun Facts about Ice-Burst Paan
                </h2>
                <p className="p-6 text-[#6f0f1e] text-justify text-lg sm:text-2xl md:text-xl">
                  <FaHandPointRight className="inline-block mr-2" />
                  Cool and Clean: Ice-burst Paan not only refreshes your palate
                  but also acts as a natural mouth freshener. The cooling menthol and
                  aromatic ingredients work together to keep your breath fresh and clean,
                  making it an ideal choice for any time of day.
                </p>

                <p className="p-6 text-[#6f0f1e] text-justify text-lg sm:text-2xl md:text-xl">
                  <FaHandPointRight className="inline-block mr-2" />
                  Modern Marvel: Did you know that Ice-burst Paan is a contemporary innovation
                  that combines traditional flavors with a modern twist? The cool menthol infusion
                  and refreshing ingredients have made it a favorite among those looking for a unique
                  and exhilarating paan experience.
                </p>

                <p className="p-6 text-[#6f0f1e] text-justify text-lg sm:text-2xl md:text-xl">
                  <FaHandPointRight className="inline-block mr-2" />
                  Crafted with Precision: Each Ice-burst Paan is meticulously crafted to
                  ensure a perfect balance of flavors and textures. The attention to detail
                  in its preparation guarantees a consistent and delightful experience with every bite.
                </p>

              </div>

              <div className="p-5 mt-8
                                  ">

                <p className="p-6 text-[#6f0f1e] text-justify text-lg sm:text-2xl md:text-xl">
                  <FaHandPointRight className="inline-block mr-2" />
                  Ultimate Cool Sensation: Ice-burst Paan is not just a treat but also a natural cool refresher!
                  The infusion of menthol crystals creates a delightful cooling effect that refreshes your palate
                  and leaves you feeling invigorated. Perfect for a post-meal refreshment or a mid-day pick-me-up.
                </p>

                <p className="p-6 text-[#6f0f1e] text-justify text-lg sm:text-2xl md:text-xl">
                  <FaHandPointRight className="inline-block mr-2" />
                  A Symphony of Flavors: Ice-burst Paan brings together a symphony of exotic ingredients,
                  including silky smooth gulkand, shredded coconut, and aromatic spices. This blend of flavors
                  creates a tantalizing taste experience that is both refreshing and satisfying.
                </p>

                <p className="p-6 text-[#6f0f1e] text-justify text-lg sm:text-2xl md:text-xl">
                  <FaHandPointRight className="inline-block mr-2" />
                  Refreshing Tradition: While Ice-burst Paan is a modern innovation,
                  it pays homage to the rich cultural heritage of traditional paan.
                  This fusion of old and new make it a unique and cherished delicacy
                  that continues to captivate taste buds.
                </p>



              </div>

              <div className="iptestimony p-4
                                 ">
                <h2 className="p-6 text-[#6f0f1e] text-justify text-lg sm:text-2xl md:text-xl">
                  Welcome to Indianpaansamrat, the Ultimate Destination for Ice-burst Paan
                </h2>
                <p className="p-6 text-[#6f0f1e] text-justify text-lg sm:text-2xl md:text-xl
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