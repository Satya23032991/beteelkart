
 "use client"

 import { React } from 'react';
 import Image from 'next/image';
 import Calcuttamp from '/src/images/meetha-paan-gallery/Calcutta_meetha.jpg';
 import Banarasimp from "/src/images/meetha-paan-gallery/Banarasi_meetha.jpg";
 import maghaitwinmp from '/src/images/meetha-paan-gallery/Maghai_twins.jpg';
 import navratnamp from '/src/images/meetha-paan-gallery/Navratna_meetha.jpg';
 import dilbaharmp from '/src/images/meetha-paan-gallery/Baba_dilbahar.jpg';
 import meenakshimp from '/src/images/meetha-paan-gallery/Meenakshi_meetha.jpg';
 import styles from './kpgallerystyle.module.css';
 import Link from 'next/link';
 import 'animate.css';
 
 
 
 const cardData = [
   {
     id: 1,
     title: "Calcutta Saada Paan",
     description: `Savor the timeless taste of Calcutta Saada Paan,
      a classic treat crafted from premium betel 
      leaves. This traditional paan combines a
       blend of our aromatic spices and natural 
       sweeteners, offering a refreshing and 
       authentic experience. Enjoy the rich
        heritage of Calcutta with every bite—pure,
         flavorful, and entirely zero-supari.`,
     imageSrc: Calcuttamp,
     link: "/products/traditionalpaan",
   },
 
   {
     id: 2,
     title: "Banarasi Saada Paan",
     description: `Indulge in the refined flavor of Banarasi 
     Saada Paan, meticulously prepared with premium 
     betel leaves and a unique blend of aromatic 
     spices. This traditional paan is cherished for 
     its fresh, invigorating taste and smooth finish. 
     Crafted without supari, it offers a pure and 
     authentic Banarasi experience that’s both 
     delightful and memorable.`,
     imageSrc: Banarasimp,
     link: "/products/traditionalpaan",
   },
 
   {
     id: 3,
     title: "Maghai Twins Saada",
     description: `
     Here’s a brief description for Maghai Twins Saada Paan:
     
     Maghai Twins Saada Paan
     
     Discover the exquisite taste of Maghai Twins Saada Paan,
      featuring a double dose of flavor with two 
      premium betel leaves expertly layered.
       Infused with a blend of aromatic spices
        and a touch of sweetness, this paan 
        delivers a rich and satisfying experience.
         Crafted without supari, it offers a unique
          and authentic treat that's both flavorful
           and refreshing.`,
     imageSrc: maghaitwinmp,
     link: "/products/traditionalpaan",
   },
 
   {
     id: 4,
     title: "Meenakshi Saada Paan",
     description: `Elevate your palate with Meenakshi Saada Paan,
      a luxurious treat crafted from handpicked betel leaves and 
      a carefully balanced mix of aromatic spices.
       Each bite delivers a harmonious burst of flavors,
        free from supari for a clean and authentic taste.
         Perfect for those who appreciate a touch of elegance 
         in their traditional indulgence.`,
     imageSrc: meenakshimp,
     link: "/products/traditionalpaan",
   },
 
   {
     id: 5,
     title: "Navratna Saada Paan",
     description: `Unveil the splendor of Navratna Saada Paan,
      a premium treat made from select betel leaves and a 
      unique blend of nine aromatic spices. Each paan is
       meticulously crafted to deliver a rich, complex flavor
        profile with a touch of sweetness and spice. Free of supari,
         this luxurious paan offers a refined and authentic taste
          experience that stands out with every bite.`,
     imageSrc: navratnamp,
     link: "/products/traditionalpaan",
   },
 
   {
     id: 6,
     title: "Baba Dil Bahar Saada",
     description: `Indulge in the timeless allure of 
     Baba Dilbahar Saada Paan—a true masterpiece 
     crafted from lush betel leaves and a secret 
     blend of aromatic spices. Each bite bursts with
      a refreshing and sweet flavor, crafted with 
      precision and completely free of supari.
       Elevate your paan experience with this exquisite
        blend that’s as captivating as it is delightful.`,
     imageSrc: dilbaharmp,
     link: "/products/traditionalpaan",
   }
 
 ]

 const Kpgallery = () =>{
    
        return (
            <>
              <main className={`ml-0 ${styles.kpgallMainContainer}`}>
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
                              See Details
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

 export default Kpgallery;