
//  import Link from 'next/link';
//  import './cp.module.css'

//  const Combopaan = () => {
//     return(
//         <div className="duration-5s delay-500 bg-[#fff5f5]">
//         <h1 className="lg:text-4xl md:text-4xl sm:text-4xl font-extrabold text-[#6498a9] font-serif tracking-wider leading-snug">
//           Combo Paan:Launching Soon.....
//         </h1>

//         <p className="  wipe-in p-6 text-[#f3bd66] font-cursive text-lg sm:text-4xl md:text-sm">
//         Immerse yourself in an extraordinary fusion of flavors with our enchanting Combo-Paan offering.
//          Here, we elevate tradition with a delightful twist, creating a symphony of taste that captures both indulgence and nostalgia.
//           Each paan is lovingly crafted to perfection, blending the finest betel leaves with aromatic fillings, rich spices,
//            and refreshing hints of sweetness that are synonymous with our age-old tradition. But the journey doesn&apos;t stop there.

//          To complement your paan experience, we&apos;ve added a luxurious touch with a selection of delectable chocolates 
//          that add a layer of indulgence to this classic treat. These chocolates, made from the finest ingredients, 
//          serve as the perfect pairing, offering a rich, velvety contrast to the vibrant and bold flavors of our paan.
//           Imagine savoring the smooth creaminess of exquisite chocolate that melts in your mouth, 
//           followed by the burst of refreshing spices and sweetness from your paan — a combination that will tantalize your taste buds 
//           and elevate your senses.

//          This unique combination embodies the essence of celebration, tradition, and indulgence. 
//          Whether you&apos;re enjoying it as a moment of self-pampering or sharing it with friends and family,
//           the Combo-Paan offers a multisensory experience that is both satisfying and memorable. It&apos;s more than just a treat; 
//           it&apos;s a celebration of taste and culture, thoughtfully designed for those who appreciate the finer things in life.
//            Let the harmony of flavors enchant you and take you on a journey of taste like no other.
//         </p>
//         <Link href="traditionalpaan/gallery/spgallery" passHref>
//           {/* <button className="saada_paan transition ease-in-out delay-150 
// bg-[#6194a5] hover:translate-y-1 
// hover:scale-110 hover:bg-[#631115] hover:text-[#6194a5] duration-300
//  rounded-lg px-6 py-3 text-[#631115] font-semibold 
//  shadow-md wow 
//  animate__animated animate__pulse"
//             data-wow-duration="1s" data-wow-delay="1.5s">
//             Saada Paan Gallery
//           </button> */}
//         </Link>
//       </div>
//     )
//  }

//  export default Combopaan;

import Link from 'next/link';
import styles from './cp.module.css'; // Correct way to import a CSS module

const Combopaan = () => {
  return (
    <div className={styles.combopaanContainer}>
      <h1 className="lg:text-4xl md:text-4xl sm:text-4xl font-extrabold text-[#6498a9] font-serif tracking-wider leading-snug">
        Combo Paan: Launching Soon.....
      </h1>

      <p className="wipe-in p-6 text-[#f3bd66] font-cursive text-lg sm:text-4xl md:text-sm">
      Immerse yourself in an extraordinary fusion of flavors with our enchanting Combo-Paan offering.
          Here, we elevate tradition with a delightful twist, creating a symphony of taste that captures both indulgence and nostalgia.
          Each paan is lovingly crafted to perfection, blending the finest betel leaves with aromatic fillings, rich spices,
                      and refreshing hints of sweetness that are synonymous with our age-old tradition. But the journey doesn&apos;t stop there.

      To complement your paan experience, we&apos;ve added a luxurious touch with a selection of delectable chocolates 
          that add a layer of indulgence to this classic treat. These chocolates, made from the finest ingredients, 
          serve as the perfect pairing, offering a rich, velvety contrast to the vibrant and bold flavors of our paan.
          Imagine savoring the smooth creaminess of exquisite chocolate that melts in your mouth, 
          followed by the burst of refreshing spices and sweetness from your paan — a combination that will tantalize your taste buds 
          and elevate your senses.

         This unique combination embodies the essence of celebration, tradition, and indulgence. 
          Whether you&apos;re enjoying it as a moment of self-pampering or sharing it with friends and family,
          the Combo-Paan offers a multisensory experience that is both satisfying and memorable. It&apos;s more than just a treat; 
           it&apos;s a celebration of taste and culture, thoughtfully designed for those who appreciate the finer things in life.
            Let the harmony of flavors enchant you and take you on a journey of taste like no other.
      </p>

      <Link href="traditionalpaan/gallery/spgallery" passHref>
        {/* Button code if needed */}
      </Link>
    </div>
  );
};

export default Combopaan;
