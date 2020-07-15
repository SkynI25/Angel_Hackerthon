import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import './Category.scss'

const Category = () => {
  return (
    <div className="category-container">
      <h2>어떤 메뉴를 찾으시나요?</h2>
      <CarouselProvider
        naturalSlideWidth={125}
        naturalSlideHeight={100}
        orientation="horizontal"
        totalSlides={9}
        visibleSlides={4}
        dragStep={4}
        step={4}
      >
        <Slider>
          <Slide index={0}>
            <div style={{ width: '100%', height: '100%', backgroundColor: 'red' }}></div>
          </Slide>
          <Slide index={1}>
            <div style={{ width: '100%', height: '100%', backgroundColor: 'orange' }}></div>
          </Slide>
          <Slide index={2}>
            <div style={{ width: '100%', height: '100%', backgroundColor: 'yellow' }}></div>
          </Slide>
          <Slide index={3}>
            <div style={{ width: '100%', height: '100%', backgroundColor: 'green' }}></div>
          </Slide>
          <Slide index={4}>
            <div style={{ width: '100%', height: '100%', backgroundColor: 'blue' }}></div>
          </Slide>
          <Slide index={5}>
            <div style={{ width: '100%', height: '100%', backgroundColor: 'dodgerblue' }}></div>
          </Slide>
          <Slide index={6}>
            <div style={{ width: '100%', height: '100%', backgroundColor: 'purple' }}></div>
          </Slide>
          <Slide index={7}>
            <div style={{ width: '100%', height: '100%', backgroundColor: 'beige' }}></div>
          </Slide>
          <Slide index={8}>
            <div style={{ width: '100%', height: '100%', backgroundColor: 'grey' }}></div>
          </Slide>
        </Slider>
        <ButtonBack className="back-btn">&#xE000;</ButtonBack>
        <ButtonNext className="next-btn">&#xE001;</ButtonNext>
      </CarouselProvider>
    </div>
  )
}

export default Category
