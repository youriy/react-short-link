import React from 'react';
import classes from './Boost.module.scss'

const Boost = () => {

    return (
        <div className={classes.boost}>
            <img className={classes.boost__desktop} src="./img/bg-boost-desktop.svg"/>
            <img className={classes.boost__mobile} src="./img/bg-boost-mobile.svg"/>
            <div className={classes.boost__title}>Boost your links today</div>
            <div className={classes.boost__action}><a href="#" title="Get Started">Get Started</a></div>
        </div>
    );
}

export {Boost}