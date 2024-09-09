
"use client"

import {React} from 'react';
import { HiOutlineOfficeBuilding } from "react-icons/hi";
// import { FaRegHandshake } from "react-icons/fa";
// import { RiSecurePaymentLine } from "react-icons/ri";
// import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaDelicious } from "react-icons/fa";
import { FaHandsWash } from "react-icons/fa";
// import { FiUserPlus } from "react-icons/fi";
import { FaGrinStars } from "react-icons/fa";

 const Chooseus = () => {
    return (
        <div className="bg-[#aae0ff] transition-transform ease-in-out">
        <h2 className="text-3xl font-bold text-center text-[#075156] mb-8">
          Why Choose Us
        </h2>
        <div className="flex flex-wrap justify-center ">
          <div className="bg-[#aae0ff] text-[#791917] p-6 m-2 rounded-lg flex flex-col items-center ">
            <HiOutlineOfficeBuilding size={50} className="mb-4" />
            <p className="text-center">Extensive Network of Outlets</p>
          </div>
          <div className="bg-[#aae0ff] text-[#791917] p-6 m-2 rounded-lg flex flex-col items-center ">
            <FaDelicious size={50} className="mb-4" />
            <p className="text-center">Decades of Trusted Expertise</p>
          </div>
          <div className="bg-[#aae0ff] text-[#791917] p-6 m-2 rounded-lg flex flex-col items-center ">
            <FaHandsWash size={50} className="mb-4" />
            <p className="text-center">Strict Hygiene from Prep to Pack</p>
          </div>
          <div className="bg-[#aae0ff] text-[#791917] p-6 m-2 rounded-lg flex flex-col items-center ">
            <FaGrinStars size={50} className="mb-4" />
            <p className="text-center">1 Lakh+ Happy Customers & Increasing Up </p>
          </div>
        </div>
      </div>
    )
 }
 export default Chooseus;