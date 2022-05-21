import React from 'react';
import {header} from "./data";
import {IoMenu} from 'react-icons/io5';
import classes from './Header.module.scss';
import {Modal} from "../modal/Modal.jsx";

const Header = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <div className={classes.header}>
                <div className={classes.header__nav}>
                   <img src='./img/logo.svg' alt='Shortly'/>
                    {header.menu.map(menu => <a key={menu.id} href={menu.url} title={menu.title}>{menu.title}</a>)}
                </div>
                <div className={classes.header__login}>
                    <a href='#' title='Login'>Login</a>
                    <a className={classes.header__login_signup} href='#' title='Sign Up'>Sign Up</a>
                    <IoMenu
                        onClick={() => setOpen(true)}
                        className={classes.header__login_burger}
                    />
                </div>
            </div>
            <Modal
                open={open}
                handleClose={() => setOpen(false)}
            >
                <div className={classes.header__mobile}>
                    {header.menu.map(menu => <a key={menu.id} href={menu.url} title={menu.title}>{menu.title}</a>)}
                    <hr/>
                    <a href='#' title='Login'>Login</a>
                    <a className={classes.header__login_signup} href='#' title='Sign Up'>Sign Up</a>
                </div>
            </Modal>
        </>
    );
}

export {Header}