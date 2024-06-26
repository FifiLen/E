'use client'
import React, { useState } from 'react';

const Place = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    { src: '/assets/room18.jpeg', alt: 'Image 18' },
    { src: '/assets/room.jpg', alt: 'Image 1' },
    { src: '/assets/room2.jpg', alt: 'Image 2' },
    { src: '/assets/room16.jpeg', alt: 'Image 16' },
    { src: '/assets/room12.jpg', alt: 'Image 12' },
    { src: '/assets/room14.jpg', alt: 'Image 14' },
    { src: '/assets/room15.jpeg', alt: 'Image 15' },
    { src: '/assets/room17.jpeg', alt: 'Image 17' },

    { src: '/assets/room3.jpg', alt: 'Image 3' },
    { src: '/assets/room10.jpg', alt: 'Image 4' },
    { src: '/assets/room11.jpg', alt: 'Image 5' },
    { src: '/assets/room19.jpeg', alt: 'Image 19' },
    { src: '/assets/room6.jpeg', alt: 'Image 6' },
    { src: '/assets/room8.jpg', alt: 'Image 7' },
    { src: '/assets/room9.jpg', alt: 'Image 8' },
    { src: '/assets/room20.jpeg', alt: 'Image 20' },
    { src: '/assets/room4.jpg', alt: 'Image 9' },
    
    { src: '/assets/room13.jpg', alt: 'Image 13' },
    


  ];

  const openImage = (index) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    setSelectedImage((prevIndex) => {
      if (direction === 'next') {
        return prevIndex < images.length - 1 ? prevIndex + 1 : 0;
      } else if (direction === 'prev') {
        return prevIndex > 0 ? prevIndex - 1 : images.length - 1;
      }
    });
  };

  return (
    <section className="mx-auto max-w-[1260px] px-4 sm:px-8 md:px-12 lg:px-16 mt-24 mb-32">
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 text-center ">Nasze miejsce</h3>
      <p className=' text-zinc-600 italic text-center mb-8'>(Kliknij na zdjęcie aby powiększyć)</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-5 mb-6">
        {images.map((image, index) => (
          <div key={index} onClick={() => openImage(index)} className="relative pb-[60%] lg:pb-[70%] cursor-pointer rounded-lg overflow-hidden shadow-md">
            <img src={image.src} alt={image.alt} className="absolute inset-0 w-full h-full object-cover rounded-lg" />
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-50" onClick={closeImage}></div>
          <div className="relative z-10 p-4 bg-white rounded-lg max-w-screen-lg">
            <img src={images[selectedImage].src} alt={images[selectedImage].alt} className="w-full rounded-lg max-h-[650px] object-contain" />
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-5xl focus:outline-none transition-colors hover:text-black" onClick={() => navigateImage('prev')}>
              &lt;
            </button>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-5xl focus:outline-none transition-colors hover:text-black" onClick={() => navigateImage('next')}>
              &gt;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Place;
