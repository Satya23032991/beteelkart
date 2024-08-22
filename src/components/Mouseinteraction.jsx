
 import { useRef, useEffect } from 'react';

 export default function MouseInteraction() {
   const canvasRef = useRef(null);
 
   useEffect(() => {
     const canvas = canvasRef.current;
     const ctx = canvas.getContext('2d');
     canvas.width = window.innerWidth;
     canvas.height = window.innerHeight;
 
     const handleMouseMove = (e) => {
       const { offsetX, offsetY } = e;
 
       // Clear the canvas
       ctx.clearRect(0, 0, canvas.width, canvas.height);
 
       // Draw a circle at the mouse position
       ctx.beginPath();
       ctx.arc(offsetX, offsetY, 20, 0, Math.PI * 2);
       ctx.fillStyle = 'rgba(255, 0, 150, 0.5)';
       ctx.fill();
       ctx.closePath();
     };
 
     // Attach event listener
     canvas.addEventListener('mousemove', handleMouseMove);
 
     // Cleanup
     return () => {
       canvas.removeEventListener('mousemove', handleMouseMove);
     };
   }, []);
 
   return (
     <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none"></canvas>
   );
 }
 