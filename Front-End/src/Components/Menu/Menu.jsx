import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Menu.module.css'
import RevampedCopywrite from '../RevampedCopywrite';

function Menu(props) {

  //Reference to parent compoent useState method the change main menu display state in nav component
  const toggleDisplay = props.setDisplayMainMenu;

  //Links to be rendered in menus
  const siteMapLinks = ['Home','Shop','Products','AboutUs'];
  const categoryLinks = ['Model','Bodykits','Front Lips','Sideskirts','Spoilers','Bumpers'];

  return (
    <div className={styles.menuContentContainer}>
      <div className={styles.menuTop}>
        <div
          className={styles.closeIcon}
          onClick={() => toggleDisplay((prevState) => !prevState)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M2.22183 2.22168L17.7782 17.778"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M2 17.5562L17.5563 1.9998"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className={styles.menuTitle}>
          <h1>Menu</h1>
          <h2>Site Map</h2>
        </div>
        <hr className={styles.menuHr} />
        <ul className={styles.menuItems}>
          {siteMapLinks.map((link, index) => (
            <Link key={index} to={`/${link}`} className={styles.menuLinks}>
              <li className={styles.menuItem}
              //Closes the menu when a linked in closed.
                onClick={() => toggleDisplay((prevState) => !prevState)}
              >
                {link}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className={styles.menuMiddle}>
        <div className={styles.middleMenuTitle}>
          <h2>Categories</h2>
        </div>
        <hr className={styles.menuHr} />
        <ul className={styles.menuItems}>
          {categoryLinks.map((link, index) => (
            <li key={index} className={styles.menuItem}>
              {link}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.menuBottom}>
        <RevampedCopywrite color="#5B5757" />
      </div>
    </div>
  );
}

export default Menu