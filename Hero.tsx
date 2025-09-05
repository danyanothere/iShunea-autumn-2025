"use client";

import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="hero">
      <div className="flex-1 padding-x">
        <h1 className="hero__title">
          Найди, забронируй и наслаждайся поездкой!
        </h1>

        <p className="hero__subtitle">
          Все автомобили на одной платформе — быстро, удобно и надежно!
        </p>

        <CustomButton
          title="Поиск автомобиля"
          containerStyles="custom-btn mt-10"
          handleClick={handleScroll}
        />
      </div>
      
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="Современный автомобиль"
            width={700}
            height={500}
            priority/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
