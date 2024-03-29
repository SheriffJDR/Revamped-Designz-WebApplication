import React, {useState,useEffect} from 'react'
import styles from './ImageSlider.module.css'

function ImageSlider({Imageset}) {

  //Set of Images to be displayed in Featured carousel
  const ImageSet = Imageset;

  //State variables to track the images in the carousel
  const [currentImage,setCurrentImage] = useState(0);

  //Increments counter which tracks the current featured image.
  const getNextImage = () => {
    currentImage == ImageSet.length - 1
      ? setCurrentImage(0)
      : setCurrentImage((currentImage) => currentImage + 1);
  }

  //Decrements counter which tracks the current featured image.
  const getPreviousImage = () =>{
    currentImage == 0
      ? setCurrentImage(ImageSet.length - 1)
      : setCurrentImage((currentImage) => currentImage - 1);
  }
  
  const jumpToImage = (index) =>{
    (index >= 0 && index <= ImageSet.length - 1) 
      ? setCurrentImage(index)
      : setCurrentImage(0)
  }

//useEffect for changing current image periodically
  useEffect(() =>{
    const interval = setInterval(getNextImage,5000);
    return()=>{
      clearInterval(interval);
    }
  },[currentImage])

    //Style for images 
    const imagestyle = {
      width : '100%',
      height: '100%',
      borderRadius: '15px',
      backgroundPosition: 'center',
      backgroundSize:'cover',
      backgroundImage : `url(${ImageSet[currentImage].url})`,
      animation: `100ms ease-in forwards ${styles.fadeIn}`,
      opacity : '0%'
    }
  
  return (
    
    <div className={styles.featuredCarousel}>
      <div className={styles.carouselContainer}>
        <div key={currentImage} style={imagestyle}>
          <div className={styles.navigationArrows}>
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
          </div>
        
      </div>
      <div className={styles.ellipseContainer}>
        {
          ImageSet.map((image,index) => {
            return (
              <div key = {index} className = {`${styles.carouselEllipse} ${currentImage == index ? styles.selected : styles.unselected}` }  onClick = {() => jumpToImage(index)}></div>
            )
          })
        }
        
      </div>
    </div>
  );
}

export default ImageSlider