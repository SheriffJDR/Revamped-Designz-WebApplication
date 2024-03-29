import React, { forwardRef } from 'react'
import {Link} from 'react-router-dom';
import styles from './ProductCard.module.css'

const ProductCard = forwardRef(function ProductCard({products,spacing,hasSale},ref) {

  const {productId, url, name, cost,sale} = products;

  return (
    <>
      <Link to = {`/Products/${name}`}
        className={styles.productCardContainer}
        style={{ marginLeft: `${spacing}px` }}
        ref={ref}
      >
          <div className={styles.image}>
            <img className={styles.productImage} src={url} alt={name}></img>
          </div>
          <div className= {styles.productInfo}>
            <h2>{name}</h2>
            <h3>{cost}</h3>
            <p style={{ display: "none" }}>{productId}</p>
          </div>
        { hasSale ? (
          <div className={styles.salesContainer}>
            <h3><span>{`${sale}% `}</span>{`off`}</h3>
          </div>
        ) : null}
      </Link>
    </>
  );
})

export default ProductCard