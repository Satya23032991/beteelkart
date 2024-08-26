import Image from "next/image";
import InfiniteMovingCards from "./ui/infinite-moving-cards";
import brucewayne from '/src/images/bruce_wayne.jpeg';

const testimonials = [
  {
    quote: "Indianpaansamrat has quite a lot of options to choose from",
    name: "Satya Prakash",
    title: "Customer"
  },
  {
    quote: "The taste from Indianpaansamrat is awesome",
    name: "Shivani Nayak",
    title: "Customer",
  },
  {
    quote: "Indianpaansamrat has a lot of variety, I must say",
    name: "Santhosh Kumar",
    title: ""
  },
  {
    quote: "Indianpaansamrat is the best, I have tasted till now",
    name: "Narsimhan Sethumadhavan",
    title: ""
  },
  {
    quote: "Indianpaansamrat has a lot of options",
    name: "Rahul Aranya",
    title: ""
  },
  {
    quote: "Indianpaansamrat is the best in this segment",
    name: "Priyaranjan Nayak",
    title: ""
  },
  {
    quote: "Indianpaansamrat has so much of varieties",
    name: "Manas Patra",
    title: ""
  }
];

const Testimonial = () => {
  return (
    <div className="about_sec bg-[#791917] text-[#f3d36c] h-auto text-lg w-full flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 p-5 mt-0">
      <div className="section-title text-center mt-5">
        <span>TESTIMONIAL</span>
        <h2 className="mt-20 md:mt-0 text-4xl md:text-5xl font-bold text-[#f3d36c] bg-clip-text">
          What Our Customers have for Us..
        </h2>
      </div>
      <div style={{ backgroundColor: '#096067'}} className="relative w-full pt-5 mt-5 h-64 overflow-hidden ">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed={150} 
          mobileSpeed={450}
        />
      </div>
    </div>
  );
};

export default Testimonial;
