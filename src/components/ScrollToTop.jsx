// ScrollToTop.jsx
import { useEffect, useState } from 'react';
import { FaAngleUp } from 'react-icons/fa';


const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Animação suave
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={handleClick}
      style={{
        display: isVisible ? 'block' : 'none',
      }}
    >
     <FaAngleUp className="top-icon"/>
    </button>
  );
};

export default ScrollToTop;