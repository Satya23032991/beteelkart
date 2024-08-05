

"use client";
import { useState, useRef } from 'react';
import Image from 'next/image';

const InfiniteMovingCards = ({ items, direction = "right", speed = "slow", mobileSpeed = "10s" }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);

  // Define animation speed
  const speedMap = {
    slow: "40s",
    medium: "20s",
    fast: "10s"
  };
  const animationDuration = speedMap[speed] || speedMap.slow;

  // Define animation direction
  const keyframes = direction === "right" ? 
    "0% { transform: translateX(100%); } 100% { transform: translateX(-100%); }" :
    "0% { transform: translateX(-100%); } 100% { transform: translateX(100%); }";

  // Calculate card and container widths
  const cardWidth = 320; // Base card width including padding and margin
  const cardMargin = 16; // Margin between cards
  const numberOfCards = items.length * 2; // Duplicate items for seamless scrolling
  const totalWidth = (cardWidth + cardMargin) * numberOfCards;

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    containerRef.current.style.transition = 'none'; // Disable transition while dragging
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    containerRef.current.style.transition = ''; // Re-enable transition after dragging
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust this multiplier to control drag sensitivity
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    containerRef.current.style.transition = 'none'; // Disable transition while dragging
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    containerRef.current.style.transition = ''; // Re-enable transition after dragging
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust this multiplier to control drag sensitivity
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      className="relative w-full h-64 overflow-hidden bg-gray-100"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      <div
        ref={containerRef}
        className="absolute flex w-full"
        style={{ 
          display: 'flex',
          flexDirection: direction === "right" ? 'row' : 'row-reverse',
          animation: `scroll ${animationDuration} linear infinite`,
          whiteSpace: 'nowrap',
          animationPlayState: isDragging ? 'paused' : 'running' // Pause animation on drag
        }}
      >
        <div className="flex flex-nowrap">
          {items.map((item, index) => (
            <div key={index} className="inline-block w-64 md:w-80 p-4 bg-gray-200 rounded shadow-md mr-4 flex flex-col items-center">
              {/* {item.image && <Image src={item.image} alt={item.name} width={100} height={100} className="rounded-full mb-4" />} */}
              <p className="text-gray-700 text-sm md:text-lg italic whitespace-normal">&apos;{item.quote}&apos;</p>
              <p className="mt-2 text-gray-900 font-bold whitespace-normal">{item.name}</p>
              <p className="text-gray-600 whitespace-normal">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-nowrap">
          {items.map((item, index) => (
            <div key={index + items.length} className="inline-block w-64 md:w-80 p-4 bg-gray-200 rounded shadow-md mr-4 flex flex-col items-center">
              {/* {item.image && <Image src={item.image} alt={item.name} width={100} height={100} className="rounded-full mb-4" />} */}
              <p className="text-gray-700 text-sm md:text-lg italic whitespace-normal">&apos;{item.quote}&apos;</p>
              <p className="mt-2 text-gray-900 font-bold whitespace-normal">{item.name}</p>
              <p className="text-gray-600 whitespace-normal">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          ${keyframes}
        }
        .absolute > div {
          width: ${totalWidth}px;
        }
        .relative {
          cursor: grab;
        }
        .relative:active {
          cursor: grabbing;
        }
        @media (max-width: 768px) { /* Mobile screens */
          .absolute {
            animation: scroll ${mobileSpeed} linear infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default InfiniteMovingCards;




// "use client";
// import { useState, useRef } from 'react';
// import Image from 'next/image';

// const InfiniteMovingCards = ({ items, direction = "right", speed = "slow", mobileSpeed = "10s" }) => {
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);
//   const containerRef = useRef(null);

//   // Define animation speed
//   const speedMap = {
//     slow: "40s",
//     medium: "20s",
//     fast: "10s"
//   };
//   const animationDuration = speedMap[speed] || speedMap.slow;

//   // Define animation direction
//   const keyframes = direction === "right" ? 
//     "0% { transform: translateX(100%); } 100% { transform: translateX(-100%); }" :
//     "0% { transform: translateX(-100%); } 100% { transform: translateX(100%); }";

//   // Calculate card and container widths
//   const cardWidth = 320; // Base card width including padding and margin
//   const cardMargin = 16; // Margin between cards
//   const visibleCards = 4; // Number of cards you want visible at once (adjust this as needed)
//   const numberOfCards = items.length * 2; // Duplicate items for seamless scrolling
//   const totalWidth = (cardWidth + cardMargin) * numberOfCards;

//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     setStartX(e.pageX - containerRef.current.offsetLeft);
//     setScrollLeft(containerRef.current.scrollLeft);
//     containerRef.current.style.transition = 'none'; // Disable transition while dragging
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//     containerRef.current.style.transition = ''; // Re-enable transition after dragging
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;
//     const x = e.pageX - containerRef.current.offsetLeft;
//     const walk = (x - startX) * 2; // Adjust this multiplier to control drag sensitivity
//     containerRef.current.scrollLeft = scrollLeft - walk;
//   };

//   const handleTouchStart = (e) => {
//     setIsDragging(true);
//     setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
//     setScrollLeft(containerRef.current.scrollLeft);
//     containerRef.current.style.transition = 'none'; // Disable transition while dragging
//   };

//   const handleTouchEnd = () => {
//     setIsDragging(false);
//     containerRef.current.style.transition = ''; // Re-enable transition after dragging
//   };

//   const handleTouchMove = (e) => {
//     if (!isDragging) return;
//     const x = e.touches[0].pageX - containerRef.current.offsetLeft;
//     const walk = (x - startX) * 2; // Adjust this multiplier to control drag sensitivity
//     containerRef.current.scrollLeft = scrollLeft - walk;
//   };

//   return (
//     <div
//       className="relative w-full h-64 overflow-hidden bg-gray-100"
//       onMouseDown={handleMouseDown}
//       onMouseUp={handleMouseUp}
//       onMouseMove={handleMouseMove}
//       onTouchStart={handleTouchStart}
//       onTouchEnd={handleTouchEnd}
//       onTouchMove={handleTouchMove}
//     >
//       <div
//         ref={containerRef}
//         className="absolute flex w-full"
//         style={{ 
//           display: 'flex',
//           flexDirection: direction === "right" ? 'row' : 'row-reverse',
//           animation: `scroll ${animationDuration} linear infinite`,
//           whiteSpace: 'nowrap',
//           animationPlayState: isDragging ? 'paused' : 'running' // Pause animation on drag
//         }}
//       >
//         <div className="flex flex-nowrap">
//           {items.map((item, index) => (
//             <div key={index} className="inline-block w-64 md:w-80 p-4 bg-gray-200 rounded shadow-md mr-4 flex flex-col items-center">
//               {/* {item.image && <Image src={item.image} alt={item.name} width={100} height={100} className="rounded-full mb-4" />} */}
//               <p className="text-gray-700 text-sm md:text-lg italic whitespace-normal">"{item.quote}"</p>
//               <p className="mt-2 text-gray-900 font-bold whitespace-normal">{item.name}</p>
//               <p className="text-gray-600 whitespace-normal">{item.title}</p>
//             </div>
//           ))}
//         </div>
//         <div className="flex flex-nowrap">
//           {items.map((item, index) => (
//             <div key={index + items.length} className="inline-block w-64 md:w-80 p-4 bg-gray-200 rounded shadow-md mr-4 flex flex-col items-center">
//               {item.image && <Image src={item.image} alt={item.name} width={100} height={100} className="rounded-full mb-4" />}
//               <p className="text-gray-700 text-sm md:text-lg italic whitespace-normal">"{item.quote}"</p>
//               <p className="mt-2 text-gray-900 font-bold whitespace-normal">{item.name}</p>
//               <p className="text-gray-600 whitespace-normal">{item.title}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes scroll {
//           ${keyframes}
//         }
//         .absolute > div {
//           width: ${totalWidth}px;
//         }
//         .relative {
//           cursor: grab;
//         }
//         .relative:active {
//           cursor: grabbing;
//         }
//         @media (max-width: 768px) { /* Mobile screens */
//           .absolute {
//             animation: scroll ${mobileSpeed} linear infinite;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default InfiniteMovingCards;












