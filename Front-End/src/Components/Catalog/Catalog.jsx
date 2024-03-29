import React,{useState,useEffect} from 'react'
import styles from './Catalog.module.css'
import ProductCard from '../../Components/ProductCard/ProductCard'

export default function Catalog({products,batchAmount}) {

    const [page,setPage] = useState(1);
    const [batch,setBatch] = useState(0);

    let numberOfBatches = 0;
    
    //Calculates total number of pages or batches to be rendered.
    if(batchAmount != 0){
        numberOfBatches = products.length / batchAmount; 
    }

    //Shows Next Page
    const getNextPage = () =>{

        if (page >= numberOfBatches) {
            return;
        }

      //Scrolls back to the top of the page
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });

      setPage((page) => page + 1);
      setBatch((batch) => batch + 1);
    }

    //Shows Previous Page
    const getPreviousPage = () =>{

        if (page <= 1) {
            return;
        }
    
      //Scrolls back to the top of the page
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });

      setPage((page) => page - 1);
      setBatch((batch) => batch - 1);
    }
    
    const getBatch = (batchAmount,batch) =>{

      const items = [];

      //Calculates starting index and ending index for page batch
      let startingPoint = 0;
      let endingPoint = 0;

      //If first batch of content to be rendered
      if(batch == 0){

        startingPoint = 0;
        endingPoint = batchAmount - 1;

      }else if(batch > 0){
        //Indexs for all subsequent batches
        startingPoint = batch * batchAmount;
        endingPoint = (batchAmount * (batch + 1)) - 1;
      }

      //Gets specified batch from list of all products.
      for(let i = startingPoint; i < endingPoint + 1; i++ ){
          //Ensures that function does not try to access an index that is out of bounds.
        if(i == products.length){
          break;
        }
        items.push(products[i]);
      }

      return items;
    }

    return (
      <div className={styles.catalog}>
        <div className={styles.catalogSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M12.9 14.3202C11.2927 15.5688 9.26997 16.1578 7.24363 15.9673C5.2173 15.7769 3.33973 14.8213 1.99325 13.2951C0.646757 11.7689 -0.0674123 9.78685 -0.00384476 7.75258C0.0597228 5.71831 0.896247 3.78474 2.3354 2.34559C3.77455 0.90644 5.70811 0.0699157 7.74239 0.00634812C9.77666 -0.0572194 11.7587 0.656949 13.2849 2.00344C14.8111 3.34993 15.7667 5.22749 15.9571 7.25383C16.1476 9.28016 15.5586 11.3029 14.31 12.9102L19.66 18.2402L18.24 19.6602L12.91 14.3202H12.9ZM8 14.0002C8.78794 14.0002 9.56815 13.845 10.2961 13.5435C11.0241 13.2419 11.6855 12.8 12.2426 12.2428C12.7998 11.6857 13.2418 11.0243 13.5433 10.2963C13.8448 9.56834 14 8.78813 14 8.0002C14 7.21227 13.8448 6.43205 13.5433 5.7041C13.2418 4.97614 12.7998 4.31471 12.2426 3.75756C11.6855 3.2004 11.0241 2.75845 10.2961 2.45692C9.56815 2.15539 8.78794 2.0002 8 2.0002C6.4087 2.0002 4.88258 2.63234 3.75736 3.75756C2.63214 4.88277 2 6.4089 2 8.0002C2 9.5915 2.63214 11.1176 3.75736 12.2428C4.88258 13.3681 6.4087 14.0002 8 14.0002Z"
              fill="white"
            />
          </svg>
        </div>
        <div className={styles.catalogHeading}>
          <h2>Catalog</h2>
          <hr className={styles.catalogHr} />
        </div>
        <div className={styles.productsContainer}>
          {
            //Renders only the specified batch of products from the full list of products
            //Also accounts for products that have sales.
            getBatch(batchAmount,batch).map(product => {
                if (product.hasSale) {
                  return (
                    <ProductCard
                      key={product.productId}
                      products={product}
                      spacing={0}
                      hasSale={true}
                    />
                  );
                } else {
                  return (
                    <ProductCard
                      key={product.productId}
                      products={product}
                      spacing={0}
                      hasSale={false}
                    />
                  );
                }
            })
          }
        </div>
        <div className={styles.catalogNavigation}>
          <div className={styles.next} onClick={getNextPage}>
            <p>Next</p>
            <svg
              className={styles.nextArrow}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M12.2344 8.4375L18.7031 14.8594L12.2344 21.2812L11.2969 20.3438L16.8281 14.8594L11.2969 9.375L12.2344 8.4375Z"
                fill="#00BFE8"
              />
            </svg>
          </div>
          <div className={styles.pageNumbering}>
            <p>
              {page - 1 <= 0 ? null : `...${page - 1}`}
              <span className={styles.currentPageNumber}>{page}</span>
              {page >= numberOfBatches ? null : `${page + 1}...`}
            </p>
          </div>
          <div className={styles.previous} onClick={getPreviousPage}>
            <svg
              className={styles.previousArrow}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M17.7656 21.5625L11.2969 15.1406L17.7656 8.71875L18.7031 9.65625L13.1719 15.1406L18.7031 20.625L17.7656 21.5625Z"
                fill="white"
              />
            </svg>
            <p>Previous</p>
          </div>
        </div>
      </div>
    );
}