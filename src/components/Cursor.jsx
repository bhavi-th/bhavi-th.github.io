import { useEffect, useState } from "react";
import "../styles/Cursor.css"; // External CSS for styling

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 150); // Reset after 250ms
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div
      className={`inversion-cursor ${clicked ? "shrink" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default Cursor;
