import Link from 'next/link';
import image from '../images/homepage.jpg';
const HeroSection = () => {
  return (
    <div className="banner_sec h-screen w-full flex flex-col items-center justify-center relative overflow-hidden" style={{
      backgroundImage: `url(${image.src})`,
       backgroundPosition: 'center center',
       backgroundSize: 'contain',
      height:'100vh'

    }}>
      <div className="p-4 relative z-10 w-full text-left ms-0 md:ms-40">
      <h2 className="mt-10 md:mt-5 text-2xl md:text-2xl font-bold text-transparent" >fdsfdf</h2>

        <h2 className="mt-10 md:mt-5 text-2xl md:text-2xl font-bold text-transparent" >fdsfdf</h2>
        <h3 className="hero_title text-black text-2xl mt-5 text-transparent">fdsfdfsd</h3>
        {/* <p className="text-white mt-5 w-[60rem] mx-auto">An Income tax Return is a statement of Income earned to calculate tax liability and payment or refund of taxes to the government. Thus the purpose of filing the return is to report our income and taxes paid thereon to the government. It is mandatory for individuals,
             NRIs, partnership firms, LLPs, Companies, Trust to file income tax returns each year.
        </p> */}
        <div className="mt-8 md:mt-16 text-center md:text-center">
          <Link href="/services">
            <button className="all_service transition ease-in-out delay-150 text-[#c1861e] bg-transparent hover:-translate-y-1 hover:scale-110 hover:bg-[#091e3e] duration-300 md:ml-[-8.5rem]">
              Explore Our Products...Click Here
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;