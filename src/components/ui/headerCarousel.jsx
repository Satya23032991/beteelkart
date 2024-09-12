
//  "use client";
//  import { useState, useEffect } from "react";
 
//  const Headercarousel = ({ items, duration = 3000 }) => {
//    const [currentIndex, setCurrentIndex] = useState(0);
//    const [animateKey, setAnimateKey] = useState(0); 
 
//    useEffect(() => {
//      const interval = setInterval(() => {
//        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
//        setAnimateKey((prevKey) => prevKey + 1); 
//      }, duration);
 
//      return () => clearInterval(interval);
//    }, [items.length, duration]);
 
//    return (
//      <div className="relative w-full h-94 overflow-hidden
//       bg-[#aae0ff] flex justify-center items-center">
//        <div
//          key={animateKey} 
//          className="w-64 md:w-80 p-4 bg-[#aae0ff]
//           rounded shadow-md flex flex-col items-center
//            transition-opacity duration-500 scale-animation"
//        >
//          <p className="text-[#791917] text-md md:text-lg italic whitespace-normal">
//            &apos;{items[currentIndex].quote}&apos;
//          </p>
//          <p className="mt-2 text-[#791917] font-bold whitespace-normal">
//            {items[currentIndex].name}
//          </p>
//          <p className="text-[#791917] whitespace-normal">
//            {items[currentIndex].title}
//          </p>
//        </div>
//      </div>
//    );
//  };
 
//  export default Headercarousel;
"use client";
import { useState, useEffect } from "react";

const Headercarousel = ({ items, duration = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateKey, setAnimateKey] = useState(0); 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      setAnimateKey((prevKey) => prevKey + 1); 
    }, duration);

    return () => clearInterval(interval);
  }, [items.length, duration]);

  return (
    <div className="relative w-full h-full overflow-hidden bg-white flex items-center justify-center">
      <div
        key={animateKey}
        className="flex flex-nowrap items-center transition-opacity duration-500"
      >
        <p className="text-[#791917] text-sm md:text-md italic whitespace-nowrap mx-2">
          &apos;{items[currentIndex].quote}&apos;
        </p>
        {/* <p className="text-[#791917] font-bold whitespace-nowrap mx-2">
          - {items[currentIndex].name}
        </p>
        <p className="text-[#791917] whitespace-nowrap mx-2">
          {items[currentIndex].title}
        </p> */}
      </div>
    </div>
  );
};

export default Headercarousel;

