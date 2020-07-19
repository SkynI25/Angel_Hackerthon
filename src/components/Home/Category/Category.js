import React, { useState, useEffect } from 'react';
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
import { getCategories } from '../../../lib/api';

const Category = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (function () {
      getCategories()
        .then((res) => {
          if (!res.success || !res.data) {
            throw new Error(res.errors);
          }
          setCategories(res.data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    })();
  }, []);

  return (
    <section className="category-container">
      <span className="bg"></span>
      <h2>어느 지역의 맛집을 만나볼까요?</h2>
      <CarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={100}
        orientation="horizontal"
        totalSlides={9}
        visibleSlides={5}
        dragStep={5}
        step={5}
        isPlaying={true}
        delay={5000}
      >
        <Slider>
          {isLoading
            ? Array(9)
                .fill(null)
                .map((i, idx) => (
                  <Slide tabIndex={idx} key={idx}>
                    <div className="category-item">
                      <div className="link skeleton"></div>
                    </div>
                  </Slide>
                ))
            : categories.map((i, idx) => (
                <Slide tabIndex={idx} key={i.id}>
                  <div className="category-item">
                    <Link className="link" to={`/category/${i.id}`}>
                      <div className="img">
                        <img src={i.img} alt={i.category} />
                      </div>
                      <span>{i.category}</span>
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
