import React, { FC } from 'react'

import { camelizeString } from '../../utils'

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
            <a href={`#${camelizeString(link)}`}>{link}</a>
          </li>
        )
      })}
    </ul>
  )
}
