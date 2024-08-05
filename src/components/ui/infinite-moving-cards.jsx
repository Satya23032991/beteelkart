

"use client"

import React from 'react';

const InfiniteMovingCards = ({ items, direction = "right", speed = "slow" }) => {
  // Define animation speed
  const speedMap = {
    slow: "40s",
    medium: "5s",
    fast: "2s"
  };
  const animationDuration = speedMap[speed] || speedMap.slow;

  // Define animation direction
  const keyframes = direction === "right" ? 
    "0% { transform: translateX(100%); } 100% { transform: translateX(-100%); }" :
    "0% { transform: translateX(-100%); } 100% { transform: translateX(100%); }";

  // Calculate the width needed for the scrolling animation
  const cardWidth = 320; // 80px width + 16px margin (you might need to adjust this based on actual size)
  const numberOfCards = items.length * 2; // Multiplying by 2 to ensure the loop is smooth
  const totalWidth = cardWidth * numberOfCards;

  return (
    <div className="relative w-full pt-5 h-64 overflow-hidden bg-black">
      <div
        className="absolute flex w-full"
        style={{ 
          display: 'flex',
          flexDirection: direction === "right" ? 'row' : 'row-reverse',
          animation: `scroll ${animationDuration} linear infinite`,
          whiteSpace: 'nowrap',
        }}
      >
        <div className="flex flex-nowrap">
          {items.map((item) => (
            <div key={item.id} className="inline-block w-80 p-4 bg-[#febe78] rounded shadow-md mr-4">
              <p className="text-[#791917] text-lg italic whitespace-normal">{item.quote}</p>
              <p className="mt-2 text-gray-900 font-bold whitespace-normal">{item.name}</p>
              <p className="text-gray-600 whitespace-normal">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-nowrap">
          {items.map((item) => (
            <div key={item.id + items.length} className="inline-block w-80 p-4 bg-[#febe78] rounded shadow-md mr-4">
              <p className="text-[#791917] text-lg italic whitespace-normal">{item.quote}</p>
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
      `}</style>
    </div>
  );
};

export default InfiniteMovingCards;

