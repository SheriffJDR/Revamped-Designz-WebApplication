import React from 'react'
import ImageSlider from '../ImageSlider'
import styles from './FeaturedSection.module.css'

function FeaturedSection() {
  
  const featuredItems = [
    {
      'url':'https://images.unsplash.com/photo-1646723907212-a61af18b6884?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2060&q=80'
    },
    {
      'url':'https://images.unsplash.com/photo-1593347939083-6fd1f553d0ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      'url':'https://images.unsplash.com/photo-1638850142923-33db1a0bb470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
    },
  ]

  return (
    <section className={styles.featuredSection}>
        <div className={styles.featuredHeading}>
          <h2>Featured</h2>
        </div>
        <ImageSlider Imageset = {featuredItems} />
    </section>
  )
}

export default FeaturedSection