


"use client";

import Head from 'next/head';
import { useEffect, useRef } from 'react';
import testimonialVideo2 from '../../../video/testimonial1.mp4';
import testimonialVideo1 from '../../../video/actor_shinu.mp4';
import testimonialVideo3 from '../../../video/Arif_Review.mp4';
import testimonialVideo4 from '../../../video/testimonial2.mp4';

const Custvoice = () => {

  const videoRefs = useRef([]); 

  useEffect(() => {
    const handlePlay = (index) => {
      
      videoRefs.current.forEach((video, idx) => {
        if (idx !== index && video) {
          video.pause();
        }
      });
    };

    
    videoRefs.current.forEach((video, index) => {
      if (video) {
        video.addEventListener('play', () => handlePlay(index));
      }
    });

    return () => {
      
      videoRefs.current.forEach((video) => {
        if (video) {
          video.removeEventListener('play', () => handlePlay(index));
        }
      });
    };
  }, []);

  const cards = [
    {
      title: 'Kannada Star Shinu Mithra',
      content: "Kannada Actor/Comedian Shinu Mithra couldn't just resist to share his verdict after having our Paan.",
      video: testimonialVideo1,
    },
    {
      title: 'Pritam',
      content: 'This is the most amazing paan I have ever eaten and you will be amazed to eat the paan',
      video: testimonialVideo2,
    },
    {
      title: 'Arif',
      content: 'Honestly speaking, the kind of taste and ingredients they are getting into this product are amazing',
      video: testimonialVideo3,
    },
    {
      title: 'Pritam',
      content: "This is Pritam's 6th Paan in 20 minutes,he maynot be a paan lover but this paan's really nice",
      video: testimonialVideo4,
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8 font-serif tracking-wider leading-snug">

        Customer's Voice</h1>

        


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-1 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out min-h-[500px] flex flex-col justify-between"
          >
            {/* Card Title */}
            <h2 className="text-lg text-center font-semibold mb-2">{card.title}</h2>
            
            {/* Render video if present */}
            {card.video && (
              <video
              controls
              ref={(el) => (videoRefs.current[index] = el)} // Assign ref to the video element
              className="w-full rounded-lg"
              style={{ maxHeight: '400px' }} // Adjust video height to make the card smaller
            >
              <source src={card.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            )}

            {/* Card content */}
            <p className="mt-1 text-center">{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Custvoice;


