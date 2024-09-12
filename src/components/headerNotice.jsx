
 import Image from "next/image";
 // import InfiniteMovingCards from "./ui/infinite-moving-cards";
 import Headercarousel from "./ui/headerCarousel";
 import brucewayne from '/src/images/bruce_wayne.jpeg';
 import "/src/components/Testimonial.css";
 const notices = [
  {
    quote: "Get hold of festival offers with attractive gifts",
    name: "",
    title: ""
  },
   {
     quote: "Special Gifts and Discounts for Upcoming Dusshera.",
     name: "",
     title: ""
   },
   {
     quote: "Ganesh Chaturthi Special Offers Going On",
     name: "",
     title: ""
   },
   {
     quote: "10% off on selected products for Diwali",
     name: "",
     title: "",
   },
//    {
//      quote: "Love the quality and how hygienically it is packed.The taste is awesome not like other paans which are too sweet",
//      name: "Hemanth Malviya",
//      title: ""
//    },
//    {
//      quote: "For someone who's never liked paan, this was a pleasant surprise. The Calcutta Saada paan was my favourite, it tasted rich and decadent.",
//      name: "Mahima Narasimhan",
//      title: ""
//    },
//    {
//      quote: "Had tasted Calcutta meetha pan which turned out to be the best paan I've had in my life so well packed and long break leaf with plenty amount of fillings ",
//      name: "Deaf frogs",
//      title: ""
//    },
//    {
//      quote: "The paan is very delicious with the right blend of flavours.It melts in the mouth as soon as you savour.It's great that we get it in a hygienically packed and sealed appealing pouches.",
//      name: "Anuradha Lakshminarayanan",
//      title: ""
//    },
//    {
//      quote: "This is new phase in paan industry, Tobacco free, spit free, perfectly curated paan, these guys are presenting paan in very unique and healthy way must try, cheers to the team. ",
//      name: "Srinivas Murthy",
//      title: ""
//    },
//    {
//      quote: "I really liked the packaging & quality of the pan Vegetarian options: Just pan.....have it & get experienced",
//      name: "Karthik U",
//      title: ""
//    },
  
//    {
//      quote: "It was amazing from the first bite recommend paan lovers as well occasionally paan eaters to try once you will like it",
//      name: "Amjed Syed",
//      title: ""
//    },
//    {
//      quote: "Indianpaansamrat has a lot of variety, I must say",
//      name: "Santhosh Kumar",
//      title: ""
//    },
//    {
//      quote: "Indianpaansamrat is the best, I have tasted till now",
//      name: "Narsimhan Sethumadhavan",
//      title: ""
//    },
//    {
//      quote: "Indianpaansamrat has a lot of options",
//      name: "Rahul Aranya",
//      title: ""
//    },
//    {
//      quote: "Indianpaansamrat is the best in this segment",
//      name: "Priyaranjan Nayak",
//      title: ""
//    },
//    {
//      quote: "Indianpaansamrat has so much of varieties",
//      name: "Manas Patra",
//      title: ""
//    }
 ];
 
 
 
 const Testimonial = () => {
    return (
      <div className="about_sec bg-[#aae0ff] text-[#791917] h-[58px] sm:text-2xl text-lg w-full flex flex-col items-center justify-center relative overflow-hidden mx-auto py-0 p-0 mt-0">
       
        <div className="relative w-full text-[#075156] pt-0 mt-0 h-[60px] overflow-hidden">
          <Headercarousel items={notices} duration={3000} />
        </div>
      </div>
    );
  };
  
  export default Testimonial;
  