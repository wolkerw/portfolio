import React, { FC } from 'react'

import styles from './SocialBar.module.css'

export const SocialBar: FC = () => {
  return (
    <ul className={styles.socialBar}>
      <li>
        <button
          className="mdc-button"
          onClick={() =>
            window.open('https://www.linkedin.com/in/lfsevergnini/')
          }
        >
          <span className="mdc-button__ripple"></span>
          <img width="25" src={require('../../assets/icons/linkedin.png')} />
        </button>
        <button
          onClick={() => window.open('https://www.instagram.com/lfsevergnini/')}
        >
          <img width="25" src={require('../../assets/icons/instagran.png')} />
        </button>
      </li>
    </ul>
  )
}
