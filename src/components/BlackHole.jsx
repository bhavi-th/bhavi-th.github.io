import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "../styles/components/BlackHole.css";

const BlackHole = () => {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);

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
    }, containerRef);

    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const distance = Math.sqrt(
        Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2),
      );
      const vmin = Math.min(window.innerWidth, window.innerHeight) / 100;
      const horizonRadius = 12.5 * vmin;
      const maxDist = Math.max(centerX, centerY);

      let newScale = (distance - horizonRadius) / (maxDist - horizonRadius);
      newScale = Math.max(0, Math.min(1.5, newScale * 1.5));

      setScale(newScale);

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

  const layers = Array.from({ length: 11 }, (_, i) => (i - 5) * 0.5);

  return (
    <>
      <div
        className="star-field"
        style={{
          transform: `translate(${mousePos.parallaxX * -0.5}px, ${mousePos.parallaxY * -0.5}px)`,
        }}
      />

      <div
        className="mouse-photon"
        style={{
          left: `${mousePos.x - 10}px`,
          top: `${mousePos.y - 10}px`,
          transform: `translate(-50%, -50%) scale(${scale})`,
          opacity: scale > 0.1 ? 1 : 0,
        }}
      />

      <div className="sandbox-root">
        <div
          className="black-hole-wrapper"
          ref={containerRef}
          style={{
            transform: `translate(${mousePos.parallaxX}px, ${mousePos.parallaxY}px)`,
          }}
        >
          {layers.map((z) => (
            <div
              key={`back-${z}`}
              className="accretion-disk back"
              style={{
                transform: `rotateX(80deg) translateZ(${z}px)`,
                opacity: 0.2,
              }}
            />
          ))}

          <div id="event-horizon"></div>

          {layers.map((z) => (
            <div
              key={`front-${z}`}
              className="accretion-disk front"
              style={{
                transform: `rotateX(80deg) translateZ(${z}px)`,
                opacity: 0.2,
              }}
            />
          ))}

          {layers.map((z) => (
            <div
              key={`lens-${z}`}
              className="gravitational-lens-layer"
              style={{
                transform: `translateZ(${z * 2}px)`,
                opacity: 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BlackHole;
