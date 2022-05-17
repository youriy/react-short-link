import React from 'react';
import {header} from "./data";
import {IoMenu} from 'react-icons/io5';
import classes from './Header.module.scss';

const Header = () => {

    return (
        <div className={classes.header}>
            <div className={classes.header__nav}>
               <img src='./img/logo.svg' alt='Shortly'/>
                {header.menu.map(menu => <a key={menu.id} href={menu.url} title={menu.title}>{menu.title}</a>)}
            </div>
            <div className={classes.header__login}>
                <a href='#' title='Login'>Login</a>
                <a className={classes.header__login_signup} href='#' title='Sign Up'>Sign Up</a>
                <IoMenu className={classes.header__login_burger}/>
            </div>
        </div>
    );
}

export {Header}