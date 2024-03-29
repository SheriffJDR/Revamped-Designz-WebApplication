import React from 'react'
import {useRouteError,Link} from 'react-router-dom'
import styles from './ErrorPage.module.css'
import RevampedCopywrite from '../RevampedCopywrite'

export default function ErrorPage() {

  const error = useRouteError();
  console.error(error);
    
  return (
    <div className={styles.contentContainer}>
      <div className={styles.content}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="192"
          height="192"
          viewBox="0 0 192 192"
          fill="none"
        >
          <path
            d="M168.401 149.655L104.49 30.9675C99.96 22.5525 87.8924 22.5525 83.3587 30.9675L19.4512 149.655C18.4676 151.482 17.9745 153.532 18.02 155.607C18.0654 157.681 18.6479 159.708 19.7106 161.49C20.7733 163.272 22.2799 164.748 24.0832 165.774C25.8866 166.8 27.9252 167.341 30 167.344H157.834C159.91 167.344 161.951 166.806 163.757 165.781C165.563 164.756 167.072 163.281 168.137 161.498C169.202 159.716 169.786 157.687 169.832 155.611C169.879 153.536 169.386 151.483 168.401 149.655ZM93.9262 148.969C92.4428 148.969 90.9928 148.529 89.7594 147.705C88.5261 146.881 87.5648 145.709 86.9971 144.339C86.4294 142.968 86.2809 141.46 86.5703 140.006C86.8597 138.551 87.574 137.214 88.6229 136.165C89.6718 135.117 91.0082 134.402 92.463 134.113C93.9179 133.823 95.4259 133.972 96.7963 134.54C98.1668 135.107 99.3381 136.069 100.162 137.302C100.986 138.535 101.426 139.985 101.426 141.469C101.426 143.458 100.636 145.366 99.2295 146.772C97.823 148.179 95.9153 148.969 93.9262 148.969ZM102.071 73.5375L99.9187 119.288C99.9187 120.879 99.2866 122.405 98.1613 123.53C97.0361 124.655 95.51 125.288 93.9187 125.288C92.3274 125.288 90.8013 124.655 89.6761 123.53C88.5508 122.405 87.9187 120.879 87.9187 119.288L85.7662 73.5562C85.7178 72.4635 85.89 71.3721 86.2723 70.3473C86.6547 69.3224 87.2395 68.3851 87.9919 67.591C88.7443 66.797 89.6488 66.1626 90.6516 65.7256C91.6544 65.2886 92.7349 65.058 93.8287 65.0475H93.9074C95.0087 65.0469 96.0987 65.2695 97.1116 65.7017C98.1244 66.134 99.0393 66.767 99.8008 67.5625C100.562 68.358 101.155 69.2996 101.542 70.3304C101.93 71.3612 102.105 72.4598 102.056 73.56L102.071 73.5375Z"
            fill="#00BFE8"
          />
        </svg>
        <h2>Error 404</h2>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>{error.statusText || error.message}</p>
        <Link to = {'../Home'}><button className={styles.homeButton}>Home</button></Link>
        <div className={styles.revampedCopywrite}>
          <RevampedCopywrite color="#5B5757" />
        </div>
      </div>
    </div>
  );
}