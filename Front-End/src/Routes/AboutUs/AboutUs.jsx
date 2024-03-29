import React from 'react'
import FounderHero from '../../Components/FounderHero'
import Nav from '../../Components/Nav'
import styles from './AboutUs.module.css'
import RevampedCopywrite from '../../Components/RevampedCopywrite/RevampedCopywrite'
import Footer from '../../Components/Footer/Footer'

function AboutUs() {

  const founderPortrait = { 
    imageId : '0',
    src : 'https://images.unsplash.com/photo-1587837073080-448bc6a2329b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80',
    alt: 'Portrait of the founder of Revamped Designz.'
  }

  return (
    <>
      <Nav/>
      <div className={styles.aboutUsContainer}>
        <FounderHero portrait={founderPortrait} />
        <div className={styles.aboutUsContent}>
          <div className={styles.history}>
            <hr className={styles.aboutUsHr}/>
            <h1>History</h1>
            <p>
              Are own design entire former get should. Advantages boisterous day
              excellence boy. Out between our two waiting wishing. Pursuit he he
              garrets greater towards amiable so placing. Nothing off how norland
              delight. Abode shy shade she hours forth its use. Up whole of fancy ye
              quiet do. Justice fortune no to is if winding morning forming.
            </p>
          </div>
          <div className={styles.missionStatement}>
            <h1>Our Mission</h1>
            <p>
              Far concluded not his something extremity. Want four we face an he
              gate. On he of played he ladies answer little though nature. Blessing
              oh do pleasure as so formerly.
            </p>
          </div>
          <div className={styles.workDescription}>
            <h1>What we do?</h1>
            <p>
              Far concluded not his something extremity. Want four we face an he
              gate. On he of played he ladies answer little though nature. Blessing
              oh do pleasure as so formerly.
            </p>
          </div>
          <hr className={styles.aboutUsHr}/>
        </div>
      </div>
      <RevampedCopywrite color='#00BFE8'/>
      <Footer/>
    </>
  );
}

export default AboutUs