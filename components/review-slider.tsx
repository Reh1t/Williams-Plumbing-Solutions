import React, { useState, useEffect } from 'react';

const images = [
    '/Review2.png',
    '/Review1.png',
    '/Review3.png',
];

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="overflow-hidden relative w-full h-64 rounded-lg ">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1 000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            alt={`Slide ${index}`}
          />
        ))}
      </div>
      <button
        onClick={goToPrevious}
        className="absolute cursor-pointer top-1/2 left-0 transform -translate-y-1/2 bg-transparent mq450:bg-black mq450:bg-opacity-50 mq450:text-white text-black px-4 mq450:px-8 py-2 "
      >
        &#10094;
      </button>
      <button
        onClick={goToNext}
        className="absolute cursor-pointer top-1/2 right-0 transform -translate-y-1/2 bg-transparent mq450:bg-black mq450:bg-opacity-50 mq450:text-white text-black px-4 mq450:px-8 py-2 "
      >
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
