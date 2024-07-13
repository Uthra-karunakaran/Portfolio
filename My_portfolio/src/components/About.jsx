
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/UakK9Hh3HhS
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import AnimatedBackground from "./AnimatedBackground"
export default function About() {
  return (
    <>
    <div className=".hero-content flex min-h-[100dvh] flex-col items-center justify-center  px-4 py-12 sm:px-6 lg:px-8">
      <div className=" max-w-72 md:max-w-2xl lg:max-w-4xl ">

     
        <div className="bg-white bg-opacity-85  rounded-md">
          <h1 class="hero-content mb-4 text-4xl font-bold text-center text-black md:text-5xl lg:text-6xl dark:text-white">Hi, I'm <span class="text-ruby">Uthra Karunakaran</span></h1>
        </div>
      
        <div className="bg-white bg-opacity-85  rounded-md">
        <h1 class="hero-content mb-4 text-4xl font-bold text-center  text-black md:text-5xl lg:text-6xl dark:text-white"> A <span class="text-ruby">FrontEnd</span> Developer</h1>
        </div>
       
        
        <div className="bg-white bg-opacity-90  rounded-md">
        <p class="text-lg font-medium  text-black text-center lg:text-xl dark:text-gray-400">I am currently an <span className="font-bold">engineering student</span> and a <span className="font-bold">front-end developer</span> with a deep passion for problem solving,  I thrive on transforming complex challenges into seamless, user-friendly experiences.  </p>

          </div>
         
         
          <div className="bg-white bg-opacity-90  rounded-md">
          <p class="text-lg font-medium  text-black text-center lg:text-xl dark:text-gray-400">Let’s build something amazing together!</p>

            </div>
            
        </div>
      
      
      <AnimatedBackground/>
    </div>
    
    </>
  )
}