import React,{useRef, forwardRef} from 'react'
import styles from './Slider.module.css'

// export default Slider
const Slider = forwardRef(function Slider({},ref)
{
  //React refs for scroll bar component to manipulated
  const slider  = useRef(null);
  const scrollBar = useRef(null);

  //max distance that can be moved by the scrollBar
  const MAX_SCROLL_DISTANCE = 77;

  //Refer the container that uses the slider component for slider navigation
  const container = ref;

  let isTouchingScrollBorder, isTouchingScrollBar =  false;
  let scrollPosition,previousPosition,oldPosition = 0;

  //Calculates the distance moved by the users touch
  const getRelativeDistance = (startingPosition, finalPosition) => {
    return (finalPosition - startingPosition);
  }

  const scrollBarHandler = () => {
    isTouchingScrollBar = true;
  }

  const touchStartHandler = (e) => {
    isTouchingScrollBorder = true;
    previousPosition = e.touches[0].clientX;
  }

  //Ensures the distance moved on the carousel(conatiner) is proportional to the distance moved by the sliderl
  const slideContainer  = (distance,size) => {
    
    if(distance == 0){
      container.current.scrollLeft = 0;
      return;
    }
    container.current.style.scrollBehavior = `auto`;
    container.current.scrollLeft =  container.current.scrollWidth * (distance / size);
    // container.current.style.scrollBehavior = `smooth`;
  }

  //Translates the scroll bar when the user drags on the scroll bar
  const touchMoveHandler = (e) => {
  
    if(isTouchingScrollBorder && isTouchingScrollBar){

      let store = getRelativeDistance(previousPosition, e.touches[0].clientX);
      scrollPosition = store + oldPosition;

      if(scrollPosition <= 0){

        slider.current.style.transform = `translate(0px)`;
        slideContainer(0,scrollBar.current.clientWidth);
        scrollPosition = 0;
        return;
      }
      if(scrollPosition >= MAX_SCROLL_DISTANCE){

        slider.current.style.transform = `translate(${MAX_SCROLL_DISTANCE}px)`;
        slideContainer(MAX_SCROLL_DISTANCE,scrollBar.current.clientWidth);
        scrollPosition = MAX_SCROLL_DISTANCE;
        return;
      }
    
      slider.current.style.transform = `translate(${scrollPosition}px)`;
      slideContainer(scrollPosition,scrollBar.current.clientWidth);
    }
  }

  const touchEndHandler = () => {
    isTouchingScrollBar,isTouchingScrollBorder = false;
    oldPosition = scrollPosition;
  }

  return (
    <div className={styles.sliderContainer}>
      <div
        ref={scrollBar}
        className={styles.scrollBorder}
        onTouchStart={touchStartHandler}
        onTouchMove={touchMoveHandler}
        onTouchEnd={touchEndHandler}
      >
        <div ref={slider} onTouchStart={scrollBarHandler}  className={styles.scrollBar}></div>
      </div>
    </div>
  );
})

export default Slider;