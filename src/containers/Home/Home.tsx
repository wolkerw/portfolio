import React from 'react'

import { SocialBar } from './../../components/SocialBar'

// import theme from '../../Theme.module.css'
import styles from './Home.module.css'

export const Home = () => {
  return (
    // <div className={theme.content}>
    <div className={styles.home}>
      <div className={styles.leftSide}>
        <div className={styles.profileBox}>
          <img
            width="180"
            height="180"
            src={require('./../../assets/images/profile.jfif')}
          />
          <b>
            Luis Filipe
            <br /> Severgnini
          </b>
          <hr />
          <p>GERENTE DE PROJETOS</p>

          <SocialBar />
        </div>
      </div>

      <div className={styles.rightSide}>
        <h1>Prazer!</h1>
        {/* <b>Meu perfil e meus projetos</b>
          <p>Sou ...</p> */}
      </div>
    </div>
    // </div>
  )
}
