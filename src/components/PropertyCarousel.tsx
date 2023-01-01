import React, { useState } from 'react';

interface Props {
  images: string[];
}

const Carousel: React.FC<Props> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button onClick={handlePrevClick} style={{ position: 'relative', top: '50%', transform: 'translateY(-50%)' }}>
        &lt;
      </button>
      <img src={images[currentIndex]} alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />
      <button onClick={handleNextClick} style={{ position: 'relative', top: '50%', transform: 'translateY(-50%)' }}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
