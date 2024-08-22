

import Image from 'next/image';
import journey from '/src/images/OUR_TIMETRAVEL.jpg';
import Footersection from '/src/components/FooterSection';
import './ourjourney.css'

const Ourjourney = () => {
  return (
    <>
      <div className="about_sec bg-black h-auto w-full flex 
    flex-col items-center justify-center 
    relative overflow-hidden mx-auto py-30 p-5">
        <div className="section-title bg-black text-center text-[#ebf08c] mt-5">

          <h1 className="text-[#ebf08c] font-cursive">
            Our Journey
          </h1>


        </div>

        <div className='flex-auto text-center py-2 m-0 
      practice-single '>
          <Image
            src={journey}
            width={600}
            height={450}
            alt="Our Journey"
          />
        </div>
        <div className="flex-auto text-left py-2 m-2">
          <h3 className="md:mt-0 text-3xl font-bold bg-clip-text text-[#ebf08c] font-serif tracking-wider leading-snug">
            The Natural Goodness of Betel & an Array of Flavours for your taste buds all in one
          </h3>
          <p className="typewriter pt-10 text-justify font-cursive" style={{ color: '#ebf08c' }}>
            Indian Paan Samrat (IPS) is built on a rich legacy of excellence, dating back to the 1960s when our grandfathers
            operated kiosks in prominent locations in Bengaluru. Established in 2022, we are dedicated to providing paan
            connoisseurs with an authentic taste of tradition, using only premium-quality, tobacco-free, and spit-free ingredients.

            Our Vision

            We are committed to hygiene and quality, using FSSAI-approved ingredients to ensure the safety and health of our customers.
            Our objective is to establish ourselves as a leading global brand in the paan industry,
            characterized by a commitment to premium quality ingredients and rigorous hygiene standards.

            Our Approach

            As FSSAI-certified Paan Masters, we have revamped traditional Paan with secret ingredients and unique methods,
            ensuring high-quality standards for a consistently delicious taste. We promote 100% tobacco-free and spit-free paan,
            offering a diverse array of paan varieties to provide consumers with an enhanced and unique experience.

            Our Mission

            To rediscover the authentic taste of India, we are dedicated to delivering exceptional paan experiences that exceed expectations.
            Explore our range of premium paan offerings, from traditional to gourmet varieties, and indulge in the pinnacle of indulgence.
          </p>


        </div>

      </div>
      <Footersection />
    </>
  )
}

export default Ourjourney;