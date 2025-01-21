
 import Image from "next/image";
 // import InfiniteMovingCards from "./ui/infinite-moving-cards";
 import Headercarousel from "./ui/headerCarousel";
 import brucewayne from '/src/images/bruce_wayne.jpeg';
 import "/src/components/Testimonial.css";
 const notices =[{'quote': 'OUR PRODUCTS HAVE ACHIEVED A 5-STAR RATING IN GOOGLE'},
 {'quote': 'GET HOLD OF ATTRACTIVE OFFERS WITH ATTRACTIVE GIFTS',
  'name': '',
  'title': ''},
 {'quote': 'BUY 3 GET 1 FREE', 'name': '', 'title': ''},
 {'quote': 'BUY 10 GET 3 FREE', 'name': '', 'title': ''},
 {'quote': 'MAHA-FAMILY-PACK-BUY 25 GET 7 FREE', 'name': '', 'title': ''},
 {'quote': 'ORDER 1 JUMBO PACK OF 100 AND GET A DISCOUNT OF FLAT 30%',
  'name': '',
  'title': ''},
 {'quote': 'OFFER APPLICABLE ONLY TO TRADITIONAL PAAN',
  'name': '',
  'title': ''},
 {'quote': 'SPECIAL GIFTS AND DISCOUNTS FOR UPCOMING NEW YEAR.',
  'name': '',
  'title': ''},
 {'quote': 'NEW- YEAR SPECIAL OFFERS GOING ON', 'name': '', 'title': ''},
 {'quote': '10% OFF ON SELECTED PRODUCTS FOR CHRISTMAS',
  'name': '',
  'title': ''}];
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
 
 
 
 
 const Testimonial = () => {
    return (
      <div className="about_sec bg-[#aae0ff] text-[#791917] h-[58px] sm:text-2xl md:text-3xl text-3xl w-full flex flex-col items-center justify-center relative overflow-hidden mx-auto py-0 p-0 mt-0 font-bold">
      <div className="relative w-full text-[#075156] pt-0 mt-0 h-[60px] overflow-hidden font-bold font-serif tracking-wider leading-snug">
        <Headercarousel items={notices} duration={3000} />
      </div>
    </div>
    
    );
  };
  
  export default Testimonial;
  