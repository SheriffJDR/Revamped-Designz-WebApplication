import React from 'react'
import Carousel from '../Carousel'
import styles from './SalesAndDeals.module.css'

function SalesAndDeals({salesAndDealsItems}) {

  let ItemsOnSale = salesAndDealsItems;

  return (
    <section className = {styles.salesAndDealsSection}>
      <div className={styles.sDHeading}>
        <h2>Sales and Deals</h2>
      </div>
      <Carousel carouselItems = {ItemsOnSale} arrowNavigation={false} sliderNavigation={true} onSale={true}/>
    </section>
  )
}

export default SalesAndDeals