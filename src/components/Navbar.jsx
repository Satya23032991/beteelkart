
 "use client";

 import Image from "next/image";
 import {useState} from 'react';
 import logo from '../images/IPS_LOGO.png';
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";


 const navItems = [
    {
        label: "Traditional Paan",
        link: "#",
        children: [
            {
                id: 1,
                label: "Traditional Saada Paan",
                link: "/navbar-child/traditional-saada-paan"
            },
            {
                id: 2,
                label: "Traditional Meetha Paan",
                link:"/navbar-child/traditional-meetha-paan"
            }
        ]
    },
    {
        id: 1,
        label: "Ice-Burst paan",
        link:""
    },
    {
        id: 1,
       label: "Zero Supari",
       link:"" 
    },
    {
        id: 1,
        label:"Special Paan",
        link:"",
        children: [
            {
                id: 1,
                label:"Flavoured Special Paan",
                link:""
            },
            {
                id: 2,
                label:"Coated Paan Theory",
                link:""
            },
            {
                id: 3,
                label:"Kiddie Paan Theory",
                link:""
            }
        ]
    },
    {
        label: "Combo Paan",
        link: "",
        children: [
            {
                id: 1,
                label: "The Meetha Combo",
                link: ""
            },
            {
                id: 2,
                label: "The Mix Combo",
                link: ""
            },
            {
                id: 3,
                label: "The Saada Combo",
                link: ""
            },
            {
                id: 4,
                label: "Maghai Paan Combo",
                link:""
            },
            {
                id: 5,
                label: "Culcutta Paan Combo",
                link: "",
            },
            {
                id: 6,
                label: "Kiddie Amaze Combo",
                link: "",
            },
            {
                id: 7,
                label: "The Gold Combo",
                link: ""
            },
            {
                id: 8,
                label: "The Regal Combo",
                link: ""
            },
            {
                id: 9,
                label: "The Saada Combo",
                link: ""
            },
            {
                id: 10,
                label: "The Delightful Combo",
                link: ""       
            },
            {
                id: 11,
                label: "The Hangover Combo",
                link: ""
            },
            {
                id: 12,
                label: "Festive Hampers",
                link:""
            }
        ]
    }
 ];

 export default function Navbar() {
    const [animationParent] = useAutoAnimate();
    const [isSideMenuOpen, setSideMenu] = useState(false);
  
    const openSideMenu = () => {
      setSideMenu(true);
    };
  
    const closeSideMenu = () => {
      setSideMenu(false);
    };
  
    return (
      <div className="mx-auto flex w-full max-w-7xl justify-between px-4">
        <section ref={animationParent} className="flex items-center gap-1 md:gap-1 lg:gap:gap-[1rem]">
          <Link href={"/"}>
            <Image src={logo} alt="logo" width={100} className="logo" />
          </Link>
        </section>
  
        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        <div className="hidden md:flex items-center gap-4 transition-all">
          {navItems.map((elements) => {
            return (
              <div key={elements.id} className="relative group">
                <Link href={elements.link ?? "#"} className="px-2 py-3 transition-all">
                  <p className="flex cursor-pointer items-center gap-2 text-black-600 group-hover:text-yellow-500 text-md">
                    <span>{elements.label}</span>
                   
                  </p>
                </Link>
                {elements.children && (
                  <div className="absolute right-0 top-10 hidden w-auto flex-col gap-1 bg-white py-3 shadow-md transition-all group-hover:flex mt-3">
                    {elements.children.map((child) => {
                      return (
                        <Link key={child.id} href={child.link ?? '#'}
                          className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-black hover:text-gray-500"
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
              <SingleNavItem key={d.id} label={d.label} iconImage={d.iconImage} link={d.link}>
                {d.children}
              </SingleNavItem>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  
  function SingleNavItem({ label, iconImage, link, children }) {
    const [animationParent] = useAutoAnimate();
    const [isItemOpen, setItem] = useState(false);
  
    function toggleItem() {
      setItem(!isItemOpen);
    }
  
    return (
      <div>
        <Link ref={animationParent} onClick={toggleItem} href={link || "#"} className="relative px-2 py-3 transition-all">
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
  
  
  
  