
 "use client"

 import { React } from 'react';
 import Image from 'next/image';

 import iceburstsaada from '/src/images/Ice-burst/ice-burst-saada.jpg';
 import iceburstmeetha from '/src/images/Ice-burst/ice-burst-Meetha.jpg';
 import styles from './ibgallerystyle.module.css';
 import Link from 'next/link';
 import 'animate.css';
 
 
 
 const cardData = [
   {
     id: 1,
     title: "Ice-burst Saada Paan",
     description: `Experience the Chill of Tradition! Dive into the invigorating sensation
      of Ice-Burst Saada Paan, a timeless delicacy made from the finest betel leaves. 
      This classic paan is expertly blended with aromatic spices and natural sweeteners, 
      delivering a refreshing burst of coolness with every bite. Pure, flavorful, 
      and completely zero-supari, it&apos;s a perfect harmony of tradition and taste. 
      Enjoy the ultimate chill factor in every morsel!`,
     imageSrc: iceburstsaada,
     link: "/products/iceburstpaan",
   },
 
   {
     id: 2,
     title: "Ice-Burst Meetha Paan",
     description: `Treat yourself to the sophisticated flavors of Ice-Burst Meetha Paan,
      expertly crafted from top-quality betel leaves and a distinctive blend of aromatic spices.
       This classic paan is celebrated for its refreshing, cool sensation and silky finish. 
       Totally free from supari, it delivers an icy, delightful burst that&apos;s both unforgettable and exquisitely enjoyable.`,
     imageSrc: iceburstmeetha,
     link: "/products/iceburstpaan",
   },
 
   
 
 ]

 const Ibgallery = () =>{
    
        return (
            <>
              <main className={`ml-0 ${styles.ibgallMainContainer}`}>
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
                      <div className="body text-center bg-[#0a402b]">
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

 export default Ibgallery;