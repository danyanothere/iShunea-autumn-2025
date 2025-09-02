"use client";

import Image from 'next/image';
import CustomButton from './CustomButton';

 
const Hero = () => {
    const handleScroll = () => {

    }
   return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
            Твое авто ждет: найди, забронируй, наслаждайся поездкой!
          </h1>

           <p className="hero__subtitle">
            Забронируй и рули: весь процесс за пару минут.
          </p>

          <CustomButton 
           title='Смотреть авто'
           containerStyles="bg-primary-blue text-white rounded-full mt-10"
           handleClick={handleScroll} btnType={'button'}          />
        </div>
        
          <div className='hero__image-container'>
        <div className='hero__image'>
         <Image 
              src='/hero.png' 
              alt='hero'
              width={600}  // Фиксированная ширина
              height={400} // Фиксированная высота
              className='object-contain max-w-full max-h-full'
              priority
              style={{
                width: 'auto',
                height: 'auto',
                maxWidth: '600px',
                maxHeight: '400px'
              }}
            />
          </div>
        </div>
     </div>
   )
}
 
export default Hero