import React from 'react'
import styles from './MoveToTopBtn.module.css'

export default function MoveToTopBtn() {

    //Scrolls back to the top of the page
    const moveToTop = () => {
        window.scrollTo({
            top: 0,
            left:0,
            behavior:'smooth',
        })
    }
    
  return (
    <div className = {styles.moveToTopBtn} onClick = {moveToTop}>
      <svg className = {styles.moveToTopArrow}
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
      >
        <path
          d="M8.4375 17.7656L14.8594 11.2969L21.2812 17.7656L20.3438 18.7031L14.8594 13.1719L9.375 18.7031L8.4375 17.7656Z"
          fill="white"
        />
      </svg>
    </div>
  );
}