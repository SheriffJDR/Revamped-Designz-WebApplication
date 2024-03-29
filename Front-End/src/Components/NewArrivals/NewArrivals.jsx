import React from 'react'
import styles from './NewArrivals.module.css';
import Carousel from '../Carousel';

function NewArrivals({newArrivals}) {

    //Array conataining all the products to be loaded into new arrivals carousel
    const Arrivals = newArrivals;

    return (
        <section className={styles.newArrivalSection}>
            <div className={styles.newArrivalsHeading}>
                <h2>New Arrivals</h2>
            </div>
            <div className = {styles.newArrivalsContainer}>
            <Carousel carouselItems = {Arrivals} arrowNavigation = {true} sliderNavigation = {false}/>
            </div>
        </section>
    )
}

export default NewArrivals