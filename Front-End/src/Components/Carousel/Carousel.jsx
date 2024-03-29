import React, {useRef} from "react";
import ProductCard from '../ProductCard';
import style from './Carousel.module.css';
import Slider from "../Slider";

export default function Carousel({carouselItems,arrowNavigation,sliderNavigation,onSale}){
  
  //React Ref to arrivals carousel dom element so that the scrollLeft movement on mouse drag is smooth.
  const carousel = useRef(null);
  const leftArrow = useRef(null);
  const rightArrow = useRef(null);
  const firstItem  = useRef(null);

  //Carousel Item spacing
  const leftMargin = 6;

  //Variable to store if the mouse button is held down
  let isMouseDown = false;

  //Stores mouse position when mouse button is held down
  let previousPosition = 0;

  //Stores carousel position
  let carouselPosition = 0;

  //Calculate the distance the mouse cursor on the screen.
  const getRelativeDistance = (previousPosition_, currentPosition) => {
    return (currentPosition - previousPosition_);
  }

  //These two functions ensure the carousel can only be dragged when the mouse button is held down.
  const mouseDownHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    isMouseDown = true;
    previousPosition = e.clientX;
  }

  const mouseUpHandler = (e) => {
    //e.preventDefault();
    isMouseDown = false;
    carouselPosition = carousel.current.scrollLeft;
    carousel.current.classList.remove(style.drag);
  }

  //Moves carousel to show hidden content.
  const onMouseMoveHandler = (e) => {

    if(isMouseDown){

      //Adds auto scroll behaviour for carousel drag
      carousel.current.classList.add(style.drag);
      carousel.current.scrollLeft = carouselPosition - getRelativeDistance(previousPosition, e.clientX)
      
      // sliderNavigation 
      // ? sliderPosition = moveSlider(carousel.current.scrollLeft,77)
      // : null;

    }
  }

  //Moves to Next item in the carousel
  const nextItem = () => {

    leftArrow.current.classList.contains(style.null_arrow) 
      ? leftArrow.current.classList.remove(style.null_arrow)
      : leftArrow.current.classList.remove(style.null_arrow)

    carousel.current.scrollLeft == carousel.current.clientWidth
      ? rightArrow.current.classList.add(style.null_arrow)
      : rightArrow.current.classList.remove(style.null_arrow)

    //console.log(carousel.current.scrollLeft)
    carousel.current.scrollLeft += firstItem.current.offsetWidth + (leftMargin * 2);
    carouselPosition = carousel.current.scrollLeft;
  }

  //Moves to Previous item in the carousel
  const previousItem = () => {

    rightArrow.current.classList.contains(style.null_arrow) 
    ? rightArrow.current.classList.remove(style.null_arrow)
    : null 

    carousel.current.scrollLeft == 0
      ? leftArrow.current.classList.add(style.null_arrow)
      : leftArrow.current.classList.remove(style.null_arrow)

    carousel.current.scrollLeft -= firstItem.current.offsetWidth + leftMargin;
    carouselPosition = carousel.current.scrollLeft;
    
  }

  //Compatibility for devices with touch screens
  const touchStartHandler = (e) => {

    //e.preventDefault();
    isMouseDown = true;
    previousPosition = e.touches[0].clientX
  }

  const touchMoveHandler = (e) => {

    //Adds auto scroll behaviour for carousel drag
    carousel.current.classList.add(style.drag);
    //e.preventDefault();

    if(isMouseDown){

      carousel.current.scrollLeft = carouselPosition - getRelativeDistance(previousPosition, e.touches[0].clientX)
      
      // //Moves slider when the carousel is moved if slider navigation is enabled;
      // sliderNavigation 
      //     ? sliderPosition = moveSlider(carousel.current.scrollLeft,77)
      //     : null;
    }
  }

  const touchEndHandler = () => {

    //Removes auto scroll behaviour for carousel (reverts back to smooth sroll behaviour).
    carousel.current.classList.remove(style.drag);


    isMouseDown = false;
    carouselPosition = carousel.current.scrollLeft;
  }

  const moveSlider = (distance,size) => {
    return ((distance / carousel.scrollLeft) * size);
  }

  //Render function
  return (
    <div className={style.carousel}>
      <div
        className={style.arrivals_carousel}
        ref={carousel}
        onMouseDown={mouseDownHandler}
        onMouseMove={onMouseMoveHandler}
        onMouseUp={mouseUpHandler}
        onTouchStart={touchStartHandler}
        onTouchMove={touchMoveHandler}
        onTouchEnd={touchEndHandler}
      >
        {onSale //Renders Products cards with sale below them
          ? carouselItems.map((item, index) => {
              if (index == 0) {
                return (
                  <ProductCard
                    ref={firstItem}
                    key={index}
                    products={item}
                    spacing={0}
                    hasSale={true}
                  />
                );
              }
              return (
                <ProductCard
                  key={index}
                  products={item}
                  spacing={leftMargin}
                  hasSale={true}
                />
              );
            })
          : //Else renders normal product
            carouselItems.map((item, index) => {
              if (index == 0) {
                return (
                  <ProductCard
                    ref={firstItem}
                    key={index}
                    products={item}
                    spacing={0}
                  />
                );
              }
              return (
                <ProductCard
                  key={index}
                  products={item}
                  spacing={leftMargin}
                />
              );
            })}
      </div>
      <div className={style.navigation}>
        {arrowNavigation ? (
          <div className={style.carousel_arrow}>
            <svg
              className={style.left_arrow}
              ref={leftArrow}
              onClick={previousItem}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path d="M17.7656 21.5625L11.2969 15.1406L17.7656 8.71875L18.7031 9.65625L13.1719 15.1406L18.7031 20.625L17.7656 21.5625Z" />
            </svg>
            <svg
              className={style.right_arrow}
              ref={rightArrow}
              onClick={nextItem}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path d="M12.2344 8.4375L18.7031 14.8594L12.2344 21.2812L11.2969 20.3438L16.8281 14.8594L11.2969 9.375L12.2344 8.4375Z" />
            </svg>
          </div>
        ) : null}
        {sliderNavigation && (
          <Slider ref = {carousel}/>
        )}
      </div>
    </div>
  );
    
}
