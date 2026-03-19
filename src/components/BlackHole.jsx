import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
import "../styles/components/BlackHole.css";

gsap.registerPlugin(ScrollTrigger);

const BlackHole = () => {
  const containerRef = useRef(null);
  const scrollMoveRef = useRef(null); // Ref for the horizontal scroll movement
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
    parallaxX: 0,
    parallaxY: 0,
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".accretion-disk", {
        rotationY: 360,
        duration: 30,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".gravitational-lens-layer", {
        rotationZ: -360,
        duration: 30,
        repeat: -1,
        ease: "none",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: true,
        },
      });

      tl.to(scrollMoveRef.current, {
        scale: 0.5,
        duration: 0.3,
        ease: "power1.inOut",
      })
        .to(scrollMoveRef.current, {
          scale: 1.5, // Grows larger (adjust to 1 for original size)
          duration: 1, // Represents the remaining 50% (2nd to 3rd page)
          ease: "power1.inOut",
        })
        .to(scrollMoveRef.current, {
          scale: 2,
          translateY: "-60%",
          duration: 1,
          ease: "power1.inOut",
        });
    }, containerRef);

    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      setMousePos({
        x: x,
        y: y,
        parallaxX: (x - centerX) / 20,
        parallaxY: (y - centerY) / 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      ctx.revert();
    };
  }, []);

  const layers = Array.from({ length: 1 }, (_, i) => (i - 5) * 0.5);

  return (
    <div className="sandbox-root" ref={containerRef}>
      <div className="scanning-grid"></div>
      <div className="orbital-ring inner"></div>
      <div className="orbital-ring outer"></div>

      {/* This wrapper handles the Scroll movement */}
      <div className="scroll-move-wrapper" ref={scrollMoveRef}>
        {/* This wrapper handles the Mouse Parallax */}
        <div
          className="black-hole-wrapper"
          style={{
            transform: `translate3d(${mousePos.parallaxX}px, ${mousePos.parallaxY}px, 0)`,
          }}
        >
          {layers.map((z) => (
            <div
              key={`back-${z}`}
              className="accretion-disk back"
              style={{ transform: `rotateX(80deg) translateZ(${z}px)` }}
            />
          ))}

          <div id="event-horizon"></div>

          {layers.map((z) => (
            <div
              key={`front-${z}`}
              className="accretion-disk front"
              style={{ transform: `rotateX(80deg) translateZ(${z}px)` }}
            />
          ))}

          {layers.map((z) => (
            <div
              key={`lens-${z}`}
              className="gravitational-lens-layer"
              style={{ transform: `translateZ(${z * 2}px)` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlackHole;
