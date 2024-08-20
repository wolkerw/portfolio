import React from 'react'

// import theme from '../../Theme.module.css'
import styles from './Home.module.css'

export const Home = () => {
  return (
    // <div className={theme.content}>
    <div className={styles.home}>
      <div className={styles.leftSide}>
        <b>Luis Filipe Severgnini</b>
        {/* <p>GERENTE DE PROJETOS</p> */}
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
