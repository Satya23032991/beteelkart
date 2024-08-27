import Image from "next/image";
import InfiniteMovingCards from "./ui/infinite-moving-cards";
import brucewayne from '/src/images/bruce_wayne.jpeg';

const testimonials = [
  {
    quote: "Writing this review on behalf of my 50 Guests who said they had the best Pan.",
    name: "Khadar Basha",
    title: ""
  },
  {
    quote: "I've never enjoyed it before, but once I tried their paan, I. Was. Sold ",
    name: "Manasa Narasimhan",
    title: ""
  },
  {
    quote: "The taste from Indianpaansamrat is awesome",
    name: "Shivani Nayak",
    title: "",
  },
  {
    quote: "Love the quality and how hygienically it is packed.The taste is awesome not like other paans which are too sweet",
    name: "Hemanth Malviya",
    title: ""
  },
  {
    quote: "For someone who's never liked paan, this was a pleasant surprise. The Calcutta Saada paan was my favourite, it tasted rich and decadent.",
    name: "Mahima Narasimhan",
    title: ""
  },
  {
    quote: "Had tasted Calcutta meetha pan which turned out to be the best paan I've had in my life so well packed and long break leaf with plenty amount of fillings ",
    name: "Deaf frogs",
    title: ""
  },
  {
    quote: "The paan is very delicious with the right blend of flavours.It melts in the mouth as soon as you savour.It's great that we get it in a hygienically packed and sealed appealing pouches.",
    name: "Anuradha Lakshminarayanan",
    title: ""
  },
  {
    quote: "This is new phase in paan industry, Tobacco free, spit free, perfectly curated paan, these guys are presenting paan in very unique and healthy way must try, cheers to the team, Keep up the good work. ",
    name: "Srinivas Murthy",
    title: ""
  },
  {
    quote: "I really liked the packaging & quality of the pan Vegetarian options: Just pan.....have it & get experienced",
    name: "Karthik U",
    title: ""
  },
 
  {
    quote: "It was amazing from the first bite recommend paan lovers as well occasionally paan eaters to try once you will like it",
    name: "Amjed Syed",
    title: ""
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
          speed={300} 
          mobileSpeed={1000}
        />
      </div>
    </div>
  );
};

export default Testimonial;
