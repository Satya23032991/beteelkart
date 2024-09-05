
 "use client"

 import { React } from 'react';
 import Image from 'next/image';

 import iceburstsaada from '/src/images/ice-burst/ice-burst-saada.jpg';
 import iceburstmeetha from '/src/images/ice-burst/ice-burst-meetha.jpg';
 import styles from './ibgallerystyle.module.css';
 import Link from 'next/link';
 import 'animate.css';
 
 
 
 const cardData = [
   {
     id: 1,
     title: "Ice-burst Saada Paan",
     description: `Savor the timeless taste of Ice-burst Saada Paan,
      a classic treat crafted from premium betel 
      leaves. This traditional paan combines a
       blend of our aromatic spices and natural 
       sweeteners, offering a refreshing and 
       authentic experience. Enjoy the chill
        burst of Ice with every bite pure,
         flavorful, and entirely zero-supari.`,
     imageSrc: iceburstsaada,
     link: "/products/iceburstpaan",
   },
 
   {
     id: 2,
     title: "Ice-burst Meetha Paan",
     description: `Indulge in the refined flavor of Ice-burst 
     meetha Paan, meticulously prepared with premium 
     betel leaves and a unique blend of aromatic 
     spices. This traditional paan is cherished for 
     its fresh, invigorating taste and smooth finish. 
     Crafted without supari, it offers a chilled and 
     icy experience experience that’s both 
     delightful and memorable.`,
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

 export default Ibgallery;