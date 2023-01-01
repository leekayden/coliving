import React, { useState } from 'react';
import "./Carousel.css";

interface CarouselProps {
  items: string[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreviousClick = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  return (
    <div className="carousel-container">
      <button onClick={handlePreviousClick}>Prev</button>
      <div className="carousel-item" style={{ transition: 'all 0.5s ease' }}>
        {items[currentIndex]}
      </div>
      <button onClick={handleNextClick}>Next</button>
      <div className="dot-navigation">
        {items.map((item, index) => (
          <div
            key={item}
            className={index === currentIndex ? 'active-dot' : 'dot'}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
