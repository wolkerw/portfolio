import React, { FC } from 'react'

import styles from './Menu.module.css'

interface IMenu {
  links: string[]
}

export const Menu: FC<IMenu> = ({ links }) => {
  return (
    <ul className={styles.menu}>
      {links?.map((link) => {
        return (
          <li key={link}>
            <a className={styles.active}>{link}</a>
          </li>
        )
      })}
    </ul>
  )
}
