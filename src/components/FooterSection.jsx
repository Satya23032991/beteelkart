// "use client"

// import Link from "next/link";
// import Image from 'next/image';
// import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const Footersection = () => {
//     return (
//         <div className="w-full bg-[#e3ea88] py-10">
//             <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 text-center gap-10 px-4 py-5">
//                 <div className="flex flex-col items-center">
//                     <h4 className="mt-20 text-1xl font-bold text-[#da371d]">About Us</h4>
//                     <ul className="text-[#375736]">
//                         <li><Link href="/">Our Journey</Link></li>
//                         <li><Link href="/">Our Vision</Link></li>
//                         <li><Link href="/">Our Achievements</Link></li>
//                         <li><Link href="/">Our Motivation</Link></li>
//                         <li><Link href="/">Our Goal</Link></li>
//                     </ul>
//                 </div> 

//                 <div className="flex flex-col items-center">
//                     <h4 className="mt-20 text-1xl font-bold text-[#da371d]">Our Products</h4>
//                     <ul className="text-[#375736]">
//                         <li><Link href="/">Traditional</Link></li>
//                         <li><Link href="/">Ice-Burst</Link></li>
//                         <li><Link href="/">Special</Link></li>
//                         <li><Link href="/">Coated</Link></li>
//                         <li><Link href="/">Combo</Link></li>
//                     </ul> 
//                 </div>   

//                 <div className="flex flex-col items-center">
//                     <h4 className="mt-20 text-1xl font-bold text-[#da371d]">Contact Us</h4>
//                     <ul className="text-[#375736]">
//                         <li><Link href="/"> Through Phone No</Link></li>
//                         <li><Link href="/">Our Officials</Link></li>
//                         <li><Link href="/">Our Customer Care</Link></li>
//                         <li><Link href="/">Our Email</Link></li>
//                         <li><Link href="/">Our Head-Office</Link></li>
//                     </ul>       
//                 </div>

//                 <div className="flex flex-col items-center">
//                     <h4 className="mt-20 text-1xl font-bold text-[#da371d]">Offers</h4>
//                     <ul className="text-[#375736]">
//                         <li><Link href="/"> Monthly Jackpot</Link></li>
//                         <li><Link href="/">Membership Offers</Link></li>
//                         <li><Link href="/"> Festival Offers</Link></li>
//                         <li><Link href="/">Offer Of the Day</Link></li>
//                         <li><Link href="/">Return Offers</Link></li>
//                     </ul>       
//                 </div>

//                 <div className="flex flex-col items-center">
//                     <h4 className="mt-20 text-1xl font-bold text-[#da371d]">Follow Us</h4>
//                     <div className="flex justify-center gap-4 mt-4">
//                         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//                             <FontAwesomeIcon icon={faFacebookF} className="text-[#375736] text-3xl p-2" />
//                         </a>
//                         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//                             <FontAwesomeIcon icon={faInstagram} className="text-[#375736] text-3xl p-2" />
//                         </a>
//                         <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
//                             <Image
//                                 src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
//                                 alt="YouTube"
//                                 width={32}
//                                 height={32}
//                                 className="h-8 w-8 p-2"
//                             />
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Footersection;

"use client"

import Link from "next/link";
import Image from 'next/image';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footersection = () => {
    return (
        <div className="w-full bg-[#e3ea88] py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 text-center gap-10 px-4 py-5">
                <div className="flex flex-col items-center">
                    <h4 className="mt-20 text-1xl font-bold text-[#da371d]">About Us</h4>
                    <ul className="text-[#375736]">
                        <li><Link href="/">Our Journey</Link></li>
                        <li><Link href="/">Our Vision</Link></li>
                        <li><Link href="/">Our Achievements</Link></li>
                        <li><Link href="/">Our Motivation</Link></li>
                        <li><Link href="/">Our Goal</Link></li>
                    </ul>
                </div> 

                <div className="flex flex-col items-center">
                    <h4 className="mt-20 text-1xl font-bold text-[#da371d]">Our Products</h4>
                    <ul className="text-[#375736]">
                        <li><Link href="/">Traditional</Link></li>
                        <li><Link href="/">Ice-Burst</Link></li>
                        <li><Link href="/">Special</Link></li>
                        <li><Link href="/">Coated</Link></li>
                        <li><Link href="/">Combo</Link></li>
                    </ul> 
                </div>   

                <div className="flex flex-col items-center">
                    <h4 className="mt-20 text-1xl font-bold text-[#da371d]">Contact Us</h4>
                    <ul className="text-[#375736]">
                        <li><Link href="/"> Through Phone No</Link></li>
                        <li><Link href="/">Our Officials</Link></li>
                        <li><Link href="/">Our Customer Care</Link></li>
                        <li><Link href="/">Our Email</Link></li>
                        <li><Link href="/">Our Head-Office</Link></li>
                    </ul>       
                </div>

                <div className="flex flex-col items-center">
                    <h4 className="mt-20 text-1xl font-bold text-[#da371d]">Offers</h4>
                    <ul className="text-[#375736]">
                        <li><Link href="/"> Monthly Jackpot</Link></li>
                        <li><Link href="/">Membership Offers</Link></li>
                        <li><Link href="/"> Festival Offers</Link></li>
                        <li><Link href="/">Offer Of the Day</Link></li>
                        <li><Link href="/">Return Offers</Link></li>
                    </ul>       
                </div>

                <div className="flex flex-col items-center">
                    <h4 className="mt-20 text-1xl font-bold text-[#da371d]">Follow Us</h4>
                    <div className="grid grid-cols-1 gap-4 mt-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebookF} className="text-[#375736] text-3xl" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="text-[#375736] text-3xl" />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
                                alt="YouTube"
                                width={32}
                                height={32}
                                className="h-8 w-8"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footersection;

