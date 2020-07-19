import React from 'react';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './Banner.scss';
import Banner1 from '../../../assets/banner_1.jpg';
import Banner2 from '../../../assets/banner_2.jpg';
import Banner3 from '../../../assets/banner_3.jpeg';
import Banner4 from '../../../assets/banner_4.jpeg';
import Banner5 from '../../../assets/banner_5.jpeg';

const Banner = () => {
  return (
    <section className="banner-container">
      <CarouselProvider
        naturalSlideWidth={1772}
        naturalSlideHeight={424}
        orientation="horizontal"
        totalSlides={5}
        isPlaying={true}
        interval={5000}
      >
        <Slider>
          <Slide index={0}>
            <div style={{ width: '100%', height: '100%' }}>
              <img src={Banner3} alt="banner" style={{ width: '100%' }} />
            </div>
          </Slide>
          <Slide index={1}>
            <div style={{ width: '100%', height: '100%' }}>
              <img src={Banner4} alt="banner" style={{ width: '100%' }} />
            </div>
          </Slide>
          <Slide index={2}>
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'yellow',
              }}
            >
              <img src={Banner5} alt="banner" style={{ width: '100%' }} />
            </div>
          </Slide>
          <Slide index={3}>
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'yellow',
              }}
            >
              <img src={Banner1} alt="banner" style={{ width: '100%' }} />
            </div>
          </Slide>
          <Slide index={4}>
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'yellow',
              }}
            >
              <img src={Banner2} alt="banner" style={{ width: '100%' }} />
            </div>
          </Slide>
        </Slider>
        <DotGroup />
      </CarouselProvider>
    </section>
  );
};

export default Banner;
