import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './Category.scss';
import { Link } from 'react-router-dom';

const categories = [
  { text: '카테고리' },
  { text: '카테고리' },
  { text: '카테고리' },
  { text: '카테고리' },
  { text: '카테고리' },
  { text: '카테고리' },
  { text: '카테고리' },
];

const Category = () => {
  return (
    <section className="category-container">
      <h2>어떤 메뉴를 찾으시나요?</h2>
      <CarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={100}
        orientation="horizontal"
        totalSlides={9}
        visibleSlides={5}
        dragStep={5}
        step={5}
        isPlaying={true}
        interval={3000}
      >
        <Slider>
          {categories.map((i, idx) => (
            <Slide tabIndex={idx} key={idx}>
              <div className="category-item">
                <Link className="link" to={`/category/${idx}`}>
                  <div className="img">
                    <span></span>
                  </div>
                  <span>{i.text}</span>
                </Link>
              </div>
            </Slide>
          ))}
        </Slider>
        <ButtonBack className="back-btn">&#xE000;</ButtonBack>
        <ButtonNext className="next-btn">&#xE001;</ButtonNext>
      </CarouselProvider>
    </section>
  );
};

export default Category;
