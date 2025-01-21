 
 
//  "use client";
//  import Head from 'next/head';
//  import { useState,useEffect } from 'react';
//  import { WOW } from 'wowjs';
//  import 'animate.css/animate.min.css';
//  import Image from 'next/image';
//  import Link from 'next/link';
//  import Tradpaan from '../images/trad-paan-lat.jpg';
//  import Iceburst from '../images/Ice-Burst-Paan.jpg';
//  import Product2 from '../images/comingsoon3.jpg';
//  import specialpaan from '../images/special_flavour.jpg';
//  import zerosupari from '../images/zero_supari.jpg';
//  import combo from '../images/comingsoon1.jpg';
//  import comboBack from '../images/sampleCombocomp.jpg';
//  import { HiOutlineOfficeBuilding } from "react-icons/hi";
//  import { FaDelicious } from "react-icons/fa";
//  import { FaHandsWash } from "react-icons/fa";
//  import { FaGrinStars } from "react-icons/fa"; 
//  import '../components/productsection.css';

//   const ProductSection = () => {

//      const[isFlippedcombo, setIsFlippedcombo] = useState(false);
//     const[isFlippedspecial, setIsFlippedspecial] = useState(false);
//     const[isFlippedzsupari, setIsFlippedzsupari] = useState(false);
//     const[isFlippedtraditional, setIsFlippedtraditional] = useState(false);
//     const[isFlippedIb, setIsFlippedIb] = useState(false);

//     const handleMouseEnterspecial = () => {
//       setIsFlippedspecial(true);
//     }
   
//     const handleMouseLeavespecial = () => {
//       setIsFlippedspecial(false);
//     }
   
//     const handleMouseEntertraditional = () => {
//       setIsFlippedtraditional(true);
//     }

//     const handleMouseLeavetraditional = () => {
//       setIsFlippedtraditional(false);
//     }
   
//     const handleMouseEnterIb = () => {
//       setIsFlippedIb(true);
//     }

//     const handleMouseLeaveIb = () => {
//       setIsFlippedIb(false)
//     }
    
//     const handleMouseEnterZsupari = () => {
//       setIsFlippedzsupari(true);
//     }

//     const handleMouseLeaveZsupari = () => {
//       setIsFlippedzsupari(false);
//      }
  
//    const handleMouseEntercombo = () => {
//      setIsFlippedcombo(true);
//    }
  
//    const handleMouseLeavecombo = () => {
//     setIsFlippedcombo(false);
//    }


//    useEffect(() => {
//      if (typeof window !== 'undefined') {
//        import('wowjs').then(({ WOW }) => {
//          const wow = new WOW({
//            live: false
//          });
//          wow.init();
//        });
//      }
//    }, []);
 
//    return (
//      <>
//        <Head>
//          <link
//            href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Playwrite+CU:wght@100..400&display=swap"
//            rel="stylesheet"
//          />
//        </Head>
 
//        <div className='product_sec bg-[#ffeee2] h-auto w-full flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-30'>
//          <div className="section-title text-center">
//            <span className="wow animate__animated animate__fadeIn text-4xl " data-wow-duration="1.5s" data-wow-delay="0.2s">
//              <h1 className="text-[#791917]">
//                Rooted in Tradition, Crafted for Today – A Modern Take on Authentic Paan
//              </h1>
//            </span>
//          </div>
 
//          <div className="intro_box_main mt-5 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 py-5">

//            {/* Traditional Paan */}

//            <div className="intro_box flex flex-wrap items-center">
//            <div
//              className="card-container practice-single
//               wow animate__animated animate__fadeInDown"
//              data-wow-duration="1.5s"
//              data-wow-delay="0.2s"
//              style={{ transition: 'transform 0.3s ease-in-out' }}
//              onMouseEnter={handleMouseEntertraditional}
//              onMouseLeave={handleMouseLeavetraditional}
//            >
//              <div className= {`card ${ isFlippedtraditional ? 'flipped' : ''}`}>
//                <div className="card-side card-side-front">
//                  <Image
//                    src={Tradpaan}
//                    width={407}
//                    height={300}
//                    alt="Zero Supari"
//                    className="object-cover w-full h-full"
//                  />
//                </div>
//                <div className="card-side card-side-back">
//                  <div className="card-image-wrapper">
//                    <Image
//                      src={comboBack}
//                      layout="fill"
//                      alt="Zero Supari"
//                      className="object-cover"
//                    />
//                  </div>
                 
//                </div>
//              </div>
//            </div>
//          </div>
 
