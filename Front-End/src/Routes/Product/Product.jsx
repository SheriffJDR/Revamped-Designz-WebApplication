import React from 'react'
import styles from './Product.module.css'
import Nav from '../../Components/Nav'
import ProductGallery from '../../Components/ProductGallery'
import MoveToTopBtn from '../../Components/MoveToTopButton'
import SpecificationsTable from '../../Components/SpecificationsTable/SpecificationsTable'
import RevampedCopywrite from '../../Components/RevampedCopywrite/RevampedCopywrite'
import Footer from '../../Components/Footer'

export default function Product() {

    const images = [
        {
            productId : '0',
            url: '../../src/assets/Front_Lip.png'
        },
        {
            productId : '1',
            url: '../../src/assets/Front_Lip.png'
        },
        {
            productId : '2',
            url: '../../src/assets/Front_Lip.png'
        },
        {
            productId : '3',
            url: '../../src/assets/Front_Lip.png'
        },
        {
            productId : '4',
            url: '../../src/assets/Front_Lip.png'
        },
    ];
    const name = 'Ae100 Front Lip in Fiberglass';
    const cost = 150.25;
    const category = 'Front Lip'
    const description = "That know ask case sex ham dear her spot. Weddings followed the all marianne nor whatever settling. Perhaps six prudent several her had offence. Did had way law dinner square tastes. Recommend concealed yet her procuring see consulted depending. Adieus hunted end plenty are his."
    const specifications = {
        model : 'Ae10012423',
        vehicle: 'Toyota Ae100',
        dimensions : '120cm x 30cm x 12cm',
        weight: '0.5lbs',
        material:'Fiberglass'
    };

  return (
    <>
      <MoveToTopBtn />
      <Nav/>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.gallery}>
            <ProductGallery productImages={images} />
          </div>
          <div className={styles.productInfo}>
            <div className={styles.productTitle}>
              <hr />
              <h2>{category}</h2>
              <h1>{name}</h1>
              <h2>{`$BDS ${cost}`}</h2>
            </div>
            <div className={styles.productDescription}>
              <h1>Description</h1>
              <p>{description}</p>
            </div>
            <div className={styles.productSpecifications}>
              <h1>Specifications</h1>
              <SpecificationsTable specifications={specifications} />
            </div>
          </div>
          <div className={styles.copywrite}>
            <RevampedCopywrite color={`#00BFE8`} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
