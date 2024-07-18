
//  import React from 'react';
// import Image from 'next/image';
// import TraditionalPaan from "/src/images/Traditional_paan.jpg";
// import styles from './tpstyles.module.css';
// import { HiOutlineOfficeBuilding } from "react-icons/hi";
// import { FaRegHandshake } from "react-icons/fa";
// import { RiSecurePaymentLine } from "react-icons/ri";
// import { FaMoneyBillTransfer } from "react-icons/fa6";
// import { FaHandPointRight, FaCheck } from 'react-icons/fa';

// const Traditionalpaan = () => {
//   return (
//     <main className={styles.tradpaanMainContainer}>
//       <div className="relative">
//         <Image
//           src={TraditionalPaan}
//           layout="responsive"
//           width={700}
//           height={75}
//           objectFit="cover"
//           alt="Traditional Paan"
//         />
//       </div>

//       <div className={`bg-[#f08122] mt-1 flex flex-col ${styles.tpflexContainer}`}>
//         <div className={styles.tpflexRow}>
//           <div className="w-full lg:w-1/2 lg:mr-5 mb-10 lg:mb-0">
//             <h1 className={styles.tpheader}>Traditional Paan</h1>

//             <div className="shadow-lg bg-[#8bc103] px-8 py-6 rounded-lg mb-8">
//               <p className="font-semibold text-blue-900">
//                 Experience the rich and authentic flavors of traditional paan, 
//                 a cherished Indian delicacy known for its refreshing and aromatic taste.
//                 Our premium paan collection features two classic sub-products:
//                 Saada Paan and Meetha Paan. Saada Paan, 
//                 a simple yet delightful version,
//                 offers a perfect blend of betel leaf, slaked lime, 
//                 and areca nut, providing a natural and invigorating chew.
//                 For those with a sweeter palate,
//                 Meetha Paan combines the same traditional elements 
//                 with sweetened ingredients like gulkand (rose petal preserve),
//                 coconut flakes, and various aromatic spices,
//                 delivering a mouth-watering treat.
//                 Whether you seek a quick refreshment or a delectable after-meal indulgence,
//                 our traditional paan and its variants cater to every taste and preference.
//               </p>
//             </div>

//             <div className="bg-blue-900 text-yellow-500 p-4 rounded-lg mb-4">
//               <p className="font-semibold">
//                 <FaHandPointRight className="inline-block mr-2" />Enjoy the Authentic Taste of Traditional Paan
//               </p>
//             </div>

//             <div className="bg-blue-900 text-yellow-500 p-4 rounded-lg mb-4">
//               <p className="font-semibold">
//                 <FaHandPointRight className="inline-block mr-2" />Special Offer: Get Special Offers on Saada Paan & Meetha Paan
//               </p>
//             </div>

//             <div className="bg-blue-900 text-yellow-500 p-4 rounded-lg mb-4">
//               <p className="font-semibold">
//                 <FaHandPointRight className="inline-block mr-2" />Saada Paan: A Classic Delight for Every Occasion
//               </p>
//             </div>

//             <div className="bg-blue-900 text-yellow-500 p-4 rounded-lg mb-4">
//               <p className="font-semibold">
//                 <FaHandPointRight className="inline-block mr-2" />Meetha Paan: A Specific Flavour for the Taste Buds
//               </p>
//             </div>
             
//             <div className="text-black">
//               <p className='font-semibold text-lg mb-2 flex items-center'>
//                 ✓ Fresh and Premium Ingredients
//               </p>   

//               <p className='font-semibold text-lg mb-2 flex items-center'>
//                 ✓ Over 1,000 Happy Customers
//               </p>

//               <p className="font-semibold text-lg mb-2 flex items-center">
//                 ✓ Expertly Crafted for Authentic Flavour
//               </p>

//               <p className="font-semibold text-lg mb-2 flex items-center">
//                 ✓ Available for Quick Delivery
//               </p>

//               <p className="font-semibold text-lg mb-2 flex items-center">
//                 ✓ Special Discounts for Bulk Orders
//               </p>

//               <p className="font-semibold text-lg mb-2 flex items-center">
//                 ✓ 100% Quality Tested and Assured Dessert
//               </p>
//             </div> 
//           </div>

          

