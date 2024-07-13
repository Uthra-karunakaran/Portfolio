// src/ImageViewer.js
import React, { useState } from "react";
import { IoCaretBack } from "react-icons/io5";
import { IoCaretForward } from "react-icons/io5";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { IoClose } from "react-icons/io5";
import "../styles/ImageViewer.css"
const images = [
    "./src/assets/exp1.jpg",
    "./src/assets/exp2.jpg",
    "./src/assets/exp3.jpg"
  // add more image paths here
];

const ImageViewer = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState("right");
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const prevImage = () => {
      if (currentIndex > 0) {
        setDirection("left");
        setCurrentIndex((prevIndex) => prevIndex - 1);
      }
    };
  
    const nextImage = () => {
      if (currentIndex < images.length - 1) {
        setDirection("right");
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    };
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  //max-w-xs md:max-w-xl lg:max-w-4xl xl:max-w-6xl
    return (
      <div className="flex flex-col items-center relative  imgShadow  rounded-md max-w-xs lg:max-w-imgWidth md:max-w-sm">
        <div className="relative w-full h-60 md:h-80 lg:h-imgHeightLg overflow-hidden rounded-md">
          <TransitionGroup className={`image-container ${direction}`}>
            <CSSTransition
              key={currentIndex}
              timeout={500}
              classNames="slide"
            >
              <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                className="object-cover w-full h-full  cursor-pointer rounded-md "
                onClick={openModal}
              />
            </CSSTransition>
          </TransitionGroup>
          <button
            onClick={prevImage}
            className={`absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentIndex === 0}
          >
            <IoCaretBack style={{ fontSize: '25px' }}/>
          </button>
          <button
            onClick={nextImage}
            className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 ${
              currentIndex === images.length - 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentIndex === images.length - 1}
          >
          <IoCaretForward style={{ fontSize: '25px' }}/>
          </button>
        </div>
  
        {isModalOpen && (
            <div className="relative z-50">
            <div className="fixed inset-0 flex items-center justify-center bg-slate-950 bg-opacity-90" onClick={closeModal}>
              <div className="p-px bg-white rounded shadow-lg">
                <button
                  className="absolute top-5 right-5 mt-2 mr-2 text-black"
                  onClick={closeModal}
                >
                  ✖️
                </button>
                <img
                  src={images[currentIndex]}
                  alt={`Modal ${currentIndex}`}
                  className="lg:max-w-4xl"
                />
              </div>
            </div>
          </div>
          
        )}
      </div>
      
    );
  };
  
export default ImageViewer;
