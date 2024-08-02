"use client";

import Link from 'next/link';
import Image from 'next/image';
import contact from '/src/images/contact_us.jpg';
import FooterSection from '@/components/FooterSection';
import styles from './contact.module.css';

const Contactpage = () => {
    return (
        <div>
            
            {/* <div className="banner_sec h-auto md:h-[30rem] w-full flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0" style={{
                backgroundImage: `url(${contact.src})`,
                backgroundPosition: 'center center',
                backgroundSize: 'contain',
                layout: 'responsive'
            }}>
                <div className="text-center">
                    <h2 className="mt-20 md:mt-0 text-4xl md:text-5xl font-bold bg-clip-text">CONTACT</h2>
                    <div className="flex mt-5 mx-2 justify-center">
                        <p className="home"><Link href="/">Home /</Link></p>
                        <p className="text-white mx-3">Contact</p>
                    </div>
                </div>
            </div> */}

<div className="relative">
          <Image
            src={contact}
            layout="responsive"
            width={700}
            height={75}
            objectFit="cover"
            alt="Traditional Paan"
          />
        </div>

            
            <div className='max-w-7xl mx-auto flex flex-col md:flex-row'>
                {/* Contact Info */}
                <div className="add_card flex-1 md:w-1/2 px-4 py-5">
                <h2 className="lg:text-6xl md:text-4xl text-[#f2c070]">
          Our Promise
        </h2>
                    <p>"At IndianPaanSamrat, we promise to deliver the finest Saada Paan and Meetha Paan, crafted with the highest quality ingredients and utmost care. Each bite is a journey through tradition, ensuring an authentic, delightful, and refreshing experience every time. Taste the legacy, savor the freshness, and celebrate the flavors with us. Our commitment to quality and customer service has earned us thousands of satisfied customers who keep coming back for the delightful flavors and impeccable service."</p>
                    <div className="mt-6">
                        <p className="mb-3">connect@indianpaansamrat.com</p>
                        <p className="mb-3">+91 9663149114</p>
                    </div>
                </div>

                
                <div className="flex-1 lg:w-1/2 px-4 py-5">
                    <div className="shadow-lg bg-[#f3bd66] px-8 py-6 rounded-lg">
                        <div className={`${styles.contactheadingStyle} px-6 py-4`}>
                            <h1>Fill In the Form To Explore More</h1>
                        </div>
                        <form
                            className={styles.contactformStyle}
                            id="lead_form"
                            method="POST"
                        >
                            <div className="relative mt-6">
                                <input
                                    type="text"
                                    id="fname"
                                    className="block w-full px-4 py-2 text-black bg-white border-2 border-gray-200 rounded-md peer focus:border-black focus:outline-none"
                                    required
                                />
                                <label
                                    htmlFor="fname"
                                    className="absolute top-1/2 left-4 transform -translate-y-1/2 text-black bg-transparent transition-all duration-200 ease-in-out peer-focus:bg-white peer-focus:text-black peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-focus:text-l peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:scale-75"
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
                                    maxLength="10"
                                    title="Enter a valid phone number"
                                    onInput={(e) => {
                                        e.target.value = e.target.value.replace(/[^0-9]/g, '');
                                    }}
                                />
                                <label
                                    htmlFor="cnumber"
                                    className="absolute top-1/2 left-4 transform -translate-y-1/2 text-black bg-transparent transition-all duration-200 ease-in-out peer-focus:bg-white peer-focus:text-black peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-focus:text-l peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:scale-75"
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
                                    className="absolute top-1/2 left-4 transform -translate-y-1/2 text-black bg-transparent transition-all duration-200 ease-in-out peer-focus:bg-white peer-focus:text-black peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-focus:text-l peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:scale-75"
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
                                    className="absolute top-1/2 left-4 transform -translate-y-1/2 text-black bg-transparent transition-all duration-200 ease-in-out peer-focus:bg-white peer-focus:text-black peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-focus:text-l peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:scale-75"
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
                                    className="absolute top-1/2 left-4 transform -translate-y-1/2 text-black bg-transparent transition-all duration-200 ease-in-out peer-focus:bg-white peer-focus:text-black peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-focus:text-l peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:scale-75"
                                >
                                    Zip Code
                                </label>
                            </div>

                            <div className="relative mt-6">
                                <textarea
                                    id="querry"
                                    className="block w-full px-4 py-2 text-black bg-white border-2 border-gray-200 rounded-md peer focus:border-transparent focus:outline-none"
                                    required
                                />
                                <label
                                    htmlFor="querry"
                                    className="absolute top-1/2 left-4 transform -translate-y-1/2 text-black bg-transparent transition-all duration-200 ease-in-out peer-focus:bg-transparent peer-focus:text-black peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-focus:text-l peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:scale-75"
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

            {/* Footer */}
            <FooterSection />
        </div>
    );
};

export default Contactpage;
