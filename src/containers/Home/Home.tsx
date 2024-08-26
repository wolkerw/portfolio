import React from 'react'

import { SocialBar } from './../../components/SocialBar'
import { Button } from '@mui/material'

import styles from './Home.module.css'

export const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.leftSide}>
        <div className={styles.profileBox}>
          <img
            className={styles.profileImg}
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
        <div className={styles.alignCenter}>
          <h1>Prazer!</h1>
          <b>Meu perfil e meus projetos</b>
          <Button variant="contained">CURRÍCULO</Button>
          <Button variant="outlined">PROJETOS</Button>
          <p>
            Sou Mestre em Educação e Bacharel em Tecnologias Digitais pela UCS.
            <br />
            <br /> Ao longo dos meus 14 anos de experiência em desenvolvimento
            de software, trabalhei principalmente com aplicações web, além de
            projetos em Mobile, Desktop e arquitetura de soluções.
          </p>
        </div>
      </div>
    </div>
  )
}