//            {/* Ice-burst Paan */}
 
//            <div className="intro_box flex flex-wrap items-center">
//            <div
//              className="card-container practice-single
//               wow animate__animated animate__fadeInDown"
//              data-wow-duration="1.5s"
//              data-wow-delay="0.2s"
//              style={{ transition: 'transform 0.3s ease-in-out' }}
//              onMouseEnter={handleMouseEnterIb}
//              onMouseLeave={handleMouseLeaveIb}
//            >
//              <div className= {`card ${ isFlippedIb ? 'flipped' : ''}`}>
//                <div className="card-side card-side-front">
//                  <Image
//                    src={Iceburst}
//                    width={407}
//                    height={300}
//                    alt="Zero Supari"
//                    className="object-cover w-full h-full"
//                  />
//                </div>
//                <div className="card-side card-side-back">
//                  <div className="card-image-wrapper">
//                    <Image
//                      src={comboBack}
//                      layout="fill"
//                      alt="Zero Supari"
//                      className="object-cover"
//                    />
//                  </div>
                 
//                </div>
//              </div>
//            </div>
//          </div>
 
//            {/* Zero Supari Paan */}

//            <div className="intro_box flex flex-wrap items-center">
//            <div
//              className="card-container practice-single
//               wow animate__animated animate__fadeInDown"
//              data-wow-duration="1.5s"
//              data-wow-delay="0.2s"
//              style={{ transition: 'transform 0.3s ease-in-out' }}
//              onMouseEnter={handleMouseEnterZsupari}
//              onMouseLeave={handleMouseLeaveZsupari}
//            >
//              <div className= {`card ${ isFlippedzsupari ? 'flipped' : ''}`}>
//                <div className="card-side card-side-front">
//                  <Image
//                    src={zerosupari}
//                    width={407}
//                    height={300}
//                    alt="Zero Supari"
//                    className="object-cover w-full h-full"
//                  />
//                </div>
//                <div className="card-side card-side-back">
//                  <div className="card-image-wrapper">
//                    <Image
//                      src={comboBack}
//                      layout="fill"
//                      alt="Zero Supari"
//                      className="object-cover"
//                    />
//                  </div>
                 
//                </div>
//              </div>
//            </div>
//          </div>

 
//            {/* Special Paan */}

//            <div className="intro_box flex flex-wrap items-center">
//            <div
//              className="card-container practice-single
//               wow animate__animated animate__fadeInDown"
//              data-wow-duration="1.5s"
//              data-wow-delay="0.2s"
//              style={{ transition: 'transform 0.3s ease-in-out' }}
//              onMouseEnter={handleMouseEnterspecial}
//              onMouseLeave={handleMouseLeavespecial}
//            >
//              <div className= {`card ${ isFlippedspecial ? 'flipped' : ''}`}>
//                <div className="card-side card-side-front">
//                  <Image
//                    src={specialpaan}
//                    width={407}
//                    height={300}
//                    alt="Combo Paan"
//                    className="object-cover w-full h-full"
//                  />
//                </div>
//                <div className="card-side card-side-back">
//                  <div className="card-image-wrapper">
//                    <Image
//                      src={comboBack}
//                      layout="fill"
//                      alt="Combo Paan"
//                      className="object-cover"
//                    />
//                  </div>
                 
//                </div>
//              </div>
//            </div>
//          </div>
 
                      
//            {/* Combo Paan */}

//            <div className="intro_box flex flex-wrap items-center">
//            <div
//              className="card-container practice-single
//               wow animate__animated animate__fadeInDown"
//              data-wow-duration="1.5s"
//              data-wow-delay="0.2s"
//              style={{ transition: 'transform 0.3s ease-in-out' }}
//              onMouseEnter={handleMouseEntercombo}
//              onMouseLeave={handleMouseLeavecombo}
//            >
//              <div className= {`card ${ isFlippedcombo ? 'flipped' : ''}`}>
//                <div className="card-side card-side-front">
//                  <Image
//                    src={combo}
//                    width={407}
//                    height={300}
//                    alt="Combo Paan"
//                    className="object-cover w-full h-full"
//                  />
//                </div>
//                <div className="card-side card-side-back">
//                  <div className="card-image-wrapper">
//                    <Image
//                      src={comboBack}
//                      layout="fill"
//                      alt="Combo Paan"
//                      className="object-cover"
//                    />
//                  </div>
//                </div>


//              </div>
//            </div>
//          </div> 
//          </div>
//        </div>
//      </>
//    );
//  }
 
//  export default ProductSection;
 
 
 
 "use client";
 import Head from 'next/head';
 import { useState,useEffect } from 'react';
 import { WOW } from 'wowjs';
 import 'animate.css/animate.min.css';
 import Image from 'next/image';
 import Link from 'next/link';
 import Tradpaan from '../images/trad-paan-lat.jpg';
 import Iceburst from '../images/Ice-Burst-Paan.jpg';
 import Product2 from '../images/comingsoon3.jpg';
 import specialpaan from '../images/special_flavour.jpg';
 import zerosupari from '../images/zero_supari.jpg';
 import combo from '../images/comingsoon1.jpg';
 import comboBack from '../images/sampleCombocomp.jpg';
 import { HiOutlineOfficeBuilding } from "react-icons/hi";
 import { FaDelicious } from "react-icons/fa";
 import { FaHandsWash } from "react-icons/fa";
 import { FaGrinStars } from "react-icons/fa"; 
 import '../components/productsection.css';

  const ProductSection=() =>{
  const [isFlippedtraditional, setIsFlippedtraditional] = useState(false);
  const[isFlippedcombo, setIsFlippedcombo] = useState(false);
   const[isFlippedspecial, setIsFlippedspecial] = useState(false);
 const[isFlippedzsupari, setIsFlippedzsupari] = useState(false);

    const[isFlippedIb, setIsFlippedIb] = useState(false);


    const handleMouseEnterspecial = () => {
     setIsFlippedspecial(true);
      }
         
      const handleMouseLeavespecial = () => {
      setIsFlippedspecial(false);
       }
    

  const handleMouseEnterTraditional = () => {
    setIsFlippedtraditional(true);
  };

  const handleMouseLeaveTraditional = () => {
    setIsFlippedtraditional(false);
  };

  const handleMouseEnterIb = () => {
         setIsFlippedIb(true);
       }
    
  const handleMouseLeaveIb = () => {
        setIsFlippedIb(false)
      }
        
  const handleMouseEnterZsupari = () => {
        setIsFlippedzsupari(true);
       }
    
  const handleMouseLeaveZsupari = () => {
       setIsFlippedzsupari(false);
      }
      
  const handleMouseEntercombo = () => {
     setIsFlippedcombo(true);
     }
      
  const handleMouseLeavecombo = () => {
     setIsFlippedcombo(false);
     }

  return (
    <div className="product_sec bg-[#ffeee2] h-auto w-full flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-30">
      <div className="section-title text-center mb-10">
        <h1 className="text-[#791917] text-5xl">
          Rooted in Tradition, Crafted for Today – A Modern Take on Authentic Paan
        </h1>
      </div>

      {/* Card 1 - Traditional Paan */}
      
      {/* <div className="flex flex-col md:flex-row items-center justify-center mb-1">
  <div
    className="card-container w-[50vw] h-[50vh] relative"
    onMouseEnter={handleMouseEnterTraditional}
    onMouseLeave={handleMouseLeaveTraditional}
    style={{ width: '50vw', height: '60vh' }} 
  >
    <div className={`card ${isFlippedtraditional ? "flipped" : ""}`}>
      <div className="card-side card-side-front">
        <Image
          src={Tradpaan}
          width={407}
          height={300}
          alt="Traditional Paan"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="card-side card-side-back">
        <div className="card-image-wrapper">
          <Image
            src={comboBack}
            layout="fill"
            alt="Traditional Paan Back"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  </div>
  <div className="w-[50vw] text-center p-5 text-[#791917]">
    <h2 className="text-4xl font-bold">Traditional Paan</h2>
    <p className="text-3xl font-serif tracking-wider leading-snug">Experience the classic flavors of tradition in every bite.</p>
  </div>
</div> */}

     
   {/* Card 1 - Traditional Paan */}
<div className="flex flex-col md:flex-row items-center justify-center mb-1">
  <div
    className="card-container w-[50vw] aspect-square relative"
    onMouseEnter={handleMouseEnterTraditional}
    onMouseLeave={handleMouseLeaveTraditional}
  >
    <div className={`card ${isFlippedtraditional ? "flipped" : ""}`}>
      <div className="card-side card-side-front">
        <Image
          src={Tradpaan}
          width={407}
          height={300}
          alt="Traditional Paan"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="card-side card-side-back">
        <div className="card-image-wrapper">
          <Image
            src={comboBack}
            layout="fill"
            alt="Traditional Paan Back"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  </div>
  <div className="w-[50vw] text-center p-5 text-[#791917]">
    <h2 className="text-4xl font-bold">Traditional Paan</h2>
    <p className="text-3xl font-serif tracking-wider leading-snug">
      Feel the taste of Tradition in Every Bite.
    </p>
  </div>
</div>

{/* Horizontal line */}
<hr className="w-3/4 mx-auto border-t-2 border-[#791917] my-5" />

{/* Ice-Burst Paan */}
<div className="flex flex-col md:flex-row-reverse items-center justify-center mb-1">
  <div
    className="card-container w-[50vw] aspect-square relative"
    onMouseEnter={handleMouseEnterIb}
    onMouseLeave={handleMouseLeaveIb}
  >
    <div className={`card ${isFlippedIb ? "flipped" : ""}`}>
      <div className="card-side card-side-front">
        <Image
          src={Iceburst}
          alt="Ice-Burst Paan"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="card-side card-side-back">
        <Image
          src={comboBack}
          alt="Ice-Burst Paan Back"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  </div>
  <div className="w-[50vw] text-center p-5 text-[#791917]">
    <h2 className="text-4xl font-bold">Ice-Burst Paan</h2>
    <p className="text-3xl font-serif tracking-wider leading-snug">
      A burst of icy freshness with every bite.
    </p>
  </div>
</div>

{/* Horizontal line */}
<hr className="w-3/4 mx-auto border-t-2 border-[#791917] my-5" />

{/* Zero-Supari Paan */}
<div className="flex flex-col md:flex-row items-center justify-center mb-1">
  <div
    className="card-container w-[50vw] aspect-square relative"
    onMouseEnter={handleMouseEnterZsupari}
    onMouseLeave={handleMouseLeaveZsupari}
  >
    <div className={`card ${isFlippedzsupari ? "flipped" : ""}`}>
      <div className="card-side card-side-front">
        <Image
          src={zerosupari}
          width={407}
          height={300}
          alt="Zero Supari Paan"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="card-side card-side-back">
        <div className="card-image-wrapper">
          <Image
            src={comboBack}
            layout="fill"
            alt="Zero Supari Paan Back"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  </div>
  <div className="w-[50vw] text-center p-5 text-[#791917]">
    <h2 className="text-4xl font-bold">Zero Supari Paan</h2>
    <p className="text-3xl font-serif tracking-wider leading-snug">
      Delight in the sweet and refreshing taste, without the supari.
    </p>
  </div>
</div>

<hr className="w-3/4 mx-auto border-t-2 border-[#791917] my-5" />

      {/* Signature Paan */}

      <div className="flex flex-col md:flex-row-reverse items-center justify-center mb-1">
    <div className="card-container w-[50vw] aspect-square relative"
       onMouseEnter={handleMouseEnterspecial}
       onMouseLeave={handleMouseLeavespecial}
       >
      <div className={`card ${isFlippedspecial ? "flipped" : ""}`}>
        <div className="card-side card-side-front">
          <Image
            src={specialpaan}
            alt="Signature Paan"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="card-side card-side-back">
          <Image
            src={comboBack}
            alt="Signature Paan Back"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
    <div className="w-[50vw] text-center p-5 text-[#791917]">
      <h2 className="text-4xl font-bold">Signature Paan</h2>
      <p className="text-3xl font-serif tracking-wider leading-snug">Indulge in a unique blend of flavors, crafted for the connoisseur.</p>
    </div>
  </div>

  <hr className="w-3/4 mx-auto border-t-2 border-[#791917] my-5" />

               {/* Combo Paan */}

  <div className="flex flex-col md:flex-row items-center justify-center mb-1">
        <div
          className="card-container w-[50vw] aspect-square relative"
          onMouseEnter={handleMouseEntercombo}
          onMouseLeave={handleMouseLeavecombo}
        >
          <div className={`card ${isFlippedcombo ? "flipped" : ""}`}>
            <div className="card-side card-side-front">
            <Image
                    src={combo}
                    width={407}
                    height={300}
                    alt="Combo Paan"
                   className="object-cover w-full h-full"
                />
            </div>
            <div className="card-side card-side-back">
              <div className="card-image-wrapper">
              <Image
                     src={comboBack}
                      layout="fill"
                      alt="Combo Paan Back"
                      className="object-cover"
                    />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50vw] text-center p-5 text-[#791917]">
          <h2 className="text-4xl font-bold">Combo Paan</h2>
          <p className="text-3xl font-serif tracking-wider leading-snug">Launching Soon with the Deadliest Combitions of Flavours for the Palate</p>
        </div>
      </div>

    </div>
  );
}
 
export default ProductSection;




