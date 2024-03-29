import React,{useRef} from 'react'
import style from './BestSellers.module.css'

function BestSeller({bestSellers}) {

  const bestSeller = bestSellers;

  const imageSlider = useRef(null);

  let previousPosition = 0; 
  let sliderPosition = 0;
  let isMouseDown = false;

  //Calculates the distanced dragged on user input
  const getRelativeDistance = (startingLocation, finalLocation) =>{
    return (finalLocation - startingLocation);
  }

  //Ensures the mouse button is held down
  const mouseDownHandler = (e) => {
    isMouseDown = true;
    previousPosition = e.clientX;
  }

  //Scrolls the image to the left on the condition that the mouse is held down
  const mouseMoveHandler = (e) => {
    
    if(isMouseDown)
    {
      imageSlider.current.scrollLeft = sliderPosition - getRelativeDistance(previousPosition, e.clientX);
    }
  }

  //Detects when the mouse button is released and stores the current scrollLeft value 
  const mouseUpHandler = () => {
    isMouseDown = false;
    sliderPosition  = imageSlider.current.scrollLeft;
  }

  //Same scroll functionality but for touch devices

  const touchStartHandler = (e) => {
    isMouseDown = true;
    previousPosition = e.touches[0].clientX;
  }

  const touchMoveHandler = (e) => {

    if(isMouseDown){
      imageSlider.current.scrollLeft = sliderPosition - getRelativeDistance(previousPosition, e.touches[0].clientX)
    }
  }

  const touchEndHandler = () => {
    isMouseDown = false;
    sliderPosition = imageSlider.current.scrollLeft;
  }

  return (
    <section className={style.best_seller_section}>
      <div className={style.best_seller_heading}>
        <hr className={style.hr1}></hr>
        <h2>Best Sellers</h2>
        <hr className={style.hr2}></hr>
      </div>
      <div
        ref={imageSlider}
        className={style.image_container}
        onMouseDown = {mouseDownHandler}
        onMouseMove = {mouseMoveHandler}
        onMouseUp = {mouseUpHandler}
        onTouchStart = {touchStartHandler}
        onTouchMove = {touchMoveHandler}
        onTouchEnd = {touchEndHandler}
      >
        {bestSeller.map((bestSellers) => {
          return (
            <div className={style.image_div} key={bestSellers.productId}>
              <img src={bestSellers.url} alt={bestSellers.alt} />
              <div className={style.discoverGraphic}>
                <h2>Discover.</h2>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default BestSeller