import React from 'react';
import useScrollDirection from './useScrollDirection';
import { BsGithub } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const { isAtTop } = useScrollDirection();

  return (
    <footer className={`footer ${isAtTop ? 'visible' : 'hidden'}`}>
      <div className="footer_content pb-5 flex justify-evenly flex-wrap items-center bg-white bg-opacity-85  rounded-md">
        <div>
            <p className='text-lg font-semibold text-gray-500 drop-shadow-xl'>Check out my work and skills here</p>
        </div>
        <div className='flex gap-3'>
        <a href="#" class="inline-flex items-center justify-center p-3.5 text-lg font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
            <BsGithub style={{ fontSize: '40px' }} />
            <span class="w-full">GitHub</span>
              <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
        </a> 
        <a href="#" class="inline-flex items-center justify-center p-3.5 text-lg font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
            <GrLinkedin  style={{ fontSize: '40px' }} />
            <span class="w-full">LinkedIn</span>
              <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
        </a>
        <a href="#" class="inline-flex items-center justify-center p-3.5 text-lg font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
            <SiLeetcode  style={{ fontSize: '40px' }} />
            <span class="w-full">LeetCode</span>
              <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
        </a>
        </div>
        
        
      </div>
    </footer>
  );
};

export default Footer;
