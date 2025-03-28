import { useState, useEffect } from 'react';

interface CustomCursorProps {
  isHovering?: boolean;
}

const CustomCursor = ({ isHovering = false }: CustomCursorProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Mouse tracking handlers
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setTimeout(() => {
        setDotPosition({ x: e.clientX, y: e.clientY });
      }, 10);
    };

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div 
        className={`custom-cursor ${isHovering ? 'hover' : ''}`}
        style={{ 
          transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
        }}
      />
      <div 
        className={`custom-cursor-dot ${isHovering ? 'hover' : ''}`}
        style={{ 
          transform: `translate(${dotPosition.x - 2}px, ${dotPosition.y - 2}px)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
