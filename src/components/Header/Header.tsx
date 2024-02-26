import React, { useState } from 'react';

// import { useAppSelector, useAppDispatch } from '../../app/hooks';
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   incrementIfOdd,
//   selectCount,
// } from './counterSlice';

import { Menu} from '../Menu'

import styles from './Header.module.css';

export const Header = () =>{
  // const count = useAppSelector(selectCount);
  // const dispatch = useAppDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');

  // const incrementValue = Number(incrementAmount) || 0;

  const menuLinks = ['SOBRE MIM', 'CURRÍCULO']

  return (
    <header className={styles.header}>
      <p><b>Luis Filipe Severgnini</b> / Gerente de projetos</p>

      <Menu links={menuLinks}></Menu>
      
    </header>
  );
}
