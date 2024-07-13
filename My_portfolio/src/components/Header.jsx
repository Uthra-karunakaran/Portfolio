import { useState,useEffect } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../styles/Header.css'

function Header() {
  useEffect(
    () => {
    
    let lastScrollY = window.scrollY;
    let header=document.querySelector(".header");


    const handleScroll = () => {
      if (lastScrollY < window.scrollY) {

        console.log("down")
        header.classList.add("header_Hide");
      } else {
        console.log("up")
        header.classList.remove("header_Hide");
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []
);

  return (
    <>
    <header className='header header_shadow rounded-full mt-8 fixed flex  min-h-11 bg-white p-4 self-center'>
      <nav className='navbar  lg:max-w-headerWidth flex'>
        <ul className='ulnav text-2xl font-bold text-black gap-4 flex flex-row items-center  '>
          <li>
            <div
            class="text-2xl cursor-pointer relative before:absolute before:bg-sky-200 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500">
            <span class="relative">About</span>
            </div>
          </li>
            
          <li>
            <div
            class="text-2xl cursor-pointer relative before:absolute before:bg-sky-200 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500">
            <span class="relative">Project</span>
            </div>
          </li>
          <li>
             <div
            class="text-2xl cursor-pointer relative before:absolute before:bg-sky-200 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500">
            <span class="relative">Skills</span>
            </div>
          </li>
          <li>
            <div
            class="text-2xl cursor-pointer relative before:absolute before:bg-sky-200 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500">
            <span class="relative">Education</span>
            </div>
            
          </li>
          <li>
            <div
            class="text-2xl cursor-pointer relative before:absolute before:bg-sky-200 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500">
            <span class="relative">Contact</span>
            </div>
          </li>
          <li>
            <div
            class="text-2xl cursor-pointer relative before:absolute before:bg-sky-200 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500">
            <span class="relative">Resume</span>
            </div>
          </li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Header
