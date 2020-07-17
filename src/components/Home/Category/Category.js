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
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (function () {
      getCategories()
        .then((res) => {
          if (!res.success || !res.data) {
            throw new Error(res.errors);
          }
          setCategories(res.data);
        })
        .catch((err) => console.log(err));
    })();
  }, []);

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
      >
        <Slider>
          {categories.map((i, idx) => (
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
