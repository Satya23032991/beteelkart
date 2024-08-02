
 import Link from 'next/link';
 import styles from './cp.module.css'

 const Combopaan = () => {
    return(
        <div class="duration-5s delay-500 hover:animate-wiggle transition-transform ease-in-out">
        <h1 className="lg:text-4xl md:text-4xl sm:text-4xl font-extrabold text-[#6498a9] font-serif tracking-wider leading-snug">
          Traditional Saada Paan:
        </h1>

        <p className="p-6 text-[#f3bd66] font-cursive text-lg sm:text-4xl md:text-sm">
          A Timeless Classic
          Indulge in the exquisite flavors of our Saada Paan, a quintessential Indian delicacy that has been cherished for centuries.
          Crafted with utmost care and expertise, our Saada Paan offers a perfect harmony of tradition and taste,
          making it a delightful treat for any occasion.
          At the heart of each Saada Paan is the fresh, tender betel leaf, meticulously selected to ensure premium quality and an
          unparalleled taste experience. Each leaf is generously coated with a delicate layer of slaked lime, expertly balanced to
          create a gentle yet invigorating chew. The addition of aromatic areca nut (supari) and our blend of magic ingredients brings a
          subtle crunch and a hint of natural sweetness, enhancing the overall flavor profile.
          Our Saada Paan is a celebration of simplicity and purity mixed with a drop of belief, offering a refreshing and natural taste
          that lingers on the palate. It is a perfect choice for those who appreciate the authentic, unadulterated essence of traditional
          paan. Whether enjoyed as a post-meal digestive or a refreshing mid-day snack, Saada Paan provides a burst of natural flavors
          that rejuvenate the senses and leave a lasting impression.
          Experience the magic of Saada Paan, where every leaf is a promise of tradition, every bite a taste of heritage, and every chew
          a moment of pure bliss. Whether you are a long-time paan enthusiast or new to this delightful delicacy, our Saada Paan is sure
          to captivate your senses and leave you craving for more.
          Each bite of our Saada Paan takes you on a journey through the rich cultural heritage of India, evoking memories of age-old
          traditions and timeless customs. The meticulous craftsmanship and attention to detail in every paan ensure a consistent and
          delightful experience with every chew.
          Our Saada Paan is not just a treat for the taste buds, but also a testament to the highest standards of quality and hygiene.
          We use only the finest ingredients, sourced from trusted suppliers, and adhere to strict quality control measures to guarantee
          a product that is both safe and delectable.
          Treat yourself to the authentic taste of India with our premium Saada Paan and discover why this timeless classic continues to
          be a beloved favorite across generations.
        </p>
        <Link href="traditionalpaan/gallery/spgallery" passHref>
          <button className="saada_paan transition ease-in-out delay-150 
bg-[#6194a5] hover:translate-y-1 
hover:scale-110 hover:bg-[#631115] hover:text-[#6194a5] duration-300
 rounded-lg px-6 py-3 text-[#631115] font-semibold 
 shadow-md wow 
 animate__animated animate__pulse"
            data-wow-duration="1s" data-wow-delay="1.5s">
            Saada Paan Gallery
          </button>
        </Link>
      </div>
    )
 }

 export default Combopaan;