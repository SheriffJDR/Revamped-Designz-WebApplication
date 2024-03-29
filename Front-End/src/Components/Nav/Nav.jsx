import React, {useState} from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import Menu from '../Menu'
import styles from'./Nav.module.css'
import logo from '../../assets/Revamped_Designz_logo.png'
import imageSource from '../../assets/logo-icon-transparent.png'

function Nav() {

  //useState state for mobile main menu 
  const [displayMainMenu, setDisplayMainMenu] = useState(false);

  return (
    <>
      <nav>
        <div className={styles.nav_top_content}>
          <Link to ='/Home'className={styles.imageContainer}><img src={imageSource} alt="Revamped designz logo"></img></Link>
          <div className={styles.hamburger_menu_container}>
            {displayMainMenu &&
              createPortal(
                <Menu
                  setDisplayMainMenu={setDisplayMainMenu}
                  display={displayMainMenu}
                />,
                document.getElementById("root")
              )}
            <svg
              onClick={() => setDisplayMainMenu(!displayMainMenu)}
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="18"
              viewBox="0 0 26 18"
              fill="none"
            >
              <path
                d="M2 2L24 2"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M2 9L24 9"
                stroke="#00BFE8"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M2 16L24 16"
                stroke="#00BFE8"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        <Link to ='/Home' className={styles.logoName}>
          {/* <h2>
            Revamped <span className={styles.designz}>Designz</span>
          </h2> */}
          <img src = {logo} alt='Revamped Designz Main Logo'/>
        </Link>
        <div className={styles.nav_items_container}>
          <hr className={styles.navHr} />
          <ul className={styles.nav_items}>
            <Link to = '/Shop'><li className={styles.nav_items_1}>Shop</li></Link>
            <li className={styles.nav_items_3}>Categories</li>
            <Link to = '/AboutUs'><li className={styles.nav_items_4}>About Us</li></Link>
            <Link to = '/Projects'><li className={styles.nav_items_5}>Projects</li></Link>
          </ul>
          <hr className={styles.navHr} />
        </div>
      </nav>
    </>
  );
}

export default Nav