import React from 'react';
import {data} from "./data";
import classes from "./Footer.module.scss"

const Footer = () => {

    return (
        <div className={classes.container}>
            <div className={classes.footer}>
                <div className={classes.footer__logo}>
                    <img src="./img/logo-footer.svg"/>
                </div>
                <div className={classes.footer__nav}>
                    {data.menu.map(item => <NavItem key={item.groupId} {...item}/>)}
                </div>
                <Social {...data}/>
            </div>
        </div>
    );
};

export {Footer}

const NavItem = ({groupTitle = '', links = []}) => {

    return (
        <div className={classes.nav}>
            <div className={classes.nav__title}>{groupTitle}</div>
            <ul>
                {links.map(link => <li key={link.linkId}><a href={link.href} title={link.title}>{link.title}</a></li>)}
            </ul>
        </div>
    );
};

const Social = ({social = []}) => {

    return (
        <div className={classes.social}>
            {social.map(
                item =>
                    <a key={item.id} href={item.href} title={item.title}>
                        <img alt={item.title} src={item.img}/>
                    </a>
            )}
        </div>
    );
};