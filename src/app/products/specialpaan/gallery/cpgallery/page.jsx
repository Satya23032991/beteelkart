"use client"

import { React } from 'react';
import Image from 'next/image';
import darkchocolate from '/src/images/coated-paan-gallery/dark-chocolate.jpg';
import whitechocolate from "/src/images/coated-paan-gallery/white-chocolate.jpg";
import mangochocolate from '/src/images/coated-paan-gallery/mango-chocolate.jpg';
import orangechocolate from '/src/images/coated-paan-gallery/orange-chocolate.jpg';
import dilbaharsp from '/src/images/saada-paan-gallery/dilbahar-saada.jpg';
import milkchocolate from '/src/images/coated-paan-gallery/milk-chocolate.jpg';
import styles from './cpgallerystyle.module.css';
import Link from 'next/link';
import 'animate.css';



const cardData = [
  {
    id: 1,
    title: "Dark-chocolate-Coated",
    description: `Indulge in the irresistible charm of Dark Chocolate Coated Paan,
    a delightful fusion of rich, velvety chocolate
    and the finest betel leaves. This exquisite paan
    merges the deep flavors of dark chocolate with
    our signature aromatic spices, delivering a
    truly luxurious and refreshing experience.
    Savor the elegance of indulgence with every bite—
    decadent, smooth, and completely zero-supari.`,
    imageSrc: darkchocolate,
    link: "/products/traditionalpaan/gallery/spcollection",
  },

  {
    id: 2,
    title: "White-chocolate-Coated",
    description: `Dive into the creamy allure of our White Chocolate Coated Paan,
    a heavenly blend of luscious white chocolate
    and premium betel leaves. This indulgent paan
    combines the sweetness of white chocolate with
    our aromatic spices, offering a smooth and
    refreshing taste sensation. Experience pure bliss
    with every bite—silky, sweet, and entirely zero-supari.`,
    imageSrc: whitechocolate,
    link: "/products/traditionalpaan/gallery/spcollection",
  },

  {
    id: 3,
    title: "Mango-chocolate-Coated",
    description: ` Savor the tropical essence of Mango 
    Chocolate Coated Paan,
a vibrant blend of juicy mango flavor
and rich, smooth chocolate wrapped in premium betel leaves.
This tantalizing paan balances the sweet tang of mango
with our signature aromatic spices for a refreshing,
exotic experience. Enjoy the perfect harmony of flavors
with every bite—bright, indulgent, and completely zero-supari.`,
    imageSrc: mangochocolate,
    link: "/products/traditionalpaan/gallery/spcollection",
  },

  {
    id: 4,
    title: "Milk-chocolate-Coated",
    description: `Indulge in the creamy delight of Milk Chocolate Coated Paan,
    a perfect fusion of smooth, velvety milk chocolate
    and the finest betel leaves. This luscious paan
    melds the sweet richness of milk chocolate with
    our aromatic spices, creating a luxurious and
    refreshing taste sensation. Relish the perfect
    blend of flavors with every bite—creamy, indulgent,
    and entirely zero-supari.`,
    imageSrc: milkchocolate,
    link: "/products/traditionalpaan/gallery/spcollection",
  },

  {
    id: 5,
    title: "Orange-chocolate-Coated",
    description: `Discover the zesty allure of Orange Chocolate Coated Paan,
    a vibrant fusion of tangy orange essence
    and rich, smooth chocolate wrapped in premium betel leaves.
    This unique paan blends the citrusy brightness of orange
    with our signature aromatic spices, delivering a
    refreshing and indulgent taste. Enjoy a burst of flavor
    with every bite—zesty, smooth, and completely zero-supari.`,
    imageSrc: orangechocolate,
    link: "/products/traditionalpaan",
  },
]

const Cpgallery = () => {
  return (
    <>
      <main className={`ml-0 ${styles.spgallMainContainer}`}>
        <div className={`intro_box flex flex-wrap gap-4 justify-center`}>
          {cardData.map((card) => (
            <div
              key={card.id}
              className={`practice-single wow animate__animated animate__fadeInUp ${styles.card}`}
              data-wow-duration="1.5s"
              data-wow-delay="1.1s"
              style={{ transition: 'transform 0.3s ease-in-out' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `
                  
                `;
                const textContainer =
                  e.currentTarget.querySelector('.text-container');
                textContainer.style.height =
                  `${textContainer.scrollHeight}px`;
                textContainer.style.transition =
                  'height 0.5s';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "";
                const textContainer =
                  e.currentTarget.querySelector('.text-container');
                textContainer.style.height = '50px';
                textContainer.style.transition = 'height 0.5s';
              }}
            >
              <div className="header">
                <div className="icon-area">
                  <Image
                    src={card.imageSrc}
                    width={407}
                    height={300}
                    alt={card.title}
                  />
                </div>
              </div>
              <div className="body text-center bg-black">
                <h4 className="md:mt-0 text-2xl md:text-2xl text-center 
                  font-bold bg-clip-text text-[#f3d36c] font-serif tracking-wider leading-snug">
                  {card.title}
                </h4>
                <div
                  className="text-container overflow-hidden transition-height duration-300"
                  style={{ height: '50px', transition: 'height 0.5s' }}
                >
                  <p className='text-[#f3d36c]'>
                    {card.description}
                  </p>

                  <Link href={card.link} passHref>
                    <button
                      className="all_products transition ease-in-out delay-150 
                        bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-[#ff636a] 
                        duration-300 mb-1 rounded-lg px-6 py-3 text-white font-semibold shadow-md wow 
                        animate__animated animate__pulse"
                      data-wow-duration="1s"
                      data-wow-delay="1.4s"
                    >
                      See Collection
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Cpgallery;

