
 import styles from './spcollection.module.css';
 import Image from 'next/image';
 import image1 from '/src/images/saada-paan-gallery/banarasi-saada.jpg';
 import image2 from '/src/images/saada-paan-gallery/calcutta-saada.jpg';
 import image3 from '/src/images//saada-paan-gallery/dilbahar-saada.jpg';
 import image4 from '/src/images/saada-paan-gallery/maghai-twins-saada.jpg';
 import image5 from '/src/images/saada-paan-gallery/meenakshi-saada.jpg';
 import image6 from '/src/images/saada-paan-gallery/navratna-saada.jpg';
//  import image7 from '/src/images/meetha-paan-gallery/Maghai_twins.jpg';
//  import image8 from '/src/images/meetha-paan-gallery/Meenakshi_meetha.jpg';
//  import image9 from '/src/images/meetha-paan-gallery/Navratna_meetha.jpg';
//  import image10 from '/src/images/saada-paan-gallery/banarasi-saada.jpg';
 
//  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];
const images = [image1, image2, image3, image4, image5, image6];
 
 const Spcollection = () => {
     return (
         <div className={styles.banner}>
         <div className={styles.slider} style={{ '--quantity': images.length }}>
         {images.map((image, index) => (
             <div
                 key={index}
                 className={styles.item}
                 style={{ '--position': index + 1 }}
             >
                 <Image
                     src={image}
                     alt={`Image${index + 1}`}
                     layout="responsive"
                     objectFit="contain"
                     priority
                 />
             </div>
         ))}
     </div>
 
             <div className={styles.content}>
                 <h1 data-content='CSS ONLY'>
                     Indianpaansamrat
                     </h1>
                 <div className={styles.author}>
                     <h2>Zero Supari</h2>
                     <p>Crafted with a blend of Tradition And Taste</p>
                     <p>We bet you cannot stop at One</p>
                 </div>
                 <div className={styles.model}>
                     
                 </div>
             </div>

             <div className="text-center">
                <h1>Details</h1>
             </div>
         </div>
     );
 }
 
 export default Spcollection;