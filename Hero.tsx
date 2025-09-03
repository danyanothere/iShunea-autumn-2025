"use client";

import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {
  const handleScroll = () => {
   
  }

  return (
    <div className="hero">
      <div className="flex-1 padding-x">
        <h1 className="hero__title">
          Find, book, rent a car—quick and super easy!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="custom-btn mt-10"
          handleClick={handleScroll}
        />
      </div>
      
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="Modern car"
            width={700}
            height={500}/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
