
 "use client";

import Image from "next/image";
import { useState, useEffect } from 'react';
import logo from '../images/IPS_LOGO.png';
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import '../components/ui/navbar.css';

const navItems = [

  {
    id: 1,
    label: "Customers Voice",
    link:"/navbar-child/customer-voice"
  },

  {
    id: 2,
    label: "About Us",
    link: "/navbar-child/aboutus"
  },
   
  {
    id: 3,
    label: "Traditional Paan",
    link: "/products/traditionalpaan"
  },
  {
   id: 4,
   label: "Ice Burst Paan",
   link: "/products/iceburstpaan"
  },
  {
    id: 5,
    label: "Special Paan",
    link: "/products/specialpaan"
  },
  {
    id: 6,
    label: "Combo Paan",
    link: "/products/combopaan"
   },

   {
    id: 7,
   label: "Paan-Tastic Box",
   link: "/Adventure.pdf",
   download: true
  },

  {
    id: 8,
    label: "Contact Us",
    link: "/navbar-child/contact-us",
    
  }  
];

export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenu] = useState(false);
  const [animateLogo, setAnimateLogo] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const openSideMenu = () => {
    setSideMenu(true);
  };

  const closeSideMenu = () => {
    setSideMenu(false);
  };

 

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateLogo(true);
    }, 100); 

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 z-50 mx-auto flex w-full items-center bg-[#791917] justify-between px-4 font-serif tracking-wider leading-snug">

      <section ref={animationParent} className={`flex items-center pl-5 gap-1 md:gap-1 lg:gap-[1rem] ${animateLogo ? 'animate-logo' : ''}`}>
        <Link href={"/"}>
          <Image src={logo} alt="logo" width={56} height={58} className="logo" />
        </Link>
      </section>

      {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
      <div className="hidden md:flex items-center gap-4 transition-all">
        {navItems.map((elements) => {
          return (
            <div key={elements.id} className="relative group">
              <a 
              href={elements.link}
              className="menu px-2 py-3 transition-all"
             download={elements.download ? true: undefined}
               >
                <p className=" flex cursor-pointer items-center gap-2 text-[#febe78] group-hover:text-greeeen-500 text-md">
                  <span>{elements.label}</span>
                </p>
              </a>
              {elements.children && (
                <div className="absolute right-0 top-10 hidden w-auto flex-col gap-1 bg-white py-3 shadow-md transition-all group-hover:flex mt-3">
                  {elements.children.map((child) => {
                    return (
                      <Link key={child.id} href={child.link ?? '#'}
                        className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-[#febe78] hover:text-green-500"
                      >
                        {child.iconImage && <Image src={child.iconImage} alt="itemIcon" />}
                        <span className="whitespace-nowrap pl-1 md:pl-3">{child.label}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <FiMenu onClick={openSideMenu} className="cursor-pointer text-4xl md:hidden mt-6" />
    </div>
  );
}

function MobileNav({ closeSideMenu }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-[#f18509] md:hidden z-50">
      <div className="h-full w-[78%] text-[#2a2a2a] px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose onClick={closeSideMenu} className="cursor-pointer text-black" />
        </section>
        <div className="flex flex-col text-base gap-2 transition-all">
          {navItems.map((d) => (
            <SingleNavItem key={d.id} label={d.label} iconImage={d.iconImage} link={d.link} closeSideMenu={closeSideMenu}>
              {d.children}
            </SingleNavItem>
          ))}
        </div>
      </div>
    </div>
  );
}


function SingleNavItem({ label, iconImage, link, children, closeSideMenu }) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    setItem(!isItemOpen);
  }

  return (
    <div>
      <Link 
        ref={animationParent} 
        href={link || "#"}
        onClick={(e) => {
          if (children) {
            e.preventDefault();
            toggleItem();
          } else {
            
            if (closeSideMenu) {
              closeSideMenu(); 
            }
          }
        }} 
        className="relative px-2 py-3 transition-all"
      >
        <p className="flex cursor-pointer items-center gap-2 text-black-600 group-hover:text-black nav-item-text">
          <span>{label}</span>
          {children && (
            <IoIosArrowDown className={`text-xs transition-all ${isItemOpen ? "rotate-180" : ""}`} />
          )}
        </p>
      </Link>
      {isItemOpen && children && (
        <div className="text-sm w-auto flex-col gap-1 z-50 rounded-lg bg-white py-3 shadow-md transition-all flex mt-3">
          {children.map((ch) => (
            <Link
              key={ch.id}
              href={ch.link || "#"}
              className="flex cursor-pointer items-center py-1 pl-0 pr-0 md:pl-6 md:pr-8 text-black hover:text-gray-500"
              onClick={() => {
                // Close side menu after navigation on mobile
                if (ch.link) {
                  closeSideMenu();
                }
              }}
            >
              {ch.iconImage && <Image src={ch.iconImage} alt="item-icon" />}
              <span className="whitespace-nowrap pl-1 md:pl-3">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

//If any issue arises in Navigation Functionality then comment the above SingleNavItem & 
//uncomment this below one... after creating a child of the contact page in the dropdown

// function SingleNavItem({ label, iconImage, link, children, closeSideMenu }) {
//   const [animationParent] = useAutoAnimate();
//   const [isItemOpen, setItem] = useState(false);

//   function toggleItem() {
//     setItem(!isItemOpen);
//   }

//   return (
//     <div>
//       <Link 
//         ref={animationParent} 
//         href={link || "#"}
//         onClick={(e) => {
//           if (children) {
//             e.preventDefault(); // Prevent default navigation if children are present to toggle the menu
//             toggleItem();
//           }
//         }} 
//         className="relative px-2 py-3 transition-all"
//       >
//         <p className="flex cursor-pointer items-center gap-2 text-black-600 group-hover:text-black nav-item-text">
//           <span>{label}</span>
//           {children && (
//             <IoIosArrowDown className={`text-xs transition-all ${isItemOpen ? "rotate-180" : ""}`} />
//           )}
//         </p>
//       </Link>
//       {isItemOpen && children && (
//         <div className="text-sm w-auto flex-col gap-1 z-50 rounded-lg bg-white py-3 shadow-md transition-all flex mt-3">
//           {children.map((ch) => (
//             <Link
//               key={ch.id}
//               href={ch.link || "#"}
//               className="flex cursor-pointer items-center py-1 pl-0 pr-0 md:pl-6 md:pr-8 text-black hover:text-gray-500"
//               onClick={() => {
//                 // Close side menu after navigation on mobile
//                 if (ch.link) {
//                   closeSideMenu();
//                 }
//               }}
//             >
//               {ch.iconImage && <Image src={ch.iconImage} alt="item-icon" />}
//               <span className="whitespace-nowrap pl-1 md:pl-3">{ch.label}</span>
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
