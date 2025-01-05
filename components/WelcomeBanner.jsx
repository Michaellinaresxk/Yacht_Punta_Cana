import React from 'react';
import Image from 'next/image';
export const WelcomeBanner = () => {
  return (
    <section className='banner'>
      <div className='image-container'>
        <Image
          src='https://images.unsplash.com/photo-1619726578880-0b9897eea5c6'
          alt='Luxury yacht in crystal waters'
          fill
          priority
          className='banner-image'
        />
        <div className='overlay'></div>
      </div>
      <div className='content'>
        <div className='decorative-line'>
          <span className='line'></span>
          <span className='subtitle'>Luxury Yacht Experience</span>
          <span className='line'></span>
        </div>

        <h1 className='title'>
          Welcome to <span className='highlight'>Yacht Punta Cana</span>
          Discover Paradise in Punta Cana from the Deck of a Luxury Yacht
        </h1>

        <p className='description'>
          Where luxury meets adventure on the crystal-clear waters of the
          Dominican Republic. With over 10 years of experience, we've mastered
          the art of creating unforgettable maritime experiences. Our commitment
          to excellence ensures every voyage exceeds expectations, from intimate
          gatherings to grand celebrations.
        </p>

        <button className='cta-button'>Explore Our Fleet</button>
      </div>
    </section>
  );
};
