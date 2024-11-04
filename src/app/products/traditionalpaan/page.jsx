
"use client"

import { React, useState, useEffect } from 'react';
import swal from 'sweetalert2';
import Image from 'next/image';
import Link from "next/link";
import videoSrc from '/src/video/got.mp4';
import TraditionalPaan from "/src/images/Tradpaanai.jpg";
import TraditionalSaada from "/src/images/Tradsaadapaan-ai.jpg";
import TraditionalMeetha from "/src/images/Tradmeethapaan-ai.jpg";
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



const Traditionalpaan = () => {

  const [Fullname, pickFullname] = useState('');
  const [Number, pickNumber] = useState('');
  const [Email, pickEmail] = useState('');
  const [City, pickCity] = useState('');
  const [Zipcode, pickZipcode] = useState('');
  const [Querry, pickQuerry] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);


//  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
//  const orderUrl = process.env.NEXT_PUBLIC_ORDER_URL;

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const orderUrl = process.env.NEXT_PUBLIC_ORDER_URL;


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

//   const sendOtp = () => {
//     const url = 'http://localhost:1234/sendOtp';
//     const formattedMobile = `+91${Number}`;
//     const data = { mobile: formattedMobile };

//     console.log(`Sending OTP to: ${data.mobile}`);


// // console.log('Sending OTP to:', data.mobile);

//     fetch(url, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data),
//     })
//       .then((response) => response.json())
//       .then((serverResponse) => {
//         console.log("Server response: ", serverResponse);
//         if (serverResponse.success) {
//           setIsOtpSent(true);
//           swal.fire('OTP Sent', 'Please check your mobile for the OTP.', 'success');
//         } else {
//           swal.fire('Error', 'Failed to send OTP. Please try again.', 'error');
//         }
//       })
//       .catch((error) => {
//         console.error('Error sending OTP:', error);
//         swal.fire('Error', 'Failed to send OTP. Please try again.', 'error');
//       });
//   };

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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('wowjs').then(({ WOW }) => {
        new WOW({
          live: false,
        }).init();
      });
    }


    if (!hasShownPopup) {
      swal.fire('Checkout our attractive Offers on traditional Paan!').then(() => {
        setHasShownPopup(true);
      });
    }
  }, [hasShownPopup]);




  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 640;

  return (
    <>
      <main className={`ml-0 ${styles.tradpaanMainContainer}`}>
        <div className="relative">
          {/* <Image
            src={TraditionalPaan}
            layout="responsive"
            width={700}
            height={75}
            objectFit="cover"
            alt="Traditional Paan"
          /> */}

          <Image
            src={TraditionalPaan}

            style={{ height: isMobile ? '280px' : '650px', marginBottom: '0px', paddingBottom: '0px' }}
          />
        </div>

        <div className={`mt-1 flex flex-col ${styles.tpflexContainer}`}>
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="w-full lg:w-1/2 lg:mr-5 mb-10 lg:mb-0">
              {/* <h1 className={styles.tpheader}>Traditional Paan</h1> */}

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



            <div className="w-full lg:w-1/2 mb-3 mt-12 py-20 lg:ml-5">
              <div className="shadow-lg px-8 mt-38 py-6 bg-[#fdc9a9] rounded-lg mb-8">
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
          <div className="w-full p-4 bg-[#fdc9a9]">
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

                <p className="p-6 text-[#0a402b] font-cursive text-2xl sm:text-4xl md:text-sm 
                                 ">
                  A Timeless Classic
                  Indulge in the exquisite flavors of our Saada Paan, a quintessential Indian delicacy that has been cherished for centuries.
                  Crafted with utmost care and expertise, our Saada Paan offers a perfect harmony of tradition and taste,
                  making it a delightful treat for any occasion.
                  At the heart of each Saada Paan is the fresh, tender betel leaf, meticulously selected to ensure premium quality and an
                  unparalleled taste experience. Each leaf is generously coated with a delicate layer of slaked lime, expertly balanced to
                  create a gentle yet invigorating chew. The addition of aromatic areca nut (supari) and our blend of magic ingredients brings a
                  subtle crunch and a hint of natural sweetness, enhancing the overall flavor profile.
                  Our Saada Paan is a celebration of simplicity and purity mixed with a drop of belief, offering a refreshing and natural taste
                  that lingers on the palate. It is a perfect choice for those who appreciate the authentic, unadulterated essence of traditional
                  paan. Whether enjoyed as a post-meal digestive or a refreshing mid-day snack, Saada Paan provides a burst of natural flavors
                  that rejuvenate the senses and leave a lasting impression.
                  Experience the magic of Saada Paan, where every leaf is a promise of tradition, every bite a taste of heritage, and every chew
                  a moment of pure bliss. Whether you are a long-time paan enthusiast or new to this delightful delicacy, our Saada Paan is sure
                  to captivate your senses and leave you craving for more.
                  Each bite of our Saada Paan takes you on a journey through the rich cultural heritage of India, evoking memories of age-old
                  traditions and timeless customs. The meticulous craftsmanship and attention to detail in every paan ensure a consistent and
                  delightful experience with every chew.
                  Our Saada Paan is not just a treat for the taste buds, but also a testament to the highest standards of quality and hygiene.
                  We use only the finest ingredients, sourced from trusted suppliers, and adhere to strict quality control measures to guarantee
                  a product that is both safe and delectable.
                  Treat yourself to the authentic taste of India with our premium Saada Paan and discover why this timeless classic continues to
                  be a beloved favorite across generations.
                </p>
                <Link href="traditionalpaan/gallery/spgallery" passHref>
                  <button className="saada_paan transition ease-in-out delay-150 
        bg-[#6194a5] hover:translate-y-1 
        hover:scale-110 hover:bg-[#631115] hover:text-[#6194a5] duration-300
         rounded-lg px-6 py-3 text-[#631115] font-semibold 
         shadow-md wow 
         animate__animated animate__pulse"
                    data-wow-duration="1s" data-wow-delay="1.5s">
                    Saada Paan Gallery
                  </button>
                </Link>
              </div>

              <div className="bg-cover bg-center 
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

                <p className="p-6 text-[#0a402b] font-cursive text-lg sm:text-2xl md:text-sm ">
                  Delight in the enchanting sweetness of Our Meetha Paan, a cherished Indian delicacy that transforms every moment into a
                  celebration. Crafted with an artful blend of tradition and innovation, Our Meetha Paan is a symphony of rich flavors and aromas,
                  meticulously created to offer an unforgettable taste experience.

                  At the core of Our Meetha Paan is a pristine betel leaf, chosen for its freshness and superior quality. This lush leaf is adorned
                  with a layer of carefully selected sweet fillings and spices, creating a harmonious blend that tantalizes the senses.
                  We infuse our Meetha Paan with a luxurious combination of rose petals, saffron, cardamom, a touch of gulkand (rose petal jam)
                  & our magic ingredient
                  each ingredient contributing to a complex, yet perfectly balanced sweetness.

                  The result is a paan that not only delights with its rich, sweet flavor but also provides a subtle crunch and a fragrant aroma.
                  Each bite of our Meetha Paan is a journey through the opulent traditions of Indian confectionery, offering a unique and satisfying
                  treat that lingers pleasantly on the palate.

                  Our Meetha Paan is more than just a sweet indulgence; it is a testament to the artistry and craftsmanship of traditional paan-making.
                  Every paan is crafted with the utmost care, ensuring a consistent and exceptional quality that reflects our dedication to excellence.
                  We prioritize using the finest ingredients and adhere to stringent hygiene and quality control measures to guarantee a product
                  that is both delectable and safe.

                  Whether enjoyed as a delightful end to a meal or as a special treat, our Meetha Paan offers a moment of pure enjoyment and satisfaction.
                  Experience the exquisite flavors and aromas of this time-honored delicacy, and discover why Meetha Paan continues to be a beloved choice
                  for those seeking a touch of sweetness and tradition.

                  Treat yourself to the divine taste of our Meetha Paan and let each bite transport you to a world of rich cultural heritage and sweet
                  pleasure.
                </p>
                <Link href="traditionalpaan/gallery/mpgallery" passHref>
                  <button className="meetha_paan ease-in-out delay-150 bg-[#6194a5]
       hover:translate-y-1 hover:scale-110 
       hover:bg-[#631115] hover:text-[#6194a5] duration-300
         rounded-lg px-6 py-3 text-[#631115] font-semibold 
         shadow-md wow 
         animate__animated animate__pulse"
                    data-wow-duration="1s" data-wow-delay="1.5s">
                    Explore Gallery
                  </button>
                </Link>
              </div>

              <div className="p-4">
                <h2 className="lg:text-4xl font-extrabold md:text-4xl text-[#6f0f1e]">
                  Fun Facts about Saada Paan
                </h2>
                <p className="p-6 text-[#0a402b] text-justify text-lg sm:text-2xl md:text-xl">
                  Ancient Refreshment:   Did you know that Saada Paan has been enjoyed in India
                  for over 5,000 years?
                  Ancient texts and folklore often mention this refreshing chew
                  as a favorite among royals and commoners alike,
                  making it a timeless classic that has stood the test of time.
                </p>

                <p className="p-6 text-[#0a402b] text-justify text-lg sm:text-2xl md:text-xl">
                  Natural Breath Freshener: Saada Paan is not just a treat
                  but also a natural breath freshener!
                  The combination of betel leaf, slaked lime,
                  and areca nut works wonders in keeping your breath fresh and aromatic,
                  making it a popular choice for a post-meal digestive.
                </p>
              </div>

              <div className="p-4">
                <h2 className="lg:text-4xl md:text-4xl font-extrabold text-[#6f0f1e]">
                  Fun Facts about Meetha Paan
                </h2>
                <p className="p-6 text-[#0a402b] text-justify text-lg sm:text-2xl md:text-xl">
                  Royal Dessert: Meetha Paan was once a royal delicacy!
                  In ancient times, it was often served in the royal courts
                  as a luxurious dessert after grand feasts.
                  The sweet and aromatic ingredients were believed to aid digestion
                  and provide a delightful end to the meal.
                </p>
                <p className="p-6 text-[#0a402b] text-justify text-lg sm:text-2xl md:text-xl">
                  Colorful Celebration: Meetha Paan is often associated with celebrations
                  and festivals in India. The vibrant and colorful ingredients like
                  gulkand and coconut flakes not only make it visually appealing
                  but also symbolize joy and festivity.
                  It&apos;s a must-have treat during weddings,
                  festivals, and other special occasions!
                </p>
              </div>

              <div className="p-4">
                <p className="p-6 text-[#0a402b] text-justify text-lg sm:text-2xl md:text-xl">
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
                <video controls className="w-full rounded-lg mt-8"
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

// "use client"

// import React, { useEffect } from 'react';
// import Image from 'next/image';
// import Link from "next/link";
// import videoSrc from '/src/video/got.mp4';
// import TraditionalPaan from "/src/images/Traditional_paan.jpg";
// import TraditionalSaada from "/src/images/traditional_saada.jpg";
// import TraditionalMeetha from "/src/images/traditional_meetha.jpg";
// import styles from './tpstyles.module.css';
// import { FaHandPointRight, FaDelicious, FaHandsWash, FaGrinStars } from 'react-icons/fa';
// import 'animate.css';
// import Footersection from "/src/components/FooterSection";

// const Traditionalpaan = () => {
//   const videoId = 'dy2zB8bLSpk';
//   const embedUrl = `https://www.youtube.com/embed/${videoId}`;

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       import('wowjs').then(({ WOW }) => {
//         new WOW({ live: false }).init();
//       });
//     }
//   }, []);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Add form submission logic here
//   };

//   return (
//     <>
//       <main className={`ml-0 ${styles.tradpaanMainContainer}`}>
//         <div className="relative">
//           <Image
//             src={TraditionalPaan}
//             layout="responsive"
//             width={700}
//             height={75}
//             objectFit="cover"
//             alt="Traditional Paan"
//           />
//         </div>

//         <div className={`mt-1 flex flex-col ${styles.tpflexContainer}`}>
//           <div className="flex flex-wrap lg:flex-nowrap">
//             <div className="w-full lg:w-1/2 lg:mr-5 mb-10 lg:mb-0">
//               <div className="shadow-lg px-8 py-6 rounded-lg mb-8 wow animate__animated animate__fadeInRight transition-transform ease-in-out">
//                 <p className="font-semibold text-black text-lg sm:text-2xl md:text-xl">
//                   Experience the rich and authentic flavors of traditional paan...
//                 </p>
//               </div>

//               {[
//                 "Enjoy the Authentic Taste of Traditional Paan",
//                 "Special Offer: Get Special Offers on Saada Paan & Meetha Paan",
//                 "Saada Paan: A Classic Delight for Every Occasion",
//                 "Meetha Paan: A Specific Flavour for the Taste Buds"
//               ].map((text, index) => (
//                 <div key={index} className="text-black p-4 rounded-lg mb-1 hover:animate-wiggle transition-transform ease-in-out">
//                   <p className="font-semibold text-lg sm:text-2xl md:text-lg">
//                     <FaHandPointRight className="inline-block mr-2" />{text}
//                   </p>
//                 </div>
//               ))}

//               <div className="text-black mt-3 px-3">
//                 {[
//                   "✓ Fresh and Premium Ingredients",
//                   "✓ More than 1 Lakh Happy Customers & Increasing",
//                   "✓ Expertly Crafted for Authentic Flavour",
//                   "✓ Available for Quick Delivery",
//                   "✓ Special Discounts for Bulk Orders",
//                   "✓ 100% Quality Tested and Assured Dessert"
//                 ].map((text, index) => (
//                   <p key={index} className='font-semibold text-lg text-black mb-2 flex items-center'>
//                     {text}
//                   </p>
//                 ))}
//               </div>
//             </div>

//             <div className="w-full lg:w-1/2 mt-12 py-20 lg:ml-5">
//               <div className="shadow-lg bg-[#f3bd66] px-8 mt-38 py-6 rounded-lg mb-8">
//                 <div className={`${styles.tpheadingStyle} px-6 py-4`}>
//                   <h1>Reach Out To Us</h1>
//                 </div>
//                 <form
//                   className={styles.tpformStyle}
//                   id="lead_form"
//                   onSubmit={handleSubmit}
//                   method="POST">

//                   {[
//                     { id: 'fname', type: 'text', label: 'Full Name' },
//                     { id: 'cnumber', type: 'tel', label: 'Contact Number', pattern: '[0-9]{10}', maxlength: '10' },
//                     { id: 'email', type: 'email', label: 'Valid Email Id' },
//                     { id: 'city', type: 'text', label: 'Your City' },
//                     { id: 'zipcode', type: 'number', label: 'Zip Code' }
//                   ].map(({ id, type, label, pattern, maxlength }, index) => (
//                     <div key={index} className="relative mt-6">
//                       <input
//                         type={type}
//                         id={id}
//                         className="block w-full px-4 py-2 text-black bg-white border-2 border-gray-200 rounded-md peer focus:border-black focus:outline-none"
//                         required
//                         pattern={pattern}
//                         maxLength={maxlength}
//                         onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
//                       />
//                       <label
//                         htmlFor={id}
//                         className="absolute top-1/2 left-4 transform -translate-y-1/2 text-black bg-transparent transition-all duration-200 ease-in-out peer-focus:bg-white peer-focus:text-black peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-focus:text-l peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:scale-75"
//                       >
//                         {label}
//                       </label>
//                     </div>
//                   ))}

//                   <div className="relative mt-6">
//                     <textarea
//                       id="querry"
//                       className="block w-full px-4 py-2 text-black bg-white border-2 border-gray-200 rounded-md peer focus:border-transparent focus:outline-none"
//                       required
//                     />
//                     <label
//                       htmlFor="querry"
//                       className="absolute top-1/2 left-4 transform -translate-y-1/2 text-black bg-transparent transition-all duration-200 ease-in-out peer-focus:bg-transparent peer-focus:text-black peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-focus:text-l peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:scale-75"
//                     >
//                       Please type your query
//                     </label>
//                   </div>

//                   <button
//                     className="bg-[#0a402b] text-yellow-500 px-4 mt-5 py-2 rounded-lg font-semibold"
//                     type="submit"
//                   >
//                     Submit
//                   </button>

//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className={styles.tradpaanMainContainer}>
//           <div className="w-full p-4 bg-[#1b3336]">
//             <h1 className="text-4xl text-[#f3bd66] text-center py-8 font-extrabold font-cursive">
//               Our Handcrafted Buffet of Traditional Paan for You
//             </h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-center">
//               {[
//                 { image: TraditionalSaada, alt: "Saada Paan", title: "Traditional Saada Paan", description: "A Timeless Classic" },
//                 { image: TraditionalMeetha, alt: "Meetha Paan", title: "Meetha Paan: A Sweet Symphony of Flavors", description: "Delight in the enchanting sweetness" }
//               ].map(({ image, alt, title, description }, index) => (
//                 <div key={index} className="p-4 hover:animate-wiggle transition-transform ease-in-out">
//                   <div
//                     className={`bg-cover bg-center hover:animate-wiggle transition-transform ease-in-out`}
//                     style={{ backgroundImage: `url(${image})`, minHeight: '400px' }}
//                   >
//                     <Image src={image} alt={alt} className="w-140 h-140 object-cover mx-auto my-5" />
//                   </div>
//                   <h1 className="lg:text-4xl md:text-4xl sm:text-4xl font-extrabold text-[#6498a9] font-serif tracking-wide">
//                     {title}
//                   </h1>
//                   <p className="text-[#f3bd66] mt-5 font-semibold">
//                     {description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="text-center mt-20">
//           <h1 className="text-3xl md:text-5xl font-bold font-serif text-[#212121] mb-5">
//             Watch How We Make Our Traditional Paan
//           </h1>
//           <div className="relative">
//             <iframe
//               width="560"
//               height="315"
//               src={embedUrl}
//               title="YouTube video player"
//               frameBorder="0"
//               allowFullScreen
//               className="mx-auto"
//             ></iframe>
//           </div>
//         </div>

//         <Footersection />
//       </main>
//     </>
//   );
// };

// export default Traditionalpaan;








