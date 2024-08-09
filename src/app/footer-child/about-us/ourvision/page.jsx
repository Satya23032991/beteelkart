
import styles from './ourvision.module.css';

const AnimatedText = ({text}) => {
    return(
        <p className="bg-[#7c1918] text-[#f2c070] text-xl py-4 px-8 m-auto
        rounded-lg shadow-md text-center">
            {text.split('').map((char,index)=>(
             <span
             key= {index}
             className="inline-block animate-pop"
             style={{animationDelay: `${index*0.05}s`}}>
                {char}
             </span>
            ))}
        </p>
    )
}

 const Ourvision = () => {

  const Text = `At Indianpaansamrat, our vision is to elevate the art of paan by blending traditional craftsmanship with contemporary innovation.
  We are dedicated to offering a diverse range of exotic paan varieties that honor the rich cultural heritage of India while embracing 
  modern tastes and preferences.

Our commitment to quality is unwavering. We meticulously select the finest ingredients and employ traditional preparation methods to ensure 
every paan delivers an authentic and delightful experience. Through our unique flavors and creative offerings, we aim to create memorable moments 
for our customers and introduce them to the timeless pleasures of paan.

We strive to be a beacon of cultural preservation, celebrating and sharing the beauty of Indian traditions with the world. Our vision extends 
beyond just providing a product; it&apos;s about delivering an experience that resonates with our values of excellence, authenticity, and customer 
satisfaction.

As we grow, we remain focused on innovation, constantly exploring new ways to enhance our offerings while staying true to our roots.
At Indianpaansamrat, we envision a future where every bite of our paan reflects our passion for tradition, our dedication to quality,
and our commitment to delighting our customers.`;

    return(
        <main className={`ml-0 ${styles.visionMainContainer}`}>
            <div className="container bg-[#7c1918] mx-auto text-center p-4 pt-6 md:p-6">
     <h1 className="lg:text-6xl md:text-4xl text-[#f2c070]">Our Vision</h1>
     {/* <p className="bg-[#7c1918] text-[#f2c070] text-xl py-4 px-8 m-auto
       rounded-lg shadow-md text-center">
   At Indianpaansamrat, our vision is to elevate the art of paan by blending traditional craftsmanship with contemporary innovation.
    We are dedicated to offering a diverse range of exotic paan varieties that honor the rich cultural heritage of India while embracing 
    modern tastes and preferences.

Our commitment to quality is unwavering. We meticulously select the finest ingredients and employ traditional preparation methods to ensure 
every paan delivers an authentic and delightful experience. Through our unique flavors and creative offerings, we aim to create memorable moments 
for our customers and introduce them to the timeless pleasures of paan.

We strive to be a beacon of cultural preservation, celebrating and sharing the beauty of Indian traditions with the world. Our vision extends 
beyond just providing a product; it&apos;s about delivering an experience that resonates with our values of excellence, authenticity, and customer 
satisfaction.

As we grow, we remain focused on innovation, constantly exploring new ways to enhance our offerings while staying true to our roots.
 At Indianpaansamrat, we envision a future where every bite of our paan reflects our passion for tradition, our dedication to quality,
  and our commitment to delighting our customers.


     </p> */}
     <AnimatedText text={Text} />
            </div>

        </main>
    )
 }

 export default Ourvision;