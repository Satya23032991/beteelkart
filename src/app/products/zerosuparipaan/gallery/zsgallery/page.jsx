import styles from './zsstyle.module.css';
import Image from 'next/image';
import import image1 from '/src/images/kiddiepaan.jpg';
import image2 from '/src/images/OUR_TIMETRAVEL.jpg';
import image3 from '/src/images/coated_paan_theory.jpg';
import image4 from '/src/images/meetha-paan-gallery/Baba_dilbahar.jpg';
import image5 from '/src/images/meetha-paan-gallery/Banarasi_meetha.jpg';
import image6 from '/src/images/meetha-paan-gallery/Calcutta_meetha.jpg';
import image7 from '/src/images/meetha-paan-gallery/Maghai_twins.jpg';
import image8 from '/src/images/meetha-paan-gallery/Meenakshi_meetha.jpg';
import image9 from '/src/images/meetha-paan-gallery/Navratna_meetha.jpg';
import image10 from '/src/images/coated_paan_theory.jpg';

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];

const Zpgallery = () => {
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
                    layout="fill"
                    objectFit="contain"
                    priority
                />
            </div>
        ))}
    </div>

            <div className={styles.content}>
                <h1 data-content='CSS ONLY'>
                    Indian Paan Samrat
                    </h1>
                <div className={styles.author}>
                    <h2>Zero Supari</h2>
                    <p>Crafted with a blend of Tradition And Taste</p>
                    <p>We bet you cannot stop at One</p>
                </div>
                <div className={styles.model}>
                    {/* Additional content here */}
                </div>
            </div>
        </div>
    );
}

export default Zpgallery;


// import styles from './zsstyle.module.css';
// import Image from 'next/image';
// import image1 from '/src/images/meetha-paan-gallery/Calcutta_meetha.jpg';

// const Zpgallery = () => {
//     return (
//         <div className={styles.banner}>
//             <div className={styles.slider} style={{ '--quantity': 10 }}>
//                 {Array.from({ length: 10 }, (_, index) => (
//                     <div
//                         key={index}
//                         className={styles.item}
//                         style={{ '--position': index + 1 }}
//                     >
//                         <Image
//                             src={image1}
//                             alt={`Image${index + 1}`}
//                             layout="fill"
//                             objectFit="contain"
//                             priority
//                         />
//                     </div>
//                 ))}
//             </div>

//             <div className={styles.content}>
//                 <h1>Indian Paan Samrat</h1>
//                 <div className={styles.author}>
//                     <h2>Zero Supari</h2>
//                     <p>Crafted with a blend of Tradition And Taste</p>
//                     <p>We bet you cannot stop at One</p>
//                 </div>
//                 <div className={styles.model}>
//                     {/* Additional content here */}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Zpgallery;


