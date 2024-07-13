import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import "../styles/About.min.css";
import '../styles/index.css'; // Import your CSS file for additional custom styles

const AnimatedBackground = () => {
  const wrapperRomboRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const Utils = {
      Android: () => navigator.userAgent.match(/Android/i),
      BlackBerry: () => navigator.userAgent.match(/BlackBerry/i),
      iOS: () => navigator.userAgent.match(/iPhone|iPad|iPod/i),
      Opera: () => navigator.userAgent.match(/Opera Mini/i),
      Windows: () => navigator.userAgent.match(/IEMobile/i),
      any: function() {
        return (Utils.Android() || Utils.BlackBerry() || Utils.iOS() || Utils.Opera() || Utils.Windows());
      },
      randomInRange: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
    };

    const wrapperRombo = wrapperRomboRef.current;
    const colors = ['#ff0000', '#d8fa16', '#692286', '#c4a66b', '#0000b3', '#6ac1b8'];
    const nRombo = 46;
    const timer = 0.8;

    const setObj = () => {
      const zoomLevel = document.documentElement.clientWidth / window.innerWidth;
      const heightIOs = window.innerHeight * zoomLevel;

      if (Utils.iOS()) {
        if (heightIOs > window.innerWidth) {
          document.querySelector('.Main').style.height = heightIOs + 'px';
          document.querySelector('.Main').style.minHeight = heightIOs + 'px';
        }
      }
    };

    const romboInit = () => {
      for (let i = 0; i < nRombo; i++) {
        const gridItem = document.createElement('div');
        const romboDiv = document.createElement('div');

        wrapperRombo.appendChild(gridItem);
        gridItem.className = 'box';

        gsap.set('.box', {
          perspective: 600,
          transformOrigin: '50% 50%',
        });

        document.querySelectorAll('.box')[i].appendChild(romboDiv);
        romboDiv.className = 'rombo';

        gsap.set('.rombo', {
          transformStyle: 'preserve-3d',
        });

        if (Utils.any()) {
          gsap.set(document.querySelectorAll('.rombo')[i], {
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            top: Utils.randomInRange(-40, 40),
            left: Utils.randomInRange(-40, 40),
            y: 0,
            scale: 0,
            opacity: 0,
            transformOrigin: '50% 50%',
            rotationY: Utils.randomInRange(-720, 720),
            rotation: Utils.randomInRange(-320, 320),
          });
        } else {
          gsap.set(document.querySelectorAll('.rombo')[i], {
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            top: Utils.randomInRange(-180, 180),
            left: Utils.randomInRange(-180, 180),
            y: -100,
            scale: 0,
            opacity: 0,
            transformOrigin: '50% 50%',
            rotationY: Utils.randomInRange(-720, 720),
            rotation: Utils.randomInRange(-320, 320),
          });
        }
      }
    };

    const romboAnimation = () => {
      const romboTodo = [].slice.call(document.querySelectorAll('.rombo'), 0);
      const tl = gsap.timeline();

      tl.staggerTo(romboTodo, 1.2, {
        y: 0,
        scale: 1,
        opacity: 0.3, // Adjust opacity to make translucent
        rotationY: 0,
        rotation: '+=240',
        force3D: true,
        ease: 'power2.out',
      }, 0.08);

      return tl;
    };

    const initAnimation = () => {
      setObj();
      romboInit();

      const master = gsap.timeline({ delay: 0.4 });
      master.add(romboAnimation(), 'scene2');
      master.timeScale(timer);

      animationRef.current = master;
    };

    initAnimation();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animationRef.current.restart();
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (wrapperRombo) {
      observer.observe(wrapperRombo);
    }

    return () => {
      if (wrapperRombo) {
        observer.unobserve(wrapperRombo);
      }
    };
  }, []);

  return (
    <div className="container">
      <div id="wrapper" ref={wrapperRomboRef}></div>
    </div>
  );
};

export default AnimatedBackground;
