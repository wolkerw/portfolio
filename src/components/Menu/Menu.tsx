import React, { FC } from "react";

// import { useAppSelector, useAppDispatch } from '../../app/hooks';
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   incrementIfOdd,
//   selectCount,
// } from './counterSlice';
// import styles from './Header.module.css';

interface IMenu {
  links: string[];
}

export const Menu: FC<IMenu> = ({ links }) => {
  return (
    <ul>
      <li>Teste</li>
    </ul>
  );
};
