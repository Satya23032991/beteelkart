import Image from "next/image";
import InfiniteMovingCards from "./ui/infinite-moving-cards";
import brucewayne from '/src/images/bruce_wayne.jpeg';

const testimonials = [
  {
    quote: "Indianpaansamrat has quite a lot of options to choose from",
    name: "Tony Stark",
    title: "CEO, Stark Industries"
  },
  {
    quote: "The taste from Indianpaansamrat is awesome",
    name: "Bruce Wayne",
    title: "CEO, Wayne Enterprises",
    image: brucewayne
  },
  {
    quote: "Indianpaansamrat has a lot of variety, I must say",
    name: "Steve Rogers",
    title: "The First Avenger"
  },
  {
    quote: "Indianpaansamrat is the best, I have tasted till now",
    name: "Thor",
    title: "CEO, Asgard"
  },
  {
    quote: "Indianpaansamrat has a lot of options",
    name: "Oliver Queen",
    title: "CEO, Queen Industries"
  },
  {
    quote: "Indianpaansamrat is the best in this segment",
    name: "Arthur Curry",
    title: "CEO, Atlantis"
  },
  {
    quote: "Indianpaansamrat is my favourite, when it comes to tasty paan",
    name: "Price T'Challa",
    title: "CEO, Wakanda"
  }
];

const Testimonial = () => {
  return (
    <div className="about_sec bg-black text-[#f3d36c] h-auto text-lg w-full flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 p-5 mt-0">
      <div className="section-title text-center mt-5">
        <span>TESTIMONIAL</span>
        <h2 className="mt-20 md:mt-0 text-4xl md:text-5xl font-bold text-[#f3d36c] bg-clip-text">
          What Our Customers have for Us..
        </h2>
      </div>
      <div className="relative w-full h-64 overflow-hidden bg-gray-100">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="medium" // Adjust to your preferred speed
          mobileSpeed="50s" // Faster speed for mobile screens
        />
      </div>
    </div>
  );
};

export default Testimonial;
