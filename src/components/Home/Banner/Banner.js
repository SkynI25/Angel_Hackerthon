import React from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './Banner.scss';
import Banner1 from '../../../assets/banner_1.jpg';
import Banner2 from '../../../assets/banner_2.jpg';

const Banner = () => {
  return (
    <section className="banner-container">
      <CarouselProvider
        naturalSlideWidth={1772}
        naturalSlideHeight={424}
        orientation="horizontal"
        totalSlides={3}
        isPlaying={true}
        interval={5000}
      >
        <Slider>
          <Slide index={0}>
            <div style={{ width: '100%', height: '100%' }}>
              <img src={Banner1} alt="banner" style={{ width: '100%' }} />
            </div>
          </Slide>
          <Slide index={1}>
            <div style={{ width: '100%', height: '100%' }}>
              <img src={Banner2} alt="banner" style={{ width: '100%' }} />
            </div>
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
