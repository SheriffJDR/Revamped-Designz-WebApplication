import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Splash.module.css";
import RevampedCopywrite from "../RevampedCopywrite";

function Splash({ imageSource }) {
  /*useSate,useEffect and function for unmounting splash screen after set time. */
  const [displaySplashScreen, setDisplaySplashScreen] = useState(true);

  const setDisplay = () =>{
    setDisplaySplashScreen(!displaySplashScreen);
  }

  //Redirection function user to home page
  const navigate = useNavigate();

  //Sets timer when the app component is initially rendered
  useEffect(() => {
    const interval = setTimeout(setDisplay, 5000);

    if(!displaySplashScreen){
      navigate('Home');
    }

    return () => {
      clearTimeout(interval);
    };

  }, [displaySplashScreen]);

  return (

    displaySplashScreen ?
  <div className={styles.splashContentContainer}>
        <div className={styles.splashContent}>
          <img
              src={imageSource}
              width={238}
              height={340}
              alt="Revamped Designz company logo."
          />
          <p>
              Powered by <span>Phoenix Technologies</span>
          </p>
        </div>
      <div className ={styles.splashCopywrite}>
            <RevampedCopywrite color = '#5B5757'/>
        </div>
      
    </div> : null

  );
}

export default Splash;
