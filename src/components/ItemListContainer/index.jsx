import React from 'react'
import styles from "./itemListContainer.module.scss"

const ItemListContainer = ({greeting}) => {
  return (
    <div className={styles.saludos}>
        <p>{greeting}</p>
    </div>
  )
}

export default ItemListContainer