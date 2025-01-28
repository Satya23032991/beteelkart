
 
 
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

    </div>
  );
}
 
export default ProductSection;