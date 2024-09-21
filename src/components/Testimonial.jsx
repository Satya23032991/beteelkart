 
 "use client";
 import { useState, useEffect } from "react";
 
 const SingleCardCarousel = ({ items = [], duration = 3000 }) => {  // Ensure items has a default value
   const [currentIndex, setCurrentIndex] = useState(0);
   const [animateKey, setAnimateKey] = useState(0);
 
   useEffect(() => {
     if (items.length === 0) return;  // Handle empty or undefined items array
 
     const interval = setInterval(() => {
       setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
       setAnimateKey((prevKey) => prevKey + 1);
     }, duration);
 
     return () => clearInterval(interval);
   }, [items.length, duration]);  // Ensure items.length is safely accessed
 
   // Return nothing if no items are available
   if (!items || items.length === 0) return null;
 
   return (
     <div className="relative w-full h-94 overflow-hidden bg-[#aae0ff] flex justify-center items-center">
       <div
         key={animateKey}
         className="w-64 md:w-80 p-4 bg-[#aae0ff] rounded shadow-md flex flex-col items-center transition-opacity duration-500 scale-animation overflow-hidden max-h-64"
       >
         <div className="overflow-y-auto max-h-32 w-full scrollbar-hide">
           <p className="text-[#791917] text-md md:text-lg italic break-words whitespace-normal">
             &apos;{items[currentIndex].quote}&apos;
           </p>
         </div>
         <p className="mt-2 text-[#791917] font-bold whitespace-normal">
           {items[currentIndex].name}
         </p>
         <p className="text-[#791917] whitespace-normal">
           {items[currentIndex].title}
         </p>
       </div>
     </div>
   );
 };
 
 export default SingleCardCarousel;
 

// import Image from "next/image";
// // import InfiniteMovingCards from "./ui/infinite-moving-cards";
// import SingleCardCarousel from "./ui/infinite-moving-cards";
// import brucewayne from '/src/images/bruce_wayne.jpeg';
// import "/src/components/Testimonial.css";
// const testimonials = [
//   {
//     quote: "Writing this review on behalf of my 50 Guests who said they had the best Pan.",
//     name: "Khadar Basha",
//     title: ""
//   },
//   {
//     quote: "I've never enjoyed it before, but once I tried their paan, I Was Sold ",
//     name: "Manasa Narasimhan",
//     title: ""
//   },
//   {
//     quote: "The taste from Indianpaansamrat is awesome",
//     name: "Shivani Nayak",
//     title: "",
//   },
//   {
//     quote: "Love the quality and how hygienically it is packed.The taste is awesome not like other paans which are too sweet",
//     name: "Hemanth Malviya",
//     title: ""
//   },
//   {
//     quote: "For someone who's never liked paan,this was a pleasant surprise.The Calcutta Saada paan was my favourite,it tasted rich and decadent.",
//     name: "Mahima Narasimhan",
//     title: ""
//   },
//   {
//     quote: "Had tasted Calcutta meetha pan which turned out to be the best paan I've had in my life. ",
//     name: "Deaf frogs",
//     title: ""
//   },
//   {
//     quote: "The paan is very delicious with the right blend of flavours.It melts in the mouth as soon as you savour.It's great that we get it in a hygienic Pouch.",
//     name: "Anuradha Lakshminarayanan",
//     title: ""
//   },
//   {
//     quote: "This is new phase in paan industry, Tobacco free, spit free, perfectly curated paan, these guys are presenting paan in very unique and healthy way must try. ",
//     name: "Srinivas Murthy",
//     title: ""
//   },
//   {
//     quote: "I really liked the packaging & quality of the pan Vegetarian options: Just pan.....have it & get experienced",
//     name: "Karthik U",
//     title: ""
//   },
 
//   {
//     quote: "It was amazing from the first bite recommend paan lovers as well occasionally paan eaters to try once you will like it",
//     name: "Amjed Syed",
//     title: ""
//   },
//   {
//     quote: "Indianpaansamrat has a lot of variety, I must say",
//     name: "Santhosh Kumar",
//     title: ""
//   },
//   {
//     quote: "Indianpaansamrat is the best, I have tasted till now",
//     name: "Narsimhan Sethumadhavan",
//     title: ""
//   },
//   {
//     quote: "Indianpaansamrat has a lot of options",
//     name: "Rahul Aranya",
//     title: ""
//   },
//   {
//     quote: "Indianpaansamrat is the best in this segment",
//     name: "Priyaranjan Nayak",
//     title: ""
//   },
//   {
//     quote: "Indianpaansamrat has so much of varieties",
//     name: "Manas Patra",
//     title: ""
//   },
//   {
//     quote: "Paan Means It’s Indian Paan Samrat! The Calcutta Meetha Paan is not just a paan—it’s a dessert masterpiece!",
//     name: "Shinu Mithra",
//     title: "Kannada Actor"
//   },
//   {
//     quote: "Indian Paan Samrat Offered the best paan I have ever had.Their innovative concepts and top quality ingredients are amazing",
//     name: "Arif",
//     title: ""
//   }
// ];



// const Testimonial = () => {
//   return (
//     <div className="about_sec bg-[#aae0ff] text-[#791917]
//      h-auto text-lg w-full flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 p-5 mt-0">
//       <div className="section-title text-center mt-5">
//         <span>TESTIMONIAL</span>
//         <h2 className="mt-20 md:mt-0 text-4xl 
//         md:text-5xl font-bold text-[#075156] bg-[#aae0ff]">
//           What Our Customers have for Us..
//         </h2>
//       </div>
//       <div  className="relative w-full text-[#075156] pt-5 mt-5 h-64 overflow-hidden">
//         <SingleCardCarousel items={testimonials} duration={3000} />
//       </div>
//     </div>
//   );
// };

// export default Testimonial;


// const Testimonial = () => {
//   return (
//     <div className="about_sec bg-[#791917] text-[#f3d36c] h-auto text-lg w-full flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 p-5 mt-0">
//       <div className="section-title text-center mt-5">
//         <span>TESTIMONIAL</span>
//         <h2 className="mt-20 md:mt-0 text-4xl md:text-5xl font-bold text-[#f3d36c] bg-clip-text">
//           What Our Customers have for Us..
//         </h2>
//       </div>
//       <div style={{ backgroundColor: '#096067'}} className="relative w-full pt-5 mt-5 h-64 overflow-hidden ">
//         <InfiniteMovingCards
//           items={testimonials}
//           direction="right"
//           speed={300} 
//           mobileSpeed={1000}
//         />
//       </div>
//     </div>
//   );
// };

// export default Testimonial;
