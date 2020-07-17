import React from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './Banner.scss';

const Banner = () => {
  return (
    <section className="banner-container">
      <CarouselProvider
        naturalSlideWidth={300}
        naturalSlideHeight={80}
        orientation="horizontal"
        totalSlides={3}
        isPlaying={true}
        interval={5000}
      >
        <Slider>
          <Slide index={0}>
            <div
              style={{ width: '100%', height: '100%', backgroundColor: 'red' }}
            ></div>
          </Slide>
          <Slide index={1}>
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'orange',
              }}
            ></div>
          </Slide>
          <Slide index={2}>
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'yellow',
              }}
            ></div>
          </Slide>
        </Slider>
      </CarouselProvider>
    </section>
  );
};

export default Banner;
