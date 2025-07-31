import React, { useState, useEffect } from 'react';

const SliderWithCards = () => {
  const sliderImages = [
    'https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg',
    'https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg',
  ];

  const allCardImages = [
    'https://images.pexels.com/photos/1250260/pexels-photo-1250260.jpeg',
    'https://images.pexels.com/photos/68507/spring-flowers-flowers-collage-floral-68507.jpeg',
    'https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg',
    'https://images.pexels.com/photos/287229/pexels-photo-287229.jpeg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledCards, setShuffledCards] = useState([...allCardImages]);
  const [fadeCards, setFadeCards] = useState(false);

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
      setFadeCards(true);
      setTimeout(() => {
        setShuffledCards(shuffleArray(allCardImages));
        setFadeCards(false);
      }, 400);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex flex-col md:flex-row gap-4 p-4">

      {/* Left side: Slider + Description */}
      <div className="w-full md:w-[60%] flex flex-col gap-4">
        {/* Slider */}
        <div className="w-full h-[80%] overflow-hidden rounded-xl relative">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {sliderImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Slide ${idx + 1}`}
                className="w-full h-full object-cover flex-shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Description directly under slider */}
        <div className=" shadow-md rounded-lg p-1 text-slate-900 bg-slate-300 space-x-1 text-center space-y-2">
          <div className="text-base md:text-lg leading-relaxed">
            Your one-stop destination for a wide range of local and branded products. 
            <p className='hidden md:grid '>Explore everything from fresh produce to lifestyle essentials, all under one roof.</p>
            <button className="inline-block bg-white hover:bg-gray-500 text-gray-800 font-semibold py-1 px-3 rounded-full shadow transition">
            View on Map
          </button>
          </div>
          
        </div>
      </div>

      {/* Right side: Cards */}
     <div className="hidden md:grid w-full md:w-[40%] grid-cols-2 gap-4">
  {shuffledCards.map((src, index) => (
    <div
      key={index}
      className="bg-white shadow-md rounded-lg overflow-hidden"
    >
      <img
        src={src}
        alt={`Card ${index + 1}`}
        className="w-full h-full object-cover"
        style={{
          aspectRatio: '1 / 1',
          // transition: 'opacity 0.4s',
          // opacity: fadeCards ? 0 : 1,
        }}
      />
    </div>
  ))}
</div>

    </div>
  );
};

export default SliderWithCards;
