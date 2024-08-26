import React from 'react'

import { Button } from '@mui/material'

import theme from '../../Theme.module.css'
import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={theme.content}>
        <h2>
          <span className={styles.icon}></span>Contato
        </h2>
        <div className={styles.contactBox}>
          <Button variant="contained">Enviar</Button>
        </div>
      </div>
    </div>
  )
}
