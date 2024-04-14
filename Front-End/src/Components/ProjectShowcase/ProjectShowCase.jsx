import React, {useRef} from 'react'
import { Link } from 'react-router-dom';
import styles from './ProjectShowCase.module.css'
import SwipeToScroll from '../SwipeToSroll';
// import Slider from '../Slider';

function ProjectShowCase({projects}) {

  //Referces the container that hold the images for the projects
  const container = useRef(0);

  let isTouching = false;
  let isMouseDown = false;
  let containerPosition = 0;
  let previousPosition = 0;

  //Calculates distance moved by a users finger on mouse
  const getRelativeDistance = (startingLocation, finalLocation) =>{
    return (finalLocation - startingLocation);
  }

  //These two functions ensure the container can only be dragged when the mouse button is held down.
  const mouseDownHandler = (e) => {
    isMouseDown = true;
    previousPosition = e.clientX;
  }

  //Moves carousel to show hidden content.
  const mouseUpHandler = () => {
    isMouseDown = false;
    containerPosition = container.current.scrollLeft;
  }

  const mouseMoveHandler = (e) => {
    if(isMouseDown){
      container.current.scrollLeft = containerPosition - getRelativeDistance(previousPosition,e.clientX);
    }
  }

  //Handles accessibility for touch screen devices
  const touchStartHandler = (e) => {
    isTouching = true;
    previousPosition = e.touches[0].clientX;
  }

  const touchEndHandler = () => {
    isTouching = false;
    containerPosition = container.current.scrollLeft;
  }

  const touchMoveHandler = (e) => {
    if(isTouching){
      container.current.scrollLeft = containerPosition - getRelativeDistance(previousPosition,e.touches[0].clientX);
    }
  }

  return (
    <section className={styles.projectShowcaseSection}>
      <div className={styles.projectShowcaseHeading}>
        <h2>Projects</h2>
      </div>
      <div
        ref={container}
        className={styles.imageWrapper}
        onMouseDown={mouseDownHandler}
        onMouseMove={mouseMoveHandler}
        onMouseUp={mouseUpHandler}
        onTouchStart={touchStartHandler}
        onTouchMove={touchMoveHandler}
        onTouchEnd={touchEndHandler}
      >
        {projects.map((project) => {
          return (
            <div key={project.projectId} className={styles.imageContainer}>
              <div className={styles.projectInfo}>
                <h1>Project {project.projectId}</h1>
                <h3>Here's a litte one liner about the project.</h3>
                <Link to = {`/Projects/${project.projectId}`}><button>Learn More</button></Link>
              </div>
              <img src={project.src} alt={project.ImageAlt}></img>
              
            </div>
          );
        })}
      </div>
      <div className={styles.sliderContainer}>
      {/* {<Slider ref = {container}/>} */}
      <SwipeToScroll/>
      </div>
    </section>
  );
}
export default ProjectShowCase