//         </div>
//       </div>
//     </main>
//   );
// };

// export default Traditionalpaan;

import React from 'react';
import Image from 'next/image';
import TraditionalPaan from "/src/images/Traditional_paan.jpg";
import TraditionalSaada from "/src/images/traditional_saada.jpg";
import styles from './tpstyles.module.css';
import { FaHandPointRight } from 'react-icons/fa';

const Traditionalpaan = () => {
  return (
    <main className={`ml-0 ${styles.tradpaanMainContainer}`}>
      <div className="relative">
        <Image
          src={TraditionalPaan}
          layout="responsive"
          width={700}
          height={75}
          objectFit="cover"
          alt="Traditional Paan"
        />
      </div>

      <div className={`bg-[#791b18] mt-1 flex flex-col ${styles.tpflexContainer}`}>
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-1/2 lg:mr-5 mb-10 lg:mb-0">
            {/* <h1 className={styles.tpheader}>Traditional Paan</h1> */}

            <div className="shadow-lg bg-[#0a402b] px-8 py-6 rounded-lg mb-8">
              <p className="font-semibold text-[#f3bd66]">
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

            <div className="bg-[#f3bd66] text-[#791b18] p-4 rounded-lg mb-4">
              <p className="font-semibold">
                <FaHandPointRight className="inline-block mr-2" />Enjoy the Authentic Taste of Traditional Paan
              </p>
            </div>

            <div className="bg-[#f3bd66] text-[#791b18] p-4 rounded-lg mb-4">
              <p className="font-semibold">
                <FaHandPointRight className="inline-block mr-2" />Special Offer: Get Special Offers on Saada Paan & Meetha Paan
              </p>
            </div>

            <div className="bg-[#f3bd66] text-[#791b18] p-4 rounded-lg mb-4">
              <p className="font-semibold">
                <FaHandPointRight className="inline-block mr-2" />Saada Paan: A Classic Delight for Every Occasion
              </p>
            </div>

            <div className="bg-[#f3bd66] text-[#791b18] p-4 rounded-lg mb-4">
              <p className="font-semibold">
                <FaHandPointRight className="inline-block mr-2" />Meetha Paan: A Specific Flavour for the Taste Buds
              </p>
            </div>
             
            <div className="text-black">
              <p className='font-semibold text-lg text-[#f3bd66] mb-2 flex items-center'>
                ✓ Fresh and Premium Ingredients
              </p>   

              <p className='font-semibold text-lg text-[#f3bd66] mb-2 flex items-center'>
                ✓ Over 1,000 Happy Customers
              </p>

              <p className="font-semibold text-lg text-[#f3bd66] mb-2 flex items-center">
                ✓ Expertly Crafted for Authentic Flavour
              </p>

              <p className="font-semibold text-lg text-[#f3bd66] mb-2 flex items-center">
                ✓ Available for Quick Delivery
              </p>

              <p className="font-semibold text-lg text-[#f3bd66] mb-2 flex items-center">
                ✓ Special Discounts for Bulk Orders
              </p>

              <p className="font-semibold text-lg text-[#f3bd66] mb-2 flex items-center">
                ✓ 100% Quality Tested and Assured Dessert
              </p>
            </div> 
          </div>

          <div className="w-full lg:w-1/2 mt-12 py-20 lg:ml-5">
            <div className="shadow-lg bg-[#f3bd66] px-8 mt-38 py-6 rounded-lg mb-8">
              <div className={`${styles.tpheadingStyle} px-6 py-4`}>
                <h1>Reach Out To Us</h1>
              </div>
              <form 
                className={styles.tpformStyle}
                id="lead_form"
                onSubmit="emailPassage()"
                method="POST">

              <label>Name :</label>    
                <input
                  className="form-control bg-white mb-4"
                  type="text"
                  name="name"
                  id="name"
                  title="Please Enter Your Name"
                  placeholder="Enter Name"
                  style={{border:"1px solid gray", textAlign:"center", borderRadius:"5px"}}
                  required
                />

                <label htmlFor="mobile">Mobile No :</label>
                <input 
                className="form-control bg-white mb-4"
                type="tel"
                name="mobile"
                pattern= "[0-9]{10}"
                id="mobile"
                title="Enter mobile"
                placeholder="Your Mobile"
                style={{border:"1px solid gray", textAlign:"center", borderRadius:"5px"}}
                required/>
                
                <label>Email</label>
                <input
                  className="form-control bg-white mb-4"
                  type="email"
                  name="email"
                  id="email"
                  title="Enter Email"
                  placeholder="Your Email"
                  style={{border:"1px solid gray", textAlign:"center", borderRadius: "5px"}}
                  required
                />

                <label>Your City</label>
                <input 
                className="form-control bg-white mb-4"
                type= "text"
                name="City"
                id="city"
                title="Enter City"  
                placeholder="Your City"
                style={{border:"1px solid gray", textAlign:"center", borderRadius:"5px"}}
                required
                />

                <label>Your Zip code</label> 
                <input
                className="form-control bg-white mb-4"
                type="number"
                name="zipcode"
                pattern= "[0-9]{6}"
                id="zip"
                title="Please Enter your Zip code"
                placeholder="Zip Code"
                style= {{border:"1px solid gray", textAlign:'center', borderRadius:"5px"}}
                required
                />

                <label>Please Mention Querry</label>
                <textarea
                  className="form-control bg-white mb-4"
                  name="message"
                  id="message"
                  title="Please Enter Your Message"
                  placeholder="Your Message"
                  style={{border:"1px solid gray", textAlign:"center", borderRadius:"5px"}}
                  required
                ></textarea>

                <button
                  className="bg-[#0a402b] text-yellow-500 px-4 py-2 rounded-lg font-semibold"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

     <div className= {styles.tradpaanMainContainer}>
     <div className="w-full p-4 bg-[#f3bd66]">
     <h1 className="text-4xl text-black text-center py-8 font-extrabold">Our Handcrafted Buffet of Traditional Paan for You</h1>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-center">
      
     <div
        className="bg-cover bg-center"
        style={{
          backgroundImage: `url(${TraditionalSaada})`,
          minHeight: '400px',
        }}
      >
        <Image src={TraditionalSaada} alt="Saada Paan"className="w-140 h-140 object-cover mx-auto my-5"/>
      </div>

      <div className="p-4">
        <h2>Saada Paan:</h2>
        <p className="p-6">
         A Timeless Classic
Indulge in the exquisite flavors of our Saada Paan, a quintessential Indian delicacy that has been cherished for centuries. Crafted with utmost care and expertise, our Saada Paan offers a perfect harmony of tradition and taste, making it a delightful treat for any occasion.
At the heart of each Saada Paan is the fresh, tender betel leaf, meticulously selected to ensure premium quality and an unparalleled taste experience. Each leaf is generously coated with a delicate layer of slaked lime, expertly balanced to create a gentle yet invigorating chew. The addition of aromatic areca nut (supari) and our blend of ingredients brings a subtle crunch and a hint of natural sweetness, enhancing the overall flavor profile.
Our Saada Paan is a celebration of simplicity and purity mixed with a drop of belief, offering a refreshing and natural taste that lingers on the palate. It is a perfect choice for those who appreciate the authentic, unadulterated essence of traditional paan. Whether enjoyed as a post-meal digestive or a refreshing mid-day snack, Saada Paan provides a burst of natural flavors that rejuvenate the senses and leave a lasting impression.
Experience the magic of Saada Paan, where every leaf is a promise of tradition, every bite a taste of heritage, and every chew a moment of pure bliss. Whether you are a long-time paan enthusiast or new to this delightful delicacy, our Saada Paan is sure to captivate your senses and leave you craving for more.
Each bite of our Saada Paan takes you on a journey through the rich cultural heritage of India, evoking memories of age-old traditions and timeless customs. The meticulous craftsmanship and attention to detail in every paan ensure a consistent and delightful experience with every chew.
Our Saada Paan is not just a treat for the taste buds, but also a testament to the highest standards of quality and hygiene. We use only the finest ingredients, sourced from trusted suppliers, and adhere to strict quality control measures to guarantee a product that is both safe and delectable.
Treat yourself to the authentic taste of India with our premium Saada Paan and discover why this timeless classic continues to be a beloved favorite across generations.
        </p>
      </div>
      
     </div>
     </div>
     </div>

    </main>
  );
};

export default Traditionalpaan;




