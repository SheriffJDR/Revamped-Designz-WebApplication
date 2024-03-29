import React from 'react'
import styles from './SpecificationsTable.module.css'

export default function SpecificationsTable({specifications}) {
    const specification = specifications;
  return (
    <div className={styles.specificationsTableContainer}>
      <table className={styles.specificationsTable}>
        <tbody className={styles.tableBody}>
          <tr>
            <td>Model</td>
            <td>{specification.model}</td>
          </tr>
          <tr>
            <td>Vehicle</td>
            <td>{specification.vehicle}</td>
          </tr>
          <tr>
            <td>Dimensions</td>
            <td>{specification.dimensions}</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>{specification.weight}</td>
          </tr>
          <tr>
            <td>Material</td>
            <td>{specification.material}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}