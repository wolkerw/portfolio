import React, { FC } from 'react'

import styles from './SocialBar.module.css'

export const SocialBar: FC = () => {
  return (
    <ul className={styles.menu}>
      <li>
        <a className={styles.active}>teste</a>
      </li>
    </ul>
  )
}
