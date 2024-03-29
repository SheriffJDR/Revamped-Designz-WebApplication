import React from 'react'
import styles from './RevampedCopywrite.module.css'
function RevampedCopywrite({color}) {

  const logoStyle = {
    margin: `0 auto`,
    opacity: '0%',
    fontSize: '16px',
    color: `${color}`,
    animation: `1s ease-in 1.5s forwards ${styles.fadeIn}`
  }

  return (
    <div className={styles.copywriteTextContainer}>
        <h2 className={styles.copywriteText} style={logoStyle}>Revamped Designz<span>©</span></h2>
    </div>
  )
}

export default RevampedCopywrite