
"use client"

import { React, useEffect } from 'react';
import Image from 'next/image';
//  import SpecialPaan from '/src/images/special_flavour.jpg';
import SpecialPaan from "/src/images/special_flavour.jpg";
import styles from './spstyles.modules.css';
import { FaHandPointRight } from 'react-icons/fa';

import Footersection from "/src/components/FooterSection";
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { FaDelicious } from "react-icons/fa";
import { FaHandsWash } from 'react-icons/fa';
import { FaGrinStars } from "react-icons/fa";
import 'animate.css';



const Specialpaan = () => {

    const videoId = 'dy2zB8bLSpk';
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('wowjs').then(({ WOW }) => {
                new WOW({
                    live: false,
                });
            })
        }
    }, []);

    return (
        <>
            <main className={`ml-0 ${styles.spaanMainContainer}`}>
                <div className="relative">
                    <Image
                        src={SpecialPaan}
                        alt="Special Flavour"
                        layout="responsive"
                        width={700}
                        height={50}
                        style={{ objectFit: 'cover' }}
                    />
                </div>

                <div className={`mt-1 flex flex-col ${styles.spflexContainer}`}>
                    <div className="flex flex-wrap lg:flex-nowrap">
                        <div className='w-full lg:w-1/2 lg:mr-5 mb-10 lg:mb-0'>
                            <div className="shadow-lg px-8 py-6 rounded-lg mb-8 ;-ow
                         animate__animated animate__fadeInDown data-wow-duration='1.5s'
                         data-wow-delay='0.2s'">
                                <p className="font-semibold text-black text-lg 
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

                            <div className="text-black p-4 rounded-lg mb-4">
                                <p className="font-semibold">
                                    <FaHandPointRight className="inline-block mr-2" />
                                    Experience the Pure Delight of Zero Supari Paan
                                </p>
                            </div>

                            <div className="text-black p-4 rounded-lg mb-4">
                                <p className="font-semibold">
                                    <FaHandPointRight className="inline-block mr-2" />
                                    Special Offer: Enjoy Exclusive Discounts on Zero Supari Paan
                                </p>
                            </div>

                            <div className="text-black p-4 rounded-lg mb-4">
                                <p className="font-semibold">
                                    <FaHandPointRight className="inline-block mr-2" />
                                    Zero Supari Paan: A guilt-Free Treat for every occassion
                                </p>
                            </div>

                            <div className="text-black p-4 rounded-lg mb-4">
                                <p className="font-semibold">
                                    <FaHandPointRight className="inline-block mr-2" />
                                    Flavoured: Pure Flavour, No Supari
                                </p>
                            </div>

                            <div className="text-black">
                                <p className="font-semibold text-lg text-black mb-2 flex items-center">
                                    ✓ Fresh and Premium Ingredients.
                                </p>



                                <p className='font-semibold text-lg text-black mb-2 flex items-center'>
                                    ✓ More than 1 Lakh Happy Customers & Increasing.
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
                            
                        </div>
                     </div>

                        
                    </div>
                </div>

            </main>
        </>
    )
}
export default Specialpaan;