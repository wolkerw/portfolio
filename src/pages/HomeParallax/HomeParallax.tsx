/* eslint-disable max-lines */
import React from 'react'

import { Home, Contact } from '../../containers'

import styles from './HomeParallax.module.css'

export const HomeParallax = () => {
  return (
    <div className={styles.homeParallax} id="sobreMim">
      <div className={styles.section}>
        <div className={styles.fixed}>
          <Home />
        </div>
      </div>
      <div className={styles.section} id="contato">
        <div className={styles.fixed}>
          <Contact />
        </div>
      </div>
      <div className={styles.section}>
        <p className={styles.fixed}>Thanks for watching</p>
      </div>
    </div>
  )
}
