import styles from './SwipeToScroll.module.css'

const SwipeToScroll = () => {

    return (
      <>
        <div className={styles.container}>
          <svg
            className={styles.left_arrow}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill='#ACA8A8'
          >
            <path d="M17.7656 21.5625L11.2969 15.1406L17.7656 8.71875L18.7031 9.65625L13.1719 15.1406L18.7031 20.625L17.7656 21.5625Z" />
          </svg>
          <h2 className={styles.swipeStyle}>Swipe to scroll</h2>
          <svg
            className={styles.right_arrow}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="#ACA8A8"
          >
            <path d="M12.2344 8.4375L18.7031 14.8594L12.2344 21.2812L11.2969 20.3438L16.8281 14.8594L11.2969 9.375L12.2344 8.4375Z" />
          </svg>
        </div>
      </>
    );

}

export default SwipeToScroll