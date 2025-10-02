import { useEffect, useState } from 'react';
import '../styles/Cursor.css'; // External CSS for styling

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      className="inversion-cursor"
      style={{
        transform: `translate(${position.x - 50}px, ${position.y - 50}px)`
      }}
    />
  );
};

export default Cursor;
