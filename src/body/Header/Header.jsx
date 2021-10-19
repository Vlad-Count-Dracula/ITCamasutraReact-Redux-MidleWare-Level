import React from "react";
import Logo from './img/Logo.png'
import s from'./Header.module.css';

const Header = () => {
    return (
      <header className={s.header}>
        <img src={Logo} alt=''></img>
      </header>
    );
  };

  
  export default Header;