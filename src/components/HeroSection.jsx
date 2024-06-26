import Link from 'next/link';
import image from '../images/comingsoon1.jpg';

const HeroSection = () => {
  return (
    <div 
      className="banner_sec flex flex-col items-center justify-center relative overflow-hidden" 
      style={{
        backgroundImage: `url(${image.src})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        margin: '0', 
        padding: '0',
        height: 'calc(100vh - 20px)',
        width: 'calc(100vw - 20px)', 
      }}
    >
      <div className="p-4 relative z-10 w-full text-left ms-0 md:ms-40">
        <h1 className="mt-0 md:mt-0 text-4xl md:text-7xl text-[#991d1c] font-bold bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
          {/* Your H1 text here */}
        </h1>
        <h2 className="mt-10 md:mt-5 text-2xl md:text-2xl font-bold" style={{ color: "#991d1c" }}>
          Here is the Onestop Solution
        </h2>
        <h3 className="hero_title text-[#991d1c] text-2xl mt-5">
          We are IndianPaanSamrat
        </h3>
        <div className="mt-4">
          <Link href="/Products">
            <button className="all_products py-1 px-1 transition ease-in-out delay-150 bg-[#991d1c] hover:-translate-y-1 text-[#fec63f] hover:scale-110 hover:bg-[gray] duration-300">
              Click here to Find your Favourite taste
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
