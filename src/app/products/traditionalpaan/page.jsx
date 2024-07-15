import React from 'react';
import Image from 'next/image';
import TraditionalPaan from "/src/images/Traditional_paan.jpg";
import styles from './tpstyles.module.css';
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaRegHandshake } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaHandPointRight } from 'react-icons/fa';

const Traditionalpaan = () => {
  return (
    <div className={styles.tradpaanMainContainer}>
      <div className="relative">
        <Image
          src={TraditionalPaan}
          layout="responsive"
          width={700}
          height={475}
          objectFit="cover"
          alt="Traditional Paan"
        />
      </div>

      <div className={`bg-[#f08122] mt-1 flex flex-col ${styles.tpflexContainer}`}>
        <div className={styles.tpflexRow}>
          <div className="w-full lg:w-1/2 lg:mr-5 mb-10 lg:mb-0">
            <h1 className={styles.tpheader}>Traditional Paan</h1>

            <div className="shadow-lg bg-[#8bc103] px-8 py-6 rounded-lg mb-8">
             <p className="font-semibold text-blue-900">
             Experience the rich and authentic flavors of traditional paan, 
             a cherished Indian delicacy known for its refreshing and aromatic taste.
              Our premium paan collection features two classic sub-products:
               Saada Paan and Meetha Paan. Saada Paan, 
               a simple yet delightful version,
                offers a perfect blend of betel leaf, slaked lime, 
                and areca nut, providing a natural and invigorating chew.
              For those with a sweeter palate,
               Meetha Paan combines the same traditional elements 
               with sweetened ingredients like gulkand (rose petal preserve),
                coconut flakes, and various aromatic spices,
                 delivering a mouth-watering treat.
                  Whether you seek a quick refreshment or a delectable after-meal indulgence,
              our traditional paan and its variants cater to every taste and preference.
              </p> 
            </div>

            <div className="bg-blue-900 text-yellow-500 p-4 rounded-lg mb-4">
              <p className = "font-semibold">
              <FaHandPointRight className="inline-block mr-2" />Enjoy the Authentic Taste of Traditional Paan  
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Traditionalpaan;
