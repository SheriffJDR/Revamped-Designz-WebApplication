import React ,{useState,useEffect,useRef}from 'react'
import styles from './ProductGallery.module.css'

export default function ProductGallery({productImages}) {

  //useState to track current image being viewed.
  const [currentImage, setCurrentImage] = useState(0);

  const imageContainer = useRef(null);
  const container = useRef(null);

  //Spacing of the auxillary images in the product image gallery.
  const imageSliderSpacing = 10;

  //Variables for hadling the scroll of product image gallery section.
  let previousPosition = 0;
  let containerPosition = 0;
  let isMouseDown = false;

  useEffect(() =>{
    scroll(currentImage);
  },[currentImage])

  const MainImageStyle = {
      //At 0.7 of the original size
      width: '230.3px',
      height: '154px',
      backgroundPosition: 'center',
      backgroundSize : 'cover',
      backgroundImage : `url(${productImages[currentImage].url}) `,
      margin:'3rem 0rem 0rem 0rem',
  }

  //scroll the image gallery carousel to ensure that the current image can seen.
  const scroll = (currentIndex) =>{

    let distance = imageContainer.current.offsetWidth * (currentIndex + 1);

    //Checks if the current image overflows the container and scrolls the container to ensure that it can be seen.
    if( distance >= container.current.offsetWidth){
      container.current.scrollLeft = (distance - container.current.offsetWidth) + imageSliderSpacing * currentIndex + 1;
      containerPosition = container.current.scrollLeft;
      return;
    }

    //Scrolls container back to beginning if the current image is one that was originally not in the overflow content.
    container.current.scrollLeft = 0;
    containerPosition = container.current.scrollLeft;

  }

  //Calculates distance moved while the mouse is dragged.
  const getRelativeDistance = (startingLocation ,finalLocation) => {
    return (finalLocation - startingLocation);
  }

  //Mouse drag navigation
  const mouseDownHandler = (e)=>{
    isMouseDown = true;
    previousPosition = e.clientX;
    container.current.style.scrollBehavior = `auto`;
  }

  const mouseUpHandler = ()=>{
    isMouseDown = false;
    containerPosition = container.current.scrollLeft;
    container.current.style.scrollBehavior = `smooth`;
  }

  const mouseMoveHandler = (e)=>{
    if(isMouseDown){
      container.current.scrollLeft = containerPosition - getRelativeDistance(previousPosition, e.clientX)
    }
  }

  //Gallery arrow navigation
  const getNextImage = () => {
    currentImage + 1 >= productImages.length
      ? setCurrentImage(0)
      : setCurrentImage((currentImage) => currentImage + 1);
  }

  const getPreviousImage = () =>{
    currentImage - 1 < 0
      ? setCurrentImage(productImages.length - 1)
      : setCurrentImage((currentImage) => currentImage - 1);
  }

  const getImageByIndex = (index) =>{

    if(index >= productImages.length){
      setCurrentImage(productImages.length - 1);
    }
    setCurrentImage(index);
  }

  return (
    <div className={styles.container}>
      <div className={styles.currentImageContainer}>
        <div className={styles.currentImage} style={MainImageStyle}></div>
      </div>
      <div className={styles.arrowNavigation}>
        <svg
          onClick={getPreviousImage}
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path
            d="M17.7656 21.5625L11.2969 15.1406L17.7656 8.71875L18.7031 9.65625L13.1719 15.1406L18.7031 20.625L17.7656 21.5625Z"
            fill="white"
          />
        </svg>
        <svg
          onClick={getNextImage}
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path
            d="M12.2344 8.4375L18.7031 14.8594L12.2344 21.2812L11.2969 20.3438L16.8281 14.8594L11.2969 9.375L12.2344 8.4375Z"
            fill="white"
          />
        </svg>
      </div>
      <div
        ref={container}
        className={styles.imageSet}
        onMouseDown={mouseDownHandler}
        onMouseMove={mouseMoveHandler}
        onMouseUp={mouseUpHandler}
      >
        {productImages.map((image, index) => {
          const ActiveImageStyle = {
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url(${image.url})`,
            borderRadius: "10px",
            border: "2px solid var(--brand-blue)",
          };
          const ImageStyle = {
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url(${image.url})`,
            borderRadius: "10px",
            border: "2px solid #5F5B5B",
          };

          if (index == currentImage) {
            return (
              <div
                key={index}
                ref={imageContainer}
                className={styles.otherImage}
                style={ActiveImageStyle}
                onClick={() => getImageByIndex(index)}
                onTouchStart={() => getImageByIndex(index)}
              ></div>
            );
          } else {
            return (
              <div
                key={index}
                className={styles.otherImage}
                style={ImageStyle}
                onClick={() => getImageByIndex(index)}
                onTouchStart={() => getImageByIndex(index)}
              ></div>
            );
          }
        })}
      </div>
    </div>
  );
